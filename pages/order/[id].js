import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PaymentState from "../../store/PaymentState";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import StatusLogo from "../../components/StatusLogo";
import Image from "next/image"

function OrderCard() {
  const payment = useRecoilValue(PaymentState);
  const router = useRouter();
  const { id } = router.query;
  const temp = payment.find((item) =>
    parseInt(item.no_order) == parseInt(id) ? item : null
  );
  let i = 0, priceQ = 0
  if(temp) {
    temp?.cart?.map(item => {
      priceQ ? parseInt(item.price.split('. ').pop().replaceAll('.', '')) : 0
      i += ( (parseInt(item.price.split('. ').pop().replaceAll('.', '')) * item.count)  )
    })
    i = i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').split('.00')[0]
  }
  console.log(temp)
  return (
    <Layout title="Order Detail">
      <div className="min-h-screen justify-center flex w-3/4">
        <div className="w-full flex flex-col py-24 mx-14 lg:py-52">
          <div className="border-b w-full border-gray-300">
            <div className="text-3xl font-semibold mb-9">My Order</div>
            <div className="text-2xl pb-2">No. Order: {temp?.no_order}</div>
            <div className="text-gray-300 text-xl pb-7">
              (Order Successfully {temp?.created_at})
            </div>
          </div>
          <div className="py-9 border-b border-gray-300">
            <StatusLogo className="" status={temp?.status} />
            <div className="text-3xl pt-9 font-semibold text-main-color">
              Status :{" "}
              {temp?.status == 1
                ? "Waiting for Payment"
                : temp?.status == 2
                ? "Payment has been confirmed"
                : temp?.status == 3
                ? "Package is on the way"
                : temp?.status == 4
                ? "Packet has been Received"
                : "No status"}
            </div>
          </div>
          <div className="py-7">
            {
              temp?.cart?.map(item => {
                return (
                  <div className="flex justify-between my-7" key={item.id}>
                    <div className="flex justify-start">
                      <div className="relative w-24 h-24 rounded-lg">
                        <Image src={item.image} alt={item.name} className="rounded-lg" width={96} height={96} />
                      </div>
                      <div className="flex flex-col ml-6">
                        <div className="text-2xl">{item.name}</div>
                        <div className="text-2xl text-gray-400">Size {item.size}</div>
                        <div className="text-2xl text-gray-400">{item.price}</div>
                      </div>
                    </div>
                    <div className="">{item.count}</div>
                  </div>
                )
              })
            }
          </div>
          <div className="py-3 border-b border-gray-300">
            <div className="flex justify-between pb-5">
              <div className="text-2xl">Product normal price</div>
              <div className="text-2xl">Rp. {i}</div>
            </div>
            <div className="flex justify-between pb-5">
              <div className="text-2xl">Shipping Cost</div>
              <div className="text-2xl">Rp. {i}</div>
            </div>
            <div className="flex justify-between pb-5">
              <div className="text-2xl">Total Order price</div>
              <div className="text-2xl">Rp. {i}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrderCard;
