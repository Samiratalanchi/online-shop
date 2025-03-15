import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import logo from "../../images/logo.png"
import Footer from "../footer/footer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import BuyBoxModal from "../modal/modal";

const HeaderLayout = ({ children } : {children : React.ReactNode} ) => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const MenuItems = [
        {title: "Home" , link:""},
        {title: "Products" , link:""},
        {title: "Blog" , link:""},
        {title: "About US" , link:""},
        {title: "Contact Us" , link:""},
    ]

    return (
        <>
            <div className="inset-x-0 top-0 flex z-50 w-full flex-row bg-white h-20 md:sticky">
                <div className="flex grow gap-y-0 overflow-x-auto px-8 justify-between items-center text-2xl">
                    {/* Menu Button */}
                    <button
                        className="cursor-pointer text-3xl hidden md:flex"
                        data-collapse-toggle="leftSideMenu"
                        aria-controls="leftSideMenu"
                        aria-expanded={isMenuOpen}
                        onClick={() => {
                            setMenuOpen(true);
                        }}
                    >
                        <IoMenu />
                    </button>
                    {/* Menu Section */}
                    <div className={`fixed hidden md:flex inset-y-0 left-0 top-0 z-1000 w-60 bg-white rounded-lg shadow-md transition-transform duration-300 ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`} id="leftSideMenu">
                        <div className="flex flex-col gap-y-8 grow overflow-y-auto max-h-screen">
                            <button
                                type="button"
                                onClick={() => {
                                    setMenuOpen(false);
                                }} 
                                className=" text-gray-400 p-5">
                                <IoMdClose className="hover:text-gray-700 cursor-pointer" />
                            </button>
                            <div className="text-sm">
                                <ul className="flex flex-col gap-y-2">
                                    {MenuItems.map((item,index) => (
                                        <li key={index} className="px-5 py-2 cursor-pointer group overflow-hidden relative">
                                            <a href={item.link}>
                                                {item.title}
                                                <span className="absolute px-5 left-[-100%] top-0 bottom-0 bg-amber-500 text-white py-1 transition-all duration-300 group-hover:left-0 w-full flex items-center">
                                                    {item.title}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Logo Section*/}
                    <div className="flex shrink-0 items-center">
                        <img src={logo} className="w-20 h-auto"/>
                    </div>

                    {/* BuyBox Section */}
                    <div className="relative"
                        onMouseEnter={() => setModalOpen(true)}
                        onMouseLeave={() => setModalOpen(false)}>
                        <button className={`cursor-pointer text-3xl`}>
                            <FaShoppingCart />
                        </button>
                        <div className="absolute -top-2 -right-2 text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            <span>02</span>
                        </div>
                                           
                    </div>
                    {isModalOpen && (
                            <div
                                className="absolute top-10 right-5 w-xs bg-white shadow-lg p-4 rounded-md z-2000"
                                onMouseEnter={() => setModalOpen(true)} 
                                onMouseLeave={() => setModalOpen(false)}
                            >
                                <BuyBoxModal/>
                            </div>
                        )} 
                </div>
            </div>
            <div className={`inset-x-0 top-0 flex w-full flex-col text-white bg-amber-400 relative md:hidden px-2 py-4 gap-y-2 items-center`}>
                <div className="flex flex-row justify-between w-full px-8 ">
                    <h1>MENU</h1>
                    <button
                        className="cursor-pointer text-3xl"
                        data-collapse-toggle="leftSideMenu"
                        aria-controls="leftSideMenu"
                        aria-expanded={isMenuOpen}
                        onClick={() => {
                            setMenuOpen(!isMenuOpen);
                        }}
                    >
                        {!isMenuOpen ? <IoMenu /> : <IoMdClose /> }
                        
                    </button>
                </div>
                <div className={`flex flex-col gap-y-0 bg-white w-full text-black ${!isMenuOpen && "hidden"}`}>
                    {MenuItems.map((item,index) => (
                        <div key={index} className="border border-gray-300 px-4 py-2 text-xs hover:text-amber-300 cursor-pointer">
                            <a href={item.link}>{item.title}</a>
                        </div>
                    ))}
                </div>
            </div>
            {children}
            <Footer />
        </>
        
    )
}

export default HeaderLayout