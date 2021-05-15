import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import formatter from "../utils/formatter";
import ProductPrice from "./ProductPrice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "65vw",
    margin: "1vh",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 160,
  },
  controls: {
    display: "flex",
    //   alignItems: "center",
    //   paddingLeft: theme.spacing(1),
    //   paddingBottom: theme.spacing(1),
  },
  // playIcon: {
  //   height: 30,
  //   width: 38,
  // },

  button: {
    margin: theme.spacing(1),
    backgroundColor: "#fff",
    color: "#212121",
    "&:hover": {
      backgroundColor: "#e53935",
      color: "#fff",
    },
  },
}));

type Props = {
  image: string;
  name: string;
  price: string;
  salePrice: string;
  currencyCode: string;
};

const CartItem: React.FC<Props> = ({
  image,
  name,
  price,
  salePrice,
  currencyCode,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log({ image });
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>

          {/* <Typography variant="subtitle1" color="textPrimary">
            {currencyCode}
            {salePrice}
            {price}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {currencyCode}
            {price}
          </Typography> */}

          <ProductPrice
            price={price}
            salePrice={salePrice}
            code={currencyCode}
          />
        </CardContent>
        <div className={classes.controls}>
          <Button
            className={classes.button}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
