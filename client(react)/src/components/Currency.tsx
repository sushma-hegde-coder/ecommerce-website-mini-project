import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CurrencyActions from "../store/actions/CurrencyActions";
import CurrencyExachangeService from "../services/CurrencyExchangeService";
import { CurrencyRateType } from "../types";

type CurrencyProps = {
  currencyChange: (code: CurrencyRateType) => void;
  theme?: "light" | "dark";
};

type State = {
  curCodeMap: Map<string, number>;
  currencyName: string;
  name: string;
  currencyValue: number;
  value: number;
};

class Currency extends React.Component<CurrencyProps> {
  state: State = {
    curCodeMap: new Map<string, number>(),
    currencyName: "EUR",
    name: "EUR",
    currencyValue: 1,
    value: 1,
  };

  async componentDidMount() {
    try {
      const { data } = await CurrencyExachangeService.getExchangeRate(); //should be data only the response is only data object
      const curCodeMap = data.rates;
      let convertedMap = new Map(Object.entries(curCodeMap)); //returns an array [key, value]
      this.setState({ curCodeMap: convertedMap });
    } catch (e) {
      console.log("error", e);
    }
  }

  render() {
    const codes = ["EUR", "USD", "CAD", "GBP", "INR", "AED", "AFN"];
    const bgcolor = this.props.theme === "dark" ? "text-light" : "text-dark";
    return (
      <div>
        <select
          onChange={(e) => {
            console.log("inside the onchange func", this.state.curCodeMap);
            const name = e.target.value; //can give let name since you not assigning it to any var
            this.setState((state) => {
              return { currencyName: name };
            });
            //this.setState({ currencyName: name});
            console.log(
              "now clicked--",
              name,
              "set state cur name--",
              this.state.currencyName
            );
            // const value= this.state.curCodeMap.get(e.target.value);
            //const value = this.state.curCodeMap.get(this.state.currencyName); //since you are assigning it later,data type has to be defined
            const value = this.state.curCodeMap.get(name);
            this.setState((state) => {
              return { currencyValue: value };
            });
            //this.setState({ currencyValue: value });
            console.log(
              "cur value-- ",
              value,
              "set state cur value",
              this.state.currencyValue // let na:string =e.target.value;// let val:number = 3;
            );

            this.props.currencyChange({
              currencyCode: e.target.value,
              value: this.state.currencyValue,
            });
          }}
          className={`form-control-sm ${bgcolor} bg-${this.props.theme}`}
        >
          {codes.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    );
  }
}
// connect(what data to fetch from the store, what data to update inside the store)(component)
//defined all data types correctly, see where it is defined string. Then change it to user defined datatype
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    currencyChange: (code: CurrencyRateType) =>
      dispatch(CurrencyActions.updateCurrency(code)),
  };
};
export default connect(null, mapDispatchToProps)(Currency);
