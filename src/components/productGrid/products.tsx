import { useState } from "react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import Button from "../common/button"

import product1 from "../../images/product1.jpg"
import product2 from "../../images/product2.jpg"
import product3 from "../../images/product3.jpg"
import product4 from "../../images/product4.jpg"
import product5 from "../../images/product5.jpg"
import product6 from "../../images/product6.jpg"
import product7 from "../../images/product7.jpg"
import product8 from "../../images/product8.jpg"
import product9 from "../../images/product9.jpg"
import product10 from "../../images/product10.jpg"
import product11 from "../../images/product11.jpg"
import product12 from "../../images/product12.jpg"

const Products = ({activeCath,activeSubCath} : {activeCath: string, activeSubCath: string}) => {
    const products = [
        { name: "Product Name", price: 56000, badge: "New", pic: product1, category: "Chair", subcategory: "chair1" },
        { name: "Product Name", price: 56000, badge: "Sale", pic: product2, category: "Chair", subcategory: "chair2" },
        { name: "Product Name", price: 56000, badge: null, pic: product3, category: "Chair", subcategory: "chair3" },
        
        { name: "Product Name", price: 56000, badge: "New", pic: product4, category: "Furniture", subcategory: "furniture1" },
        { name: "Product Name", price: 56000, badge: "Sale", pic: product5, category: "Furniture", subcategory: "furniture2" },
        { name: "Product Name", price: 56000, badge: null, pic: product6, category: "Furniture", subcategory: "furniture3" },
        { name: "Product Name", price: 56000, badge: "New", pic: product7, category: "Furniture", subcategory: "furniture4" },
        { name: "Product Name", price: 56000, badge: null, pic: product8, category: "Furniture", subcategory: "furniture5" },
      
        { name: "Product Name", price: 56000, badge: "Sale", pic: product9, category: "Accesories", subcategory: "acc1" },
        { name: "Product Name", price: 56000, badge: "New", pic: product10, category: "Accesories", subcategory: "acc2" },
      
        { name: "Product Name", price: 56000, badge: null, pic: product11, category: "Table", subcategory: "table1" },
        { name: "Product Name", price: 56000, badge: "New", pic: product12, category: "Table", subcategory: "table2" },
        
        { name: "Product Name", price: 56000, badge: "Sale", pic: product1, category: "Table", subcategory: "table3" },
        { name: "Product Name", price: 56000, badge: null, pic: product2, category: "Table", subcategory: "table4" },
        
        { name: "Product Name", price: 56000, badge: "New", pic: product3, category: "Desk", subcategory: "desk1" },
        { name: "Product Name", price: 56000, badge: "Sale", pic: product4, category: "Desk", subcategory: "desk2" },
        { name: "Product Name", price: 56000, badge: null, pic: product5, category: "Desk", subcategory: "desk3" },
        { name: "Product Name", price: 56000, badge: "New", pic: product6, category: "Desk", subcategory: "desk4" },
      
        { name: "Product Name", price: 56000, badge: "Sale", pic: product7, category: "Chair", subcategory: "chair1" },
        { name: "Product Name", price: 56000, badge: null, pic: product8, category: "Chair", subcategory: "chair2" },
        { name: "Product Name", price: 56000, badge: "New", pic: product9, category: "Chair", subcategory: "chair3" },
      
        { name: "Product Name", price: 56000, badge: null, pic: product10, category: "Furniture", subcategory: "furniture1" },
        { name: "Product Name", price: 56000, badge: "New", pic: product11, category: "Furniture", subcategory: "furniture2" },
        { name: "Product Name", price: 56000, badge: "Sale", pic: product12, category: "Furniture", subcategory: "furniture3" },
      
        { name: "Product Name", price: 56000, badge: null, pic: product1, category: "Furniture", subcategory: "furniture4" },
        { name: "Product Name", price: 56000, badge: "New", pic: product2, category: "Furniture", subcategory: "furniture5" },
      
        { name: "Product Name", price: 56000, badge: "Sale", pic: product3, category: "Accesories", subcategory: "acc1" },
        { name: "Product Name", price: 56000, badge: null, pic: product4, category: "Accesories", subcategory: "acc2" },
      
        { name: "Product Name", price: 56000, badge: "New", pic: product5, category: "Table", subcategory: "table1" },
        { name: "Product Name", price: 56000, badge: null, pic: product6, category: "Table", subcategory: "table2" },
        { name: "Product Name", price: 56000, badge: "Sale", pic: product7, category: "Table", subcategory: "table3" },
        { name: "Product Name", price: 56000, badge: "New", pic: product8, category: "Table", subcategory: "table4" },
      
        { name: "Product Name", price: 56000, badge: null, pic: product9, category: "Desk", subcategory: "desk1" },
        { name: "Product Name", price: 56000, badge: "New", pic: product10, category: "Desk", subcategory: "desk2" },
        { name: "Product Name", price: 56000, badge: "Sale", pic: product11, category: "Desk", subcategory: "desk3" },
        { name: "Product Name", price: 56000, badge: null, pic: product12, category: "Desk", subcategory: "desk4" },
    ]

    const finalProducts = activeSubCath === ""
    ? products.filter(item => item.category === activeCath)
    : products.filter(item => item.subcategory === activeSubCath);

      

    const pageSize = 12
    const pageCount = Math.ceil(finalProducts.length / pageSize)
    const [pageNumber, setPageNumber] = useState(1)

    const displayedProducts = finalProducts.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

    const getPageRange = () => {
        if (pageNumber <= 2) return [1, 2, 3]
        else if (pageNumber >= pageCount - 1) return [pageCount - 2, pageCount - 1, pageCount]
        else return [pageNumber - 1, pageNumber, pageNumber + 1]
    }

    const visiblePages = getPageRange().filter(n => n >= 1 && n <= pageCount)

    return (
        <div className="my-15 mb-30 w-full">
            <div className="flex flex-col justify-center items-center my-10">
                <div className="grid gap-5 md:w-full w-4/5 max-w-6xl items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {displayedProducts.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-3 p-3 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-xl">
                            <div className="relative">
                                <img src={item.pic} className="w-full" />
                                {item.badge &&
                                    <div className={`absolute text-[10px] rounded-md py-1 px-2 text-white ${item.badge === "New" ? "bg-amber-300" : "bg-red-400"} left-3 top-3`}>{item.badge}</div>
                                }
                                <div className="absolute text-sm right-3 top-3">${item.price}</div>
                            </div>
                            <h1 className="text-center font-medium">{item.name}</h1>
                            <Button title="Buy now" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex mx-auto flex-row justify-center mb-10 gap-2 items-center">
                <button
                    onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                    disabled={pageNumber === 1}
                    className="px-2 h-8 text-sm rounded flex items-center justify-center text-gray-600 hover:border hover:border-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
                >
                    <GrFormPrevious />
                </button>

                {visiblePages.map(n => (
                    <button
                        key={n}
                        onClick={() => setPageNumber(n)}
                        disabled={n > pageCount}
                        className={`px-3 h-8 text-sm rounded flex items-center justify-center
                            ${pageNumber === n
                            ? "text-amber-300"
                            : "text-gray-600 hover:border hover:border-gray-200"}
                            disabled:text-gray-200 disabled:cursor-not-allowed`}
                    >
                        {n}
                    </button>
                ))}

                <button
                    onClick={() => setPageNumber(prev => Math.min(pageCount, prev + 1))}
                    disabled={pageNumber === pageCount}
                    className="px-2 h-8 text-sm rounded flex items-center justify-center text-gray-600 hover:border hover:border-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    )
}

export default Products
