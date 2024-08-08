// import Image from "next/image";
// import Link from "next/link";
// import testImage from "../../../public/images/bannerArt6.jpg";
// import whiteLike from "../../../public/images/image-buttons/white-like.svg";

// const TournamentUserCard = () => {
//     return (
//         <div className="flex justify-between items-center mb-4 border-2 rounded-2xl border-gray-300 p-2 w-[105%]">
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

// export default TournamentUserCard;

import Image from "next/image";
import Link from "next/link";
import whiteLike from "../../../public/images/image-buttons/white-like.svg";

const TournamentUserCard = ({ rank, user }) => {
    return (
        <div className="flex justify-between items-center mb-4 border-2 rounded-2xl border-gray-300 p-2 w-[105%]">
            <div className="flex items-center space-x-2">
                <div className="text-xs">{rank}</div>
                <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
                    <Image
                        src={user.artwork.image}
                        alt="user artwork"
                        width={70}
                        height={70}
                        className="object-fit rounded-full"
                    />
                </div>
                <div>
                    <div className="text-xs">{user.username}</div>
                    {user.artist_page && (
                        <Link
                            href={user.artist_page}
                            target="_blank"
                            className="text-xs underline text-gray-400"
                        >
                            link to artist page
                        </Link>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>{user.prize} $</div>
                <div className="flex items-center space-x-1">
                    <Image src={whiteLike} alt="like" width={15} height={15} />
                    <div>{user.artwork.likes_count}</div>
                </div>
            </div>
        </div>
    );
};

export default TournamentUserCard;
