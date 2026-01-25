"use client"

import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import { useState } from "react";

const ProductManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false)
  }


  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="font-bold text-3xl">Product Management</h1>
          <p className="text-lg opacity-50">
            Manage your inventory, prices and stock.
          </p>
        </div>
        <Button className="rounded-lg" size="small" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
        <ProductTable />
        <ProductModal isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  );
};

export default ProductManagement;
