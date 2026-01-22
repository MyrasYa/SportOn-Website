import { CustomerInfo } from "@/app/hooks/use-cart-store";
import CardWithHeader from "../ui/card-with-header";

type TOrderInformation = {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

const OrderInformation = ({formData, setFormData}: TOrderInformation) => {

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">WhatsApp Number</label>
          <input
            type="text"
            placeholder="+62xxxx"
            id="customerContact"
            name="customerContact"
            value={formData.customerContact ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
            id="customerAddress"
            name="customerAddress"
            rows={7}
            value={formData.customerAddress}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
