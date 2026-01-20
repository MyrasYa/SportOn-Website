"use client";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import { FiCheckCircle } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { useRouter } from "next/dist/client/components/navigation";


const PaymentSteps = () => {
  const {push} = useRouter();

  const orderStatus = () => {
    push("/order-status/1312312");
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-sm pl-2 flex flex-col gap-4 font-medium text-justify mb-5">
        <li>
          Transfer the total amount of <b>Rp. 1.035.000</b>to your preferred bank
          account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
        </li>
        <li>
          After completing the transfer, <b>keep the payment receipt</b> or a
          screenshot of the transfer confirmation. This will be needed for the
          next step.
        </li>
        <li>
          Upload the payment receipt/screenshot using the <b>'Upload Receipt &
          Confirm'</b> button below to validate your transaction.
        </li>
      </ol>
      <FileUpload/>
      </div>
      <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between font-semibold">
                <div className="text-md">Total</div>
                <div className="text-primary text-sm">
                  {priceFormatter(450000)}
                </div>
              </div>
              <Button className="w-full mt-4 px-10" variant="dark" onClick={orderStatus}>
                <FiCheckCircle size={20} />
                Upload Receipt & Confirm
              </Button>
            </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
