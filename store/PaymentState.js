import { atom } from "recoil";

const PaymentState = atom({
  key: "payment_id",
  default: []
})

export default PaymentState