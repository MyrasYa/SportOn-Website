"use client";

import Image from "next/image";
import { FiRefreshCw } from "react-icons/fi";
import Button from "../ui/button";

const OrderSubmitted = () => {
    const refreshOrderStatus = () => {
        console.log("Refreshing order status...");
        window.location.reload();
    };

    return (
        <div className="bg-white max-w-160 p-16 flex justify-center items-center flex-col mx-auto">
            <Image src="/images/icon-order-submitted.svg" alt="Order Submitted" width={117} height={117} className="mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Order Submitted !!</h2>
            <p className="text-center mb-8 text-gray-600 ">
                Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.
            </p>    
            <Button variant="dark" className="w-full" onClick={refreshOrderStatus}>
                <FiRefreshCw/> Refresh Order Status
            </Button>
        </div>
    )
}

export default OrderSubmitted;