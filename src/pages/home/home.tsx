import Slider from "../../components/homePage/slider/slider"
import HeaderLayout from "../../components/headerLayout/headerLayout"
import Banner from "../../components/homePage/banner/banner"
import FeaturedProduct from "../../components/homePage/featuredProduct/featuredProduct"
import DiscountBanner from "../../components/homePage/discountBanner/discountBanner"
import ProductGrid from "../../components/homePage/productGrid/productGrid"

const Home = () => {
    return (
        <HeaderLayout>
            <main>
                <Slider />
                <Banner />
                <FeaturedProduct title="Featured Products" />
                <DiscountBanner />
                <ProductGrid title="Purchase Online" />
            </main>
        </HeaderLayout>
    )
}

export default Home