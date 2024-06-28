import Image  from "next/image"
import logo from "../../public/images/ArtDriveLogo.png"
import Link from "next/link"
import x from "../../public/images/x.svg"
import pinterest from "../../public/images/pinterest.svg"
import youtube from "../../public/images/youtube.svg"
import insta from "../../public/images/insta.svg"

const Footer = () => {
    return (
        <div className="flex justify-center w-full bg-[#000000] h-[263px]">
            <div className="flex flex-col items-center w-[100%] lg:w-[1000px] xl:w-[1450px]">
                <div className="flex items-center w-[70%] justify-between mt-3">
                    <Image src={logo} width={100} height={71} alt="artdrive logo" />
                    <div className="flex flex-col text-white font-dinround space-y-5">
                        <Link href={"/about"} className="hover:underline">About Us</Link>
                        <Link href={'#'} className="hover:underline">Support</Link>
                    </div>
                </div>
                <div className="flex space-x-8 mt-10 items-center">
                    <Link href={'https://x.com/ArtDrive_io'} target="_blank" rel="noopener noreferrer">
                        <Image src={x} width={30} height={30} alt="x/twitter logo" />
                    </Link>
                    <Link href={'#'} target="_blank" rel="noopener noreferrer">
                        <Image src={pinterest} width={32} height={32} alt="linkedin logo"/>
                    </Link>
                    <Link href={'https://www.youtube.com/@artdriveofficial'} target="_blank" rel="noopener noreferrer">
                        <Image src={youtube} width={34} height={24} alt="youtube logo"/>            
                    </Link>
                    <Link href={'https://www.instagram.com/artdrive_official?igsh=MXBieDRpZ25ia3hmMQ=='} target="_blank" rel="noopener noreferrer">
                        <Image src={insta} width={33} height={33} alt="instagram logo"/>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;