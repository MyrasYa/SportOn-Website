import priceFormatter from "@/app/utils/price-formatter";
import { FiEye } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026",
    customer: "John Doe1",
    contact: "+123123123",
    total: 1500000,
    status: "pending",
  },
  {
    date: "23/02/2026",
    customer: "John Doe2",
    contact: "+123123123",
    total: 1400000,
    status: "rejected",
  },
  {
    date: "23/02/2026",
    customer: "John Doe3",
    contact: "+123123123",
    total: 1800000,
    status: "paid",
  },
];

type TTransactionTableProps = {
   onViewDetails: () => void;
}

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-300";
      case "paid":
        return "bg-green-100 text-green-700 border-green-300";
    }
  };

  return (
    <div className="bg-white roounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border border-gray-100">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last: border-b-0"
            >
              <td className="px-6 py-4 font-medium">{data.date}</td>
              <td className="px-6 py-4 font-medium">{data.customer}</td>
              <td className="px-6 py-4 font-medium">{data.contact}</td>
              <td className="px-6 py-4 font-medium">
                {priceFormatter(data.total)}
              </td>
              <td className="px-6 py-4 font-medium">
                <div className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}>{data.status}</div>
              </td>
              <td className="flex gap-3 px-6 py-7.5 items-center h-full  text-gray-500">
                <button className="flex items-center duration-200 hover:text-black hover:bg-gray-100 flex gap-2 cursor-pointer w-fit py-1 px-2 rounded-md" onClick={onViewDetails}>
                  <FiEye size={20} />
                  View Details
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
