const OrderInformation = () => {
  return <div>
    <div className="bg-white">
        <div className="px-5 py-4  border-b border-gray-300">
            <h2 className="font-bold text-lg">Order Information</h2>
        </div>
        <div className="p-5">
            <div className="input-group gap-17">
                <label htmlFor="full_name">Full Name</label>
                <input type="text" placeholder="Type your full name" id="full_name"/>
                <label htmlFor="wa_number">WhatsApp Number</label>
                <input type="text" placeholder="+62xxxx" id="wa_number"/>
                <label htmlFor="address">Shipping Address</label>
                <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="address" rows={7}></textarea>
            </div>
        </div>
    </div>
  </div>;
};

export default OrderInformation;
