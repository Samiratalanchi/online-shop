import brand1 from "../../../images/brand1.png"
import brand2 from "../../../images/brand2.png"
import brand3 from "../../../images/brand3.png"
import brand4 from "../../../images/brand4.png"
import brand5 from "../../../images/brand5.png"
import { useEffect, useState } from "react"

const BrandBox = () => {

    const [startPoint , setStartPoint] = useState(0)
    const [itemsPerRow, setItemsPerRow] = useState(2)

    const brands = [brand1,brand2,brand3,brand4,brand5]

    const getDisplayedBrands = (startIndex: number, count: number) => {
        const endIndex = startIndex + count;
        if (endIndex <= brands.length) {
            return brands.slice(startIndex, endIndex);
        } else {
            return [...brands.slice(startIndex, brands.length), ...brands.slice(0, endIndex % brands.length)];
        }
    };

    useEffect(() => {
        const updateItemsPerRow = () => {
            if (window.innerWidth < 768) {
                setItemsPerRow(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerRow(3);
            } else {
                setItemsPerRow(4);
            }
        };
        updateItemsPerRow();
        window.addEventListener("resize", updateItemsPerRow);
        return () => window.removeEventListener("resize", updateItemsPerRow);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartPoint((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 max-w-6xl py-3 bg-white w-4/5 z-60 mx-auto">
            <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center justify-center">
                {getDisplayedBrands(startPoint,itemsPerRow).map((brand, index) => (
                    <div key={index} className="col-span-1">
                        <img src={brand} alt={`brand-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrandBox;