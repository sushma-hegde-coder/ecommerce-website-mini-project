import { ProductType } from "../../types";

const ActionTypes = {
  ADD_TO_CART: "[Cart] Add to cart",
  REMOVE_ITEM: "[Cart] Remove item",
  UPDATE_QTY: "[Cart] Update qty",
};

const addToCart = (product: ProductType) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    product,
  };
};
const removeItem = (id: number) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    id,
  };
};
// const updateProductQty = (quantity: number) => {
//   return {
//     type: ActionTypes.UPDATE_QTY,
//     quantity,
//   };
// };
export default { ActionTypes, addToCart, removeItem };
