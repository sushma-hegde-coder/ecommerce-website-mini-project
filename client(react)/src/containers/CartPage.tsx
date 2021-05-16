import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CartType, StoreType, CurrencyRateType } from "../types";
import Column from "../components/Column";
import CartItem from "../components/CartItem";

type Props = {
  cartItems: CartType[];
  currency: CurrencyRateType;
  removeCartItem: (id: number) => void;
};

type State = {
  totalAmount: number;
};

const mapStoreToProps = (store: StoreType) => {
  return {
    cartItems: store.cart,
    currency: store.currency,
  };
};

class CartPage extends React.Component<Props, State> {
  state: State = { totalAmount: 0 };
  getCorrectCurrencyValue(priceAmount: number) {
    //convert to correct currency value by doing calculation
    const value = priceAmount * this.props.currency.value;
    return value.toString();
  }

  /*setTotalAmount(quantity: number, salePrice: string, operation: string) {
    console.log(quantity, salePrice, operation);
    if (operation === "increment") {     
      this.state.totalAmount =
      this.state.totalAmount + parseInt(salePrice) * quantity;
      console.log(this.state.totalAmount, parseInt(salePrice), quantity);
      console.log("total", this.state.totalAmount);
    }
    if (operation === "decrement") {     
      this.state.totalAmount =
      this.state.totalAmount - parseInt(salePrice) * quantity;
      console.log("total", this.state.totalAmount);
    }
  }*/

  incrementTotal(quantity: number, salePrice: string) {
    quantity = quantity + 1;
    this.state.totalAmount =
      this.state.totalAmount + parseInt(salePrice) * quantity;
    console.log("increment total", this.state.totalAmount, salePrice, quantity);
  }

  decrementTotal(quantity: number, salePrice: string) {
    quantity = quantity - 1;
    this.state.totalAmount =
      this.state.totalAmount - parseInt(salePrice) * quantity;
    console.log("decrement total", this.state.totalAmount);
  }

  render() {
    console.log(this.props.cartItems);
    return (
      <div>
        {this.props.cartItems.map((item: any) => (
          <CartItem
            image={item.productImage}
            name={item.productName}
            price={this.getCorrectCurrencyValue(item.productPrice)}
            salePrice={this.getCorrectCurrencyValue(item.productSalePrice)}
            currencyCode={this.props.currency.currencyCode}
            quantity={item.productQty}
            /*setTotalAmount={() =>
              this.setTotalAmount(
                item.productQty,
                item.productSalePrice,
                "increment"
              )
            }
            operation="increment"*/
            incrementTotal={() =>
              this.incrementTotal(item.productQty, item.productSalePrice)
            }
            decrementTotal={() =>
              this.decrementTotal(item.productQty, item.productSalePrice)
            }
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    //   hideLoader: () => dispatch(LoadingActions.hideLoader()),
    //   showLoader: () => dispatch(LoadingActions.showLoader()),
    //   addItem: (p: ProductType) => dispatch(CartActions.addToCart(p)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(CartPage);
