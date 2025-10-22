import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Rooms from "@/pages/aboutpage/Rooms";
import Comforts from "@/pages/aboutpage/Comforts";

export default function Layout() {
    return (
        <>
        <Header />
            <Rooms />
            <Comforts />
        <Footer />
        </>
    )
}