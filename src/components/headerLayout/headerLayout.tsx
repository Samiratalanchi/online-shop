import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import logo from "../../images/logo.png"

const HeaderLayout = ({ children } : {children : React.ReactNode} ) => {
    return (
        <>
            <div className="inset-x-0 flex w-full flex-row bg-white h-20 relative">
                <div className="flex grow gap-y-0 overflow-x-auto px-8 justify-between items-center text-2xl">
                    <button className="cursor-pointer text-3xl">
                        <IoMenu />
                    </button>
                    <div className="flex shrink-0 items-center">
                        <img src={logo} className="w-20 h-auto"/>
                    </div>
                    <div className="relative">
                        <button className="cursor-pointer text-3xl">
                            <FaShoppingCart />
                        </button>
                        <div className="absolute -top-2 -right-2 text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            <span>02</span>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </>
        
    )
}

export default HeaderLayout