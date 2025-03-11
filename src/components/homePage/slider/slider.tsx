import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import slider1 from "../../../images/slider1.jpg";
import slider2 from "../../../images/slider2.jpg";
import slider3 from "../../../images/slider3.jpg";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider: string[] = [slider1, slider2, slider3];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1)); // Go to previous slide
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1)); // Go to next slide
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative w-full aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] overflow-hidden rounded-lg">
                {slider.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute w-full h-full top-0 left-0 ${currentSlide === index ? 'block' : 'hidden'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentSlide === index ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <img src={item} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                    </motion.div>
                ))}
            </div>

            
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-11/12 space-x-3 rtl:space-x-reverse">
                {slider.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`cursor-pointer w-2 h-2 rounded-full ${currentSlide === index ? 'bg-orange-300' : 'bg-white'}`}
                        aria-current={currentSlide === index ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

            
            <div
                onClick={handlePrev}
                className="w-0 h-0 border-30 border-l-white hover:border-l-orange-300 hover:text-white border-t-transparent border-b-transparent border-r-transparent absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer flex items-center justify-center"
            >
                <GrFormPrevious className="absolute -left-6 text-sm" />
            </div>

            
            <div
                onClick={handleNext}
                className="w-0 h-0 border-30 border-r-white hover:border-r-orange-300 hover:text-white border-t-transparent border-b-transparent border-l-transparent absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer flex items-center justify-center"
            >
                <GrFormNext className="absolute -right-6 text-sm" />
            </div>

            
            <motion.div
                key={currentSlide} 
                className="absolute md:left-2/3 md:top-1/5 left-3/5 top-1/3 text-gray-700 -translate-x-1/2"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-lg uppercase hidden md:block"
                >
                    Welcome to Our
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-5xl font-bold hidden md:block"
                >
                    ELEGNAT
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 170 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="md:text-5xl font-bold text-xl"
                >
                    FURNITURE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 160 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    className="text-xs md:w-80 mx-auto text-justify mt-2 hidden md:block"
                >
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words that don't look even slightly believable.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
                    className="border border-gray-300 bg-gray-100 px-3 py-1 mt-4 md:text-sm text-xs group overflow-hidden cursor-pointer relative"
                >
                    SHOP NOW
                        <span className="absolute left-[-100%] top-0 bottom-0 bg-amber-500 text-white px-2 py-1 transition-all duration-300  group-hover:left-0 w-full flex justify-center items-center">
                            SHOP NOW
                        </span>
                </motion.button>
            </motion.div>
        </div>
    );
}

export default Slider;
