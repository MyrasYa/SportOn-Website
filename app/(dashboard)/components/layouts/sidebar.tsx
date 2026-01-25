"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from "react-icons/fi"

const Sidebar = () => {
  const pathName = usePathname();

  const menuItems = [
    {
      name: "Products",
      icon: FiBox,
      link: "/admin/products" 
    },
    {
      name: "Categories",
      icon: FiLayers,
      link: "/admin/categories" 
    },
    {
      name: "Transactions",
      icon: FiShoppingCart,
      link: "/admin/transactions" 
    },
    {
      name: "Bank Information",
      icon: FiCreditCard,
      link: "/admin/bank-info" 
    },
    
  ]
  return (
    <aside className="flex min-h-screen flex-col border-r border-gray-100 fixed w-80 left-0 top-0 bg-white">
        <div className="border-b border-gray-200 py-8 px-14">
            <Image src="/images/Group 6.svg" width={215} height={36} alt="Admin Logoo"/>
        </div>
        <div className="flex justify-between">
          
        </div>
        <div className="flex flex-col gap-4 px-5 mt-12">
          {
            menuItems.map((item, index) => {
              const isActive = item.link === pathName
              return (
              <Link href={item.link} key={index} className={`flex items-center gap-3 py-3 px-4.5 rounded-lg font-medium duration-300 ${isActive ? 'bg-primary/15 text-primary' : 'hover:bg-gray-100'}`}>
                <item.icon size={24}/>
                <span>{item.name}</span>
              </Link>
            )
            })
          }
        </div>
        <Link href="3" className="flex gap-3 font-medium items-center  py-3 px-4.5 mx-5 mb-5 hover:bg-gray-100 duration-300 rounded-lg mt-auto"><FiLogOut size={24}/>
        <span>Log Out</span>
        </Link>
    </aside>
  )
}

export default Sidebar