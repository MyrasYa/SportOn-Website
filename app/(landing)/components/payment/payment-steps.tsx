"use client";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import { FiCheckCircle } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { useRouter } from "next/dist/client/components/navigation";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";

const PaymentSteps = () => {
  const { push } = useRouter();
  const { items, customerInfo, reset } = useCartStore();
  const [file, setFile] = useState<File | null>();

  // const orderStatus = () => {
  //   push("/order-status/1312312");
  // };

  const totalprice = items.reduce(
    (all, item) => all + item.price * item.qty,
    0,
  );

  const handleConfirmPayment = async () => {
    if (!file) {
      alert("Please upload your payment receipt");
      return;
    }

    if (!customerInfo) {
      alert("Customer information is missing, please return to check out");
      push("/checkout");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact!.toString(),
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append(
        "purchasedItem",
        JSON.stringify(
          items.map((item) => ({ productId: item._id, qty: item.qty })),
        ),
      );
      formData.append("totalPayment", totalprice!.toString());

      const res = await transactionCheckout(formData);
      alert("transaction created success")
      reset();
      push(`/order-status/${res._id}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-sm pl-2 flex flex-col gap-4 font-medium text-justify mb-5">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b>to your preferred
            bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>'Upload Receipt & Confirm'</b> button below to validate your
            transaction.
          </li>
        </ol>
        <FileUpload onFileSelect={setFile} />
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-md">Total</div>
          <div className="text-primary text-sm">
            {priceFormatter(totalprice)}
          </div>
        </div>
        <Button
          className="w-full mt-4 px-10"
          variant="dark"
          onClick={handleConfirmPayment}
        >
          <FiCheckCircle size={20} />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
