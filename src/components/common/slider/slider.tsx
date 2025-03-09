import '@mdi/font/css/materialdesignicons.min.css';
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
        }, 5000); // Change slide every 5 sec

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slider.map((item, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img src={item} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
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

            {/* Previous Button */}
            <div
                onClick={handlePrev}
                className="w-0 h-0 border-l-[30px] border-l-white hover:border-l-orange-300 border-t-transparent border-b-transparent absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer flex items-center justify-center"
            >
                <GrFormPrevious className="absolute -left-6 text-sm text-black" />
            </div>

            {/* Next Button */}
            <div
                onClick={handleNext}
                className="w-0 h-0 border-r-[30px] border-r-white hover:border-r-orange-300 border-t-transparent border-b-transparent absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer flex items-center justify-center"
            >
                <GrFormNext className="absolute -right-6 text-sm text-black" />
            </div>

            {/* Animated Text Section */}
            <motion.div
                key={currentSlide} // Triggers re-render when slide changes
                className="absolute left-2/3 top-1/5 text-gray-700 -translate-x-1/2"
            >
                {/* Subtitle Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-lg uppercase"
                >
                    Welcome to Our
                </motion.h2>

                {/* Main Title Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-5xl font-bold"
                >
                    Elegant
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 170 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="text-5xl font-bold"
                >
                    Furniture
                </motion.h1>

                {/* Paragraph Animation */}
                <motion.p
                    initial={{ opacity: 0, y: 160 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    className="text-xs w-80 mx-auto text-justify mt-2"
                >
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words that don't look even slightly believable.
                </motion.p>

                {/* Button Animation */}
                <motion.button
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
                    className="border border-gray-700 bg-gray-100 px-3 py-1 mt-4 text-sm hover:bg-orange-300 hover:text-white hover:border-amber-400"
                >
                    SHOP NOW
                </motion.button>
            </motion.div>
        </div>
    );
}

export default Slider;
