import Slider from "../../components/homePage/slider/slider"
import HeaderLayout from "../../components/headerLayout/headerLayout"
import Banner from "../../components/homePage/banner/banner"

const Home = () => {
    return (
        <HeaderLayout>
            <main>
                <Slider />
                <Banner />
            </main>
        </HeaderLayout>
        
    )
}

export default Home