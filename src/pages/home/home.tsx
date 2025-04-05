import Slider from "../../components/homePage/slider/slider"
import HeaderLayout from "../../components/headerLayout/headerLayout"
import Banner from "../../components/homePage/banner/banner"
import FeaturedProduct from "../../components/homePage/featuredProduct/featuredProduct"
import DiscountBanner from "../../components/homePage/discountBanner/discountBanner"
import PurchaseOnline from "../../components/homePage/purchaseOnline/purchaseOnline"
import BrandBox from "../../components/homePage/brandBox/brandBox"

const Home = () => {
    return (
        <HeaderLayout>
            <main className="relative">
                <Slider />
                <Banner />
                <FeaturedProduct title="Featured Products" />
                <DiscountBanner />
                <PurchaseOnline title="Purchase Online" />
                <BrandBox />
            </main>
        </HeaderLayout>
    )
}

export default Home