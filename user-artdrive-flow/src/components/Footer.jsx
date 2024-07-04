import Image  from "next/image"
import logo from "../../public/images/ArtDriveWhiteLogo.png"
import Link from "next/link"
import x from "../../public/images/x.svg"
import discord from "../../public/images/discord.svg"
import insta from "../../public/images/insta.svg"

const Footer = () => {
    return (
        <div className="flex justify-center items-center w-full bg-[#000000] h-[143px]">
            <div className="flex justify-between w-full items-center lg:w-[1000px] xl:w-[1450px] px-[10%]">
                <Link href={'/'} className="flex items-center">
                    <Image className="sm:w-[100px]" src={logo} width={70} height={71} alt="artdrive logo" />
                </Link>
                <div className="flex space-x-8 items-center">
                    <Link href={'https://x.com/ArtDrive_io'} target="_blank" rel="noopener noreferrer">
                        <Image className="w-[25px] sm:w-[40px]" src={x} width={40} height={30} alt="x/twitter logo" />
                    </Link>
                    <Link href={'https://www.instagram.com/artdrive_official?igsh=MXBieDRpZ25ia3hmMQ=='} target="_blank" rel="noopener noreferrer">
                        <Image className="w-[25px] sm:w-[40px]" src={insta} width={43} height={33} alt="instagram logo"/>
                    </Link>
                    <Link href={'https://www.instagram.com/artdrive_official?igsh=MXBieDRpZ25ia3hmMQ=='} target="_blank" rel="noopener noreferrer">
                        <Image className="w-[25px] sm:w-[40px]" src={discord} width={43} height={33} alt="discord logo"/>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;