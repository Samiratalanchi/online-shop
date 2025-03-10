import product1 from "../../../images/product1.jpg"
import product2 from "../../../images/product2.jpg"
import product3 from "../../../images/product3.jpg"
import product4 from "../../../images/product4.jpg"
import product5 from "../../../images/product5.jpg"
import product6 from "../../../images/product6.jpg"
import product7 from "../../../images/product7.jpg"
import product8 from "../../../images/product8.jpg"
import product9 from "../../../images/product9.jpg"
import product10 from "../../../images/product10.jpg"
import product11 from "../../../images/product11.jpg"
import product12 from "../../../images/product12.jpg"
import { useState } from "react"

const ProductGrid = ({rows, title}:{rows:number, title:string}) => {

    const [startPoint , setStartPoint] = useState(0)

    const products = [
        {name: "Product Name", price: 56000 , badge: "New", pic: product1 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product2 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product3 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product4 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product5 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product6 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product7 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product8 },
        {name: "Product Name", price: 56000 , badge: "Sale", pic: product9 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product10 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product11 },
        {name: "Product Name", price: 56000 , badge: "New", pic: product12 }
    ]

    const handlePrev = () => {
        setStartPoint((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setStartPoint((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="my-15">
            <div className="text-center font-bold text-2xl">{title}</div>

            <div className="flex md:flex-row flex-col justify-center items-center gap-x-6 gap-y-6 my-10">
                {[...Array(rows)].map((_, row) => (
                    <div key={row} className="flex flex-row items-center gap-x-3">
                        <button onClick={handlePrev} className={`bg-white text-[10px] text-gray-700 hover:bg-orange-300 hover:text-white cursor-pointer px-2 py-1 text-center border border-gray-300 ${rows === 2 && "hidden"}`}>
                            <p>p</p>
                            <p>r</p>
                            <p>e</p>
                            <p>v</p>
                        </button>
                        <div className="flex flex-row gap-x-2 items-center">
                            {products.slice(startPoint,4).map((item) => (
                                <div className="flex flex-col gap-y-3 p-2 bg-white">
                                    <div className="relative">
                                        <img src={item.pic} />
                                        <div className={`absolute text-[10px] rounded-md py-1 px-2 text-white ${item.badge == "New" ? "bg-amber-300" : "bg-red-400"}  left-3 top-3`}>{item.badge}</div>
                                        <div className="absolute text-sm right-3 top-3">{item.price}</div>
                                    </div>
                                    <h1 className="text-center">{item.name}</h1>
                                    <button className="text-sm px-2 py-1 cursor-pointer bg-gray-100 border border-gray-300">Buy now</button>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNext} className={`bg-white text-[10px] text-gray-700 hover:bg-orange-300 hover:text-white cursor-pointer px-2 py-1 text-center border border-gray-300 ${rows === 2 && "hidden"}`}>
                            <p>n</p>
                            <p>e</p>
                            <p>x</p>
                            <p>t</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductGrid;
