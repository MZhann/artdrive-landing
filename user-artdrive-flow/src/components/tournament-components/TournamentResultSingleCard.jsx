// import Image from "next/image";
// import Link from "next/link";
// import testImage from "../../../public/images/bannerArt6.jpg";
// import whiteLike from "../../../public/images/image-buttons/white-like.svg";

// const TournamentResultSingleCard = () => {
//     return (
//         <div className="flex justify-between items-center mb-4 w-full">
//             <div className="flex items-center space-x-2">
//                 <div className="text-xs">1</div>
//                 <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
//                     <Image
//                         src={testImage}
//                         alt="testImage"
//                         className="object-fit rounded-full]"
//                     />
//                 </div>
//                 <div>
//                     <div className="text-xs">Joe Blow 777</div>
//                     <Link
//                         href={"#"}
//                         target="_blank"
//                         className="text-xs underline text-gray-400"
//                     >
//                         link to artist page
//                     </Link>
//                 </div>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <div>100 $</div>
//                 <div className="flex items-center space-x-1">
//                     <Image src={whiteLike} alt="like" width={15} height={15} />
//                     <div>400</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TournamentResultSingleCard;

import Image from "next/image";
import Link from "next/link";
import whiteLike from "../../../public/images/image-buttons/white-like.svg";

const TournamentResultSingleCard = ({ rank }) => {
    return (
        <div className="flex justify-between items-center mb-4 w-full">
            <div className="flex items-center space-x-2">
                <div className="text-xs">{rank.rank}</div>
                <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
                    <Image
                        src={rank.artwork.image}
                        alt={rank.artwork.description}
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] object-cover object-center rounded-full"
                    />
                </div>
                <div>
                    <div className="text-xs">{rank.username}</div>
                    {rank.artist_page && (
                        <Link
                            href={rank.artist_page}
                            target="_blank"
                            className="text-xs underline text-gray-400"
                        >
                            link to artist page
                        </Link>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>{rank.prize} $</div>
                <div className="flex items-center space-x-1">
                    <Image src={whiteLike} alt="like" width={15} height={15} />
                    <div className="">{rank.artwork.likes_count}</div>
                </div>
            </div>
        </div>
    );
};

export default TournamentResultSingleCard;
