import { useState } from "react"
import product1 from "../../../images/product1.jpg"
import product2 from "../../../images/product2.jpg"
import product3 from "../../../images/product3.jpg"
import product4 from "../../../images/product4.jpg"
import product5 from "../../../images/product5.jpg"
import product6 from "../../../images/product6.jpg"
import product7 from "../../../images/product7.jpg"
import product8 from "../../../images/product8.jpg"
import Button from "../../common/button"

const FeaturedProduct = ({title}:{title:string}) => {

    const [activeTab, setActiveTab] = useState("New Arrivals")

    const products = [
        {name: "Product Name", price: 56000 , badge: "New", pic: product1 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product2 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product3 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product4 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product5 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product6 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product7 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product8 },
    ]
    
    const tabs = ["New Arrivals", "Best Seller", "Most View", "Discounts"]

    return (
        <div className="my-15 mb-30 w-full">
        <div className="text-center font-bold text-2xl">{title}</div>
        <ul className="list-none text-xs flex flex-row gap-x-5 justify-center my-5 ">
            {tabs.map((tab) => (
                <li
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer p-1 pb-2 ${
                        activeTab === tab
                            ? "text-amber-400 border-b-2 border-amber-400"
                            : "text-gray-600"
                    }`}
                >
                    {tab}
                </li>
            ))}
        </ul>
        <div className="flex flex-col justify-center items-center my-10">
            <div className="flex flex-row items-center lg:gap-x-3 gap-x-0 w-full justify-center">
                <div className={`grid gap-5 md:w-full w-4/5 max-w-6xl items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                    {products.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-3 p-3 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-xl">
                            <div className="relative">
                                <img src={item.pic} className="w-full" />
                                <div className={`absolute text-[10px] rounded-md py-1 px-2 text-white ${item.badge === "New" ? "bg-amber-300" : "bg-red-400"} left-3 top-3`}>{item.badge}</div>
                                <div className="absolute text-sm right-3 top-3">${item.price}</div>
                            </div>
                            <h1 className="text-center font-medium">{item.name}</h1>
                            <Button title="Buy now" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}
export default FeaturedProduct;