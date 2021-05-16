import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ProductPrice from "./ProductPrice";
import CartPage from "../containers/CartPage";
import TextField from "@material-ui/core/TextField";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "68vw",
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
    width: 175,
  },
  controls: {
    margin: "1vh",
    display: "flex",
    justifyContent: "space-between",
  },
  textfield: {
    margin: theme.spacing(1),
    width: 50,
  },
  quantityControl: {},
  playIcon: {
    height: 25,
    width: 25,
  },
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
  id: number;
  image: string;
  name: string;
  price: string;
  salePrice: string;
  currencyCode: string;
  quantity: number;
  /* setTotalAmount: (
    quantity: number,
    salePrice: string,
    operation: string
  ) => void;
  operation: string;*/
  incrementTotal: (salePrice: string, id: number) => void;
  decrementTotal: (salePrice: string, id: number) => void;
  removeCartItem: (id: number, quantity: number, salePrice: string) => void;
};

const CartItem: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  salePrice,
  currencyCode,
  quantity,
  //setTotalAmount,
  //operation,
  incrementTotal,
  decrementTotal,
  removeCartItem,
}) => {
  const classes = useStyles();
  const theme = useTheme();
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
          <ProductPrice
            price={price}
            salePrice={salePrice}
            code={currencyCode}
          />
        </CardContent>

        <div className={classes.controls}>
          <div>
            <IconButton>
              <IndeterminateCheckBoxOutlinedIcon
                className={classes.playIcon}
                onClick={() => {
                  decrementTotal(salePrice, id);
                  //  setTotalAmount(quantity,salePrice,"decrement"); //you can not do this setTotalAmount(1,2,"decrement")
                  //whatever is got from parent as props you have to use it and pass it back in order to call parent's function
                }}
              />
            </IconButton>
            <TextField
              id="outlined-helperText"
              value={quantity}
              variant="outlined"
              className={classes.textfield}
            />
            <IconButton>
              <AddBoxOutlinedIcon
                className={classes.playIcon}
                onClick={() => incrementTotal(salePrice, id)}
              />
            </IconButton>
          </div>
          <div>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => {
                removeCartItem(id, quantity, salePrice);
              }}
            >
              REMOVE
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
