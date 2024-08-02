import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";
import LogOut from "@/components/profile-components/LogOut";
import ProfileTabs from "@/components/profile-components/ProfileTabs";

const Main = () => {

  return (
    <div>
      <MainContainer>
        <Navbar />
        <ProfileTabs />
        <Footer />
      </MainContainer>
    </div>
  );
};

export default Main;
