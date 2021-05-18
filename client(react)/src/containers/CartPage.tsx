import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CartActions from "../store/actions/CartActions";
import { CartType, StoreType, CurrencyRateType } from "../types";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";
import "../styles/CartStyle.css";

type Props = {
  cartItems: CartType[];
  currency: CurrencyRateType;
  cartLength: number;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
  removeItemFromCart: (id: number) => void;
};

type State = {
  totalAmount: number;
};

const mapStoreToProps = (store: StoreType) => {
  return {
    cartItems: store.cart,
    currency: store.currency,
    cartLength: store.cart.length,
  };
};

class CartPage extends React.Component<Props, State> {
  state: State = { totalAmount: history.state.state.totalAmount };
  getCorrectCurrencyValue(priceAmount: number) {
    //convert to correct currency value by doing calculation
    const value = priceAmount * this.props.currency.value;
    return value.toString();
  }

  incrementTotal(salePrice: string, id: number) {
    this.props.incrementQty(id);
    this.state.totalAmount = this.state.totalAmount + parseInt(salePrice);
    this.setState((prevState) => ({
      totalAmount: prevState.totalAmount,
    }));
    console.log(this.state.totalAmount);
  }

  decrementTotal(salePrice: string, id: number) {
    this.props.decrementQty(id);
    this.state.totalAmount = this.state.totalAmount - parseInt(salePrice);
    this.setState((prevState) => ({
      totalAmount: prevState.totalAmount,
    }));
    console.log(this.state.totalAmount);
  }

  removeCartItem(id: number, quantity: number, salePrice: string) {
    alert("Are you sure you want to remove this item?");
    console.log("total amount before deleting", this.state.totalAmount);
    this.state.totalAmount =
      this.state.totalAmount - parseInt(salePrice) * quantity;
    console.log(
      "quantity, saleprice",
      this.state.totalAmount,
      quantity,
      salePrice
    );
    this.setState((prevState) => ({
      totalAmount: prevState.totalAmount,
    }));
    this.props.removeItemFromCart(id);
  }

  render() {
    console.log(this.props.cartItems);
    console.log("pushed totoal", history.state.state.totalAmount); //very very important
    return (
      <div className="cart">
        <div>
          <h5>My Cart ({this.props.cartLength})</h5>
          {this.props.cartItems.map((item: any) => (
            <CartItem
              id={item.productId}
              image={item.productImage}
              name={item.productName}
              price={this.getCorrectCurrencyValue(item.productPrice)}
              salePrice={this.getCorrectCurrencyValue(item.productSalePrice)}
              currencyCode={this.props.currency.currencyCode}
              quantity={item.productQty}
              incrementTotal={() =>
                this.incrementTotal(item.productSalePrice, item.productId)
              }
              decrementTotal={() =>
                this.decrementTotal(item.productSalePrice, item.productId)
              }
              removeCartItem={() =>
                this.removeCartItem(
                  item.productId,
                  item.productQty,
                  item.productSalePrice
                )
              }
            />
          ))}
        </div>
        <CartSummary
          numOfItems={this.props.cartLength}
          total={this.state.totalAmount}
          currencyCode={this.props.currency.currencyCode}
        />
        <div className="footer">
          <Link to={"/checkout"}>
            <button type="button" className="btn btn-primary btn-lg">
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    incrementQty: (id: number) => dispatch(CartActions.incrementQty(id)),
    decrementQty: (id: number) => dispatch(CartActions.decrementQty(id)),
    removeItemFromCart: (id: number) => dispatch(CartActions.removeItem(id)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(CartPage);
