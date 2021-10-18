import { atom, selector } from "recoil";

const CartState = atom({
  key: "cart_id",
  default: []
})

export default CartState