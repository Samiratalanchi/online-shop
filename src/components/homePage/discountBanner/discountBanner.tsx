import { useState, useEffect } from "react";
import dis1 from "../../../images/dis1.jpg";
import dis2 from "../../../images/dis2.jpg";
import offer from "../../../images/offer1.jpg";
import { motion } from "framer-motion";

const DiscountBanner = () => {
    const discounts = [
        {
            img: dis1,
            title: "Discount 50%",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cumque.",
            link: "#"
        },
        {
            img: dis2,
            title: "Discount 50%",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cumque.",
            link: "#"
        },
        {
            img: dis1,
            title: "Discount 50%",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cumque.",
            link: "#"
        },
        {
            img: dis2,
            title: "Discount 50%",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cumque.",
            link: "#"
        },
    ];

    const [currentDis, setCurrentDis] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDis((prev) => (prev + 1) % discounts.length);
        }, 4000); // Auto-slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-6 my-10 max-w-6xl mx-auto">
            <div className="relative w-5/6 md:w-2/3 h-auto bg-white py-6">
                {discounts.map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-full h-full top-0 left-0 bg-white flex flex-col md:flex-row items-center gap-6 p-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: currentDis === index ? 1 : 0, x: currentDis === index ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ display: currentDis === index ? "flex" : "none" }}
                    >
                        {/* Image on the Left */}
                        <a href={item.link}>
                            <img src={item.img} className="w-full object-cover" alt={`Dis ${index + 1}`} />
                        </a>
                        {/* Text on the Right */}
                        <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
                            <h4 className="text-lg font-bold mb-2 text-red-400">{item.title}</h4>
                            <p className="text-sm mb-2">{item.text}</p>
                            <a href={item.link} className="text-xs text-red-400">Get Discount</a>
                        </div>
                    </motion.div>
                ))}

                {/* Slide Indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-11/12 space-x-3 rtl:space-x-reverse">
                    {discounts.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${currentDis === index ? 'bg-orange-300 scale-110' : 'bg-gray-300'}`}
                            aria-current={currentDis === index ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentDis(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Offer Image Section */}
            <div className="relative w-5/6 md:w-1/3 p-3 md:py-5 lg:py-3 bg-white text-center">
                <img src={offer} alt="Offer" className="w-full object-cover" />
                <h4 className="text-xs font-bold">INDOOR FURNITURE</h4>
                <p>200000</p>
                <div className="flex flex-row gap-x-5 justify-center items-center text-xs">
                    <div className="rounded-full w-10 h-10 border border-red-400 content-center">0</div>
                    <div className="rounded-full w-10 h-10 border border-red-400 content-center">0</div>
                    <div className="rounded-full w-10 h-10 border border-red-400 content-center">0</div>
                </div>
                <div className="flex flex-row gap-x-8 justify-center text-xs">
                    <div className="">Days</div>
                    <div className="">Hour</div>
                    <div className="">Min</div>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
