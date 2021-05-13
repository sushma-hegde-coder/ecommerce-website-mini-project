import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CurrencyActions from "../store/actions/CurrencyActions";
import CurrencyExachangeService from "../services/CurrencyExchangeService";
import { ExchangeCurrencyType } from "../types";

type CurrencyProps = {
  currencyChange: (code: string) => void;
  theme?: "light" | "dark";
};

type State = {
  currencyRateObject: ExchangeCurrencyType;
  currencyRate: object;
};

class Currency extends React.Component<CurrencyProps> {
  async componentDidMount() {
    try {
      const currencyRateObject =
        await CurrencyExachangeService.getExchangeRate();
      //console.log(currencyRateObject);
      //console.log("success", currencyRateObject.data.rates);
      const currencyRate = currencyRateObject.data.rates;
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    const codes = ["INR", "USD", "CAD", "GBP", "EUR"];
    const bgcolor = this.props.theme === "dark" ? "text-light" : "text-dark";
    return (
      <select
        onChange={(e) => this.props.currencyChange(e.target.value)}
        className={`form-control-sm ${bgcolor} bg-${this.props.theme}`}
      >
        {codes.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    );
  }
}
// connect(what data to fetch from the store, what data to update inside the store)(component)
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    currencyChange: (code: string) =>
      dispatch(CurrencyActions.updateCurrency(code)),
  };
};
export default connect(null, mapDispatchToProps)(Currency);
