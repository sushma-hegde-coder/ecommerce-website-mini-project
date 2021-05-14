import { CurrencyRateType } from "../../types";

const ActionTypes = {
  UPDATE_CURRENCY: "[Currency] Update Currency",
};

const updateCurrency = (code: CurrencyRateType) => {
  return {
    type: ActionTypes.UPDATE_CURRENCY, // required, unique
    code, // payload (optional)
  };
};

export default { updateCurrency, ActionTypes };
