import React, { useState } from "react";
import Column from "../components/Column";
import ErrorBoundary from "../components/ErrorBoundary";
import Row from "../components/Row";
import { flexbox } from "@material-ui/system";
import ProductService from "../services/ProductService";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ProductPrice from "../components/ProductPrice";
import { CurrencyRateType, StoreType } from "../types";
import { connect } from "react-redux";

const styles = {
  root: {
    maxWidth: 900,
    marginLeft: "25vh",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
};

type Props = {
  selectedCurrency: CurrencyRateType;
};
type State = {
  productId: number; //don't use prodInfo: ProductType..later you can't access individuals after setState
  productName: string;
  productPrice: string;
  productImage: string;
  productSalePrice: string;
  productStock: number;
};

class ProductDetail extends React.Component<any, any> {
  state: State = {
    productId: 1,
    productName: "",
    productPrice: "1",
    productImage: "",
    productSalePrice: "",
    productStock: 1,
  };
  async componentDidMount() {
    try {
      const params: any = this.props.match.params;
      const { data } = await ProductService.getProductById(params.id);
      this.setState({
        productId: data.productId,
        productName: data.productName,
        productPrice: data.productPrice,
        productImage: data.productImage,
        productSalePrice: data.productSalePrice,
        productStock: data.productStock,
      });
      //console.log(this.state);
    } catch (e) {
      console.log("error", e);
    }
  }

  extractFirstLetter(name: string) {
    let na: string = name.substring(0, 1);
    return na.toUpperCase();
  }

  toUpper(name: string) {
    return name.toUpperCase();
  }

  getCorrectCurrencyValue(priceAmount: number) {
    let value: number = priceAmount * this.props.selectedCurrency.value;
    return value.toString();
  }
  convertStringToInt(myString: string) {
    return parseInt(myString);
  }

  render() {
    //console.log(this.props);
    //console.log(this.props.classes);
    //console.log(this.props.location);
    //console.log(history);
    //console.log(this.props.classes);
    const { classes } = this.props;
    return (
      <ErrorBoundary>
        <Card className={classes.root}>
          <div className={classes.header}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {this.extractFirstLetter(this.state.productName)}
                </Avatar>
              }
              title={this.toUpper(this.state.productName)}
            />
          </div>
          <CardMedia
            className={classes.media}
            image={this.state.productImage}
            title="Paella dish"
          />
          <CardContent>
            <ProductPrice
              price={this.getCorrectCurrencyValue(
                this.convertStringToInt(this.state.productPrice)
              )}
              salePrice={this.getCorrectCurrencyValue(
                this.convertStringToInt(this.state.productSalePrice)
              )}
              code={this.props.selectedCurrency.currencyCode}
            />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <Collapse timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </ErrorBoundary>
    );
  }
}

const mapStoreToProps = (store: StoreType) => {
  return {
    selectedCurrency: store.currency, // undefined => INR => USD
  };
};
//export default ProductDetail;
export default connect(mapStoreToProps)(withStyles(styles)(ProductDetail));
