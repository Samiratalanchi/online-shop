import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import product1 from "../../images/product1.jpg"
import product2 from "../../images/product2.jpg"
import product3 from "../../images/product3.jpg"
import product4 from "../../images/product4.jpg"
import { MdDelete } from "react-icons/md"

const BuyBoxModal = () => {


    const shoppingItems = [
        {name: "Product Name", price: 56000 , quantity: 1, pic: product1 },
        {name: "Product Name", price: 56000 , quantity: 2, pic: product2 },
        {name: "Product Name", price: 56000 , quantity: 1, pic: product3 },
        {name: "Product Name", price: 56000 , quantity: 3, pic: product4 },
    ]
    
    return (
        <div className="flex flex-col">
            <h2 className="text-xs mb-2 border-b border-gray-300 py-2">You have 02 items in your Shopping Bag.</h2>
            <div className="flex flex-col"> </div>
                {shoppingItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row gap-x-3 items-center w-full py-1"
                    >
                        <img src={item.pic} alt={item.name} className="w-10 h-10" />
                        <div className="text-xs flex flex-col">
                            <span className="font-bold cursor-pointer hover:text-amber-400">{item.name}</span>
                            <span className="text-gray-700">Price: {item.price}</span>
                            <span className="text-gray-700">Quantity: {item.quantity}</span>
                        </div>
                        <div className="text-xs flex flex-col ml-auto items-center">
                            <button className="cursor-pointer hover:text-green-700"><FaChevronUp /></button>
                            <button className="cursor-pointer hover:text-yellow-400"><FaChevronDown /></button>
                            <button className="hover:text-red-500 cursor-pointer"><MdDelete /></button>
                        </div>
                    </div>
                ))}
            <div/>
        </div>
    )
}

export default BuyBoxModal;