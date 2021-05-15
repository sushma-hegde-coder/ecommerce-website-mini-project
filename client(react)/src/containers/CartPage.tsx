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
  counterForQuantity: number;
};

const mapStoreToProps = (store: StoreType) => {
  return {
    cartItems: store.cart,
    currency: store.currency,
  };
};

class CartPage extends React.Component<Props, State> {
  getCorrectCurrencyValue(priceAmount: number) {
    console.log(priceAmount, this.props.currency.value);
    const value = priceAmount * this.props.currency.value;
    return value.toString();
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
