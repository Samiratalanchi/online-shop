import '@mdi/font/css/materialdesignicons.min.css';
import { useState } from "react";
import slider1 from "../../../images/slider1.jpg"
import slider2 from "../../../images/slider2.jpg"
import slider3 from "../../../images/slider3.jpg"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slider: string[] = [slider1,slider2,slider3];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1)); // Go to the previous slide
      };
    
      const handleNext = () => {
        setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1)); // Go to the next slide
      };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slider.map((item, index) => (
                    <div 
                        key={index}
                        className={`duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
                        data-carousel-item>
                        <img src={item} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                    </div>
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
                className=" w-0 h-0 border-30 border-l-white hover:border-l-orange-300 border-t-transparent border-b-transparent border-r-transparent absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-white text-3xl flex items-center justify-center">
                <GrFormPrevious  className=" absolute -left-6 text-sm text-black"/>
            </div>
            <div
                onClick={handleNext}
                className="w-0 h-0 border-30 border-r-white hover:border-r-orange-300 border-t-transparent border-b-transparent border-l-transparent absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-white text-3xl flex items-center justify-center">
                <GrFormNext  className=" absolute -right-6 text-sm text-black"/>
            </div>
        </div>
    )
}

export default Slider