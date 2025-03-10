import Slider from "../../components/homePage/slider/slider"
import HeaderLayout from "../../components/headerLayout/headerLayout"
import Banner from "../../components/homePage/banner/banner"
import ProductGrid from "../../components/homePage/productGrid/productGrid"

const Home = () => {
    return (
        <HeaderLayout>
            <main>
                <Slider />
                <Banner />
                <ProductGrid rows={1} title="Featured Products" />
            </main>
        </HeaderLayout>
        
    )
}

export default Home