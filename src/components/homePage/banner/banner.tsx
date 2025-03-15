import bannerS from "../../../images/banner-s.jpg"
import bannerB from "../../../images/banner-b.jpg"
import Button from "../../common/button";

const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center gap-x-6 gap-y-6 my-10">
            <div className="relative w-5/6 md:w-auto hover:shadow-xl cursor-pointer">
                <img src={bannerS} className="md:w-auto w-full object-cover" />
                <div className="rounded-md text-white bg-amber-300 text-xs px-2 py-1 absolute lg:left-5 left-8 top-5">New</div>
                <div className="text-sm absolute lg:right-5 right-8 top-5">50,000</div>
                <div className="absolute lg:left-5 left-8 bottom-5">
                    <a href=""><p className="text-sm font-bold hover:text-amber-300">ProductName</p></a>
                    <p className="text-xs">Category</p>
                </div>
                <div className="absolute lg:right-5 right-8 bottom-5">
                    <Button title="Buy now" />
                </div>
            
            </div>
            <div className="relative w-5/6 md:w-auto hover:shadow-xl cursor-pointer">
                <img src={bannerB} className="md:w-auto w-full object-cover" />
                <div className="absolute left-1/2 top-1/3 font-bold hover:text-amber-300 text-sm lg:text-xl">
                    <a href="">
                        <p className="font-bold">DESIGN BY</p>
                        <p className="font-bold">HURST</p>
                        <p className="font-bold">MODERN</p>
                        <p className="text-amber-300">2021</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
