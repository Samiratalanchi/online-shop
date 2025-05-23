import { TbInnerShadowBottomLeftFilled } from "react-icons/tb"
import Button from "../common/button"

const Footer = () => {

    const accountslist = ["My Account" , "My Wishlist" , "My Cart" , "Sign In" , "Check out"]
    const shippinglist = ["New Products" , "Top Sellers" , "Manufactirers" , "Suppliers" , "Specials"]

    return (
        <div className="w-full bg-gray-200 h-auto flex flex-col items-center">
            <div className="px-5 lg:px-0 max-w-6xl w-full py-20 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 sm:gap-y-5">
                <div className="w-full sm:col-span-2 md:col-span-2 lg:col-span-2">
                    <h1 className="mb-5">Contact US</h1>
                    <div className="flex flex-col gap-y-3 text-xs text-gray-500">
                        <div className="flex flex-row items-center gap-x-1">
                            <div className="w-1/5 font-semibold">Address :</div>
                            <div className="w-4/5 text-wrap">28 Green Tower, Street Name, New York City, USA</div>
                        </div>
                        <div className="flex flex-row items-center gap-x-1">
                            <div className="w-1/5 font-semibold">Phone :</div>
                            <div className="w-4/5">0912 - 0925433</div>
                        </div>
                        <div className="flex flex-row items-center gap-x-1">
                            <div className="w-1/5 font-semibold">Email :</div>
                            <div className="w-4/5">Samira73talanchi@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:col-span-1 md:col-span-1 lg:col-span-1">
                    <h1 className="mb-5">ACCOUNTS</h1>
                    <ul className="text-xs text-gray-500">
                        {accountslist.map((item) => (
                            <li key={item} className="py-1 flex items-center gap-1 cursor-pointer hover:text-amber-400">
                                <TbInnerShadowBottomLeftFilled/>
                                <a>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full sm:col-span-1 md:col-span-1 lg:col-span-1">
                    <h1 className="mb-5">SHIPPING</h1>
                    <ul className="text-xs text-gray-500">
                        {shippinglist.map((item) => (
                            <li key={item} className="py-1 flex items-center gap-1 cursor-pointer hover:text-amber-400">
                                <TbInnerShadowBottomLeftFilled/>
                                <a>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full flex flex-col sm:col-span-2 md:col-span-4 lg:col-span-2 max-w-sm">
                    <h1 className="mb-5">MOBILE NEWSLETTER</h1>
                    <input type="text" placeholder="Enter your number" className="w-full h-10 bg-white text-xs max-w-sm pl-4 mb-4"/>
                    <Button title="Subscribe" />

                </div>
            </div>
            <div className="bg-gray-100 w-full bottom-0 text-gray-600 text-xs h-10 flex flex-col items-center justify-center">
                <div className="max-w-6xl w-full">Designed By Samira Talanchi . 2025</div>
            </div>
        </div>
    ) 
}

export default Footer