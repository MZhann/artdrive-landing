import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import MainContainer from "@/components/MainContainer";
import WhyArtDrive from "@/components/WhyArtDrive";
import EarthCard from "@/components/EarthCard";
import Steps from "@/components/Steps";
import TrueFans from "@/components/TrueFans";
import FAQ from "@/components/Faq";

const Mainru = () => {

  return (
    <div>
      <MainContainer>
        <Navbar />
        <Banner />
        <WhyArtDrive />
        <EarthCard />
        <Steps />
        <TrueFans />
        <FAQ />
        <Footer />
      </MainContainer>
    </div>
  );
};

export default Mainru;
