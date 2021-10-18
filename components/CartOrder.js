import React from "react";
import StatusLogo from "./StatusLogo";
import PaymentState from "../store/PaymentState";
import { useRecoilState } from "recoil"
import Image from "next/image"
import bca from "../public/assets/bca.png"
import mandiri from "../public/assets/mandiri.png"
import Button from "./Button";
import router from "next/router";

function CartOrder() {
  const [paymentState, setPaymentState] = useRecoilState(PaymentState)
  return (
    <div className="w-full justify-center flex flex-col items-center">
      {
        (paymentState.length > 0) ?
        paymentState.map(item => {
          if(item.cart.length > 0) {
            return (<div className="my-9 bg-white py-6 rounded-3xl w-1/2" key={item.no_order}>
                <div className="border-b border-gray-300">
                  <div className="px-14">
                    <div className="text-black text-2xl">No. Order: {item.no_order}</div>
                    <div className="text-xl pb-2 text-gray-400">
                      (Order Successful {item.created_at})
                    </div>
                  </div>
                </div>
                <div className="flex px-14 items-start justify-between">
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold mt-6">
                      {item.cart[0].name}
                    </div>
                    <div className="text-xl mt-1">Size {item.cart[0].size}</div>
                    <StatusLogo status={item.status} />
                    <div className="text-2xl font-semibold text-main-color my-6">
                      Status : {
                        item.status == 1 ? 'Waiting for Payment' : item.status == 2 ? 'Payment has been confirmed' : item.status == 3 ? 'Package is on the way' : item.status == 4 ? 'Packet has been Received' : 'No status'
                      }
                    </div>
                  </div>
                  <div className="relative w-16 h-16 my-3">
                    {
                      item.paymentMethod == 1 ? 
                      <Image
                        src={bca}
                        alt={`product`}
                        width={65}
                        height={65}
                        layout="responsive"
                      /> :
                      <Image
                        src={mandiri}
                        alt={`product`}
                        width={65}
                        height={65}
                        layout="responsive"
                      />
                    }
                  </div>
                </div>
                  <div className="mx-12">
                    <Button.primary className={` w-full my-3 py-8 items-center flex justify-center text-xl font-normal bg-white border-blue-300 border-2  transition-all duration-300`} onClick={()=> router.push(`/order/${item.no_order}`)}>View Order</Button.primary>
                  </div>
              </div>
            )
          }
        })
        :
        <div className="text-xl my-3">Tidak Ada Order</div>
      }
    </div>
  );
}

export default CartOrder;
