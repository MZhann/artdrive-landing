import Image from "next/image";

const Card = ({ imageSrc, title, text }) => {
    return (
        <div
            className={`flex flex-col justify-center items-center h-[432px] px-6 w-[80%] text-[#2A2A2A] rounded-3xl sm:flex-row sm:h-[250px] sm:space-x-6 lg:w-full  ${
                text ===
                    "Get paid to create! The bigger the tournament, the bigger the prize fund!" ||
                text ===
                    "Become a Judge and help the world discover true art gems"
                    ? "sm:flex-row-reverse sm:mt-10 md:mt-28 "
                    : "sm:flex-row"
            } ${text ===
                "Get paid to create! The bigger the tournament, the bigger the prize fund!"
                    ? "mt-20" : ''
            }`}
        >
            <Image
                src={imageSrc}
                height={222}
                width={242}
                alt="Why ArtDrive"
                className={
                    text ===
                    "Get paid to create! The bigger the tournament, the bigger the prize fund!"
                        ? "w-[180px] ml-5 mt-[-50px] md:ml-0  md:w-[280px]"
                        : text ===
                          "Supercharge your social media growth and find your true fans!"
                        ? "w-[190px] md:w-[300px] sm:mt-[-80px] md:mt-0"
                        : text ===
                          "Become a Judge and help the world discover true art gems"
                        ? "w-[190px] md:w-[300px] sm:mt-[-70px] md:mt-0"
                        : "w-[202px] md:w-[300px]"
                }
            />

            <div className={`h-[150px] w-[280px] text-pretty mt-3 flex flex-col justify-between sm:mt-0 sm:h-[220px] sm:w-auto sm:space-y-5 sm:justify-start md:w-[700px] md:items-start  ${text=='Supercharge your social media growth and find your true fans!' || text=='Showcase your Best content and win by competing against creators from around the world.' ? 'md:mt-20 md:items-end' :''}`}>
                <h2 className="font-dinroundmedium text-3xl mb-2 text-center sm:text-left md:w-[440px] text-indigo-700">{title}</h2>
                
                <p className="text-lg sm:text-xl font-dinroundmedium text-justify md:w-[440px]">{text}</p>
            </div>
        </div>
    );
};

export default Card;
