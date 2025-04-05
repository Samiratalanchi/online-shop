import { IoIosSearch } from "react-icons/io"
import HeaderLayout from "../../components/headerLayout/headerLayout"
import { useState } from "react"
import Products from "../../components/productGrid/products"

const ProductGrid = () => {

    const cathegories = [
        {name: "Chair", items: ["chair1","chair2","chair3"]},
        {name: "Furniture", items: ["furniture1","furniture2","furniture3","furniture4","furniture5"]},
        {name: "Accesories", items: ["acc1","acc2"]},
        {name:"Table", items: ["table1","table2","table3","table4"]},
        {name: "Desk", items: ["desk1","desk2","desk3","desk4"]},
    ]

    const [activeCath,setActiveCath] = useState("Chair");
    const [activeSubCath, setActiveSubCath] = useState("");

    return (
        <HeaderLayout>
            <main className="relative justify-center ">
                <div className="flex md:flex-row flex-col mx-auto max-w-6xl items-start gap-x-5 gap-y-5">
                    <div className="flex flex-col md:w-1/4 w-5/6 mx-auto gap-y-5 my-15">
                        <div className="flex flex-row bg-white justify-between items-center px-3">
                            <input type="text" placeholder="Search here..." className="h-10 bg-white text-xs text-gray-600 focus:outline-none focus:ring-0 focus:border-none" />
                            <button className=" text-gray-600 cursor-pointer">
                                <IoIosSearch />
                            </button>
                        </div>
                        <div className="flex flex-col bg-white items-center">
                            <div className="border-b-2 border-gray-200 w-full">
                                <p className="p-3 text-gray-600">CATEGORIES</p>
                            </div>
                            <div className="w-full my-3">
                                <ul className="px-3 text-gray-600">
                                {cathegories.map((item) => (
                                    <li key={item.name} className="mb-2">
                                        <div
                                            className={`cursor-pointer hover:text-amber-300 ${
                                            activeCath === item.name ? "text-amber-400" : ""
                                            }`}
                                            onClick={() => {
                                                setActiveCath(item.name)
                                                setActiveSubCath("")
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                        {activeCath === item.name &&
                                            <ul className="ml-4 text-sm text-gray-600">
                                            {item.items.map((x, index) => (
                                            <li key={x + index}
                                                className="px-2 cursor-pointer text-gray-400 hover:text-amber-300"
                                                onClick={() => setActiveSubCath(x)}
                                            >
                                                {x}
                                            </li>
                                            ))}
                                        </ul>
                                        }
                                        
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>  
                    </div>
                    <div className="md:w-3/4 w-full -my-20 md:my-0">
                        <Products activeCath={activeCath} activeSubCath={activeSubCath} />
                    </div>
                </div>
            </main>
        </HeaderLayout>
    )
}

export default ProductGrid