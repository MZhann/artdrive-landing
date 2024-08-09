// // import { useRouter } from "next/router";
// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import loadingGif from "../../../public/loading.gif";
// // import loadingBird from "../../../public/loadingBird.gif";
// // import whiteLike from '../../../public/images/image-buttons/white-like.svg';
// // // import TournamentPage from "@/components/tournament-flow-components/TournamentPage";
// // // import TournamentPage from "@/components/tournament-flow-components/TournamentPage";
// // import "../../app/globals.css";
// // import MainContainer from "@/components/MainContainer";
// // import ProgressBar from "@/components/tournament-flow-components/round-components/ProgressBar";
// // import ArtCarousel from "@/components/tournament-flow-components/round-components/ArtCarousel";

// // const Tournament = () => {
// //     const router = useRouter();
// //     const { id } = router.query;
// //     const [tournamentData, setTournamentData] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [rankings, setRankings] = useState([]);

// //     useEffect(() => {
// //         const fetchRankings = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/13/top_10_participants/`
// //                 );
// //                 if (!response.ok) {
// //                     throw new Error("Failed to fetch rankings");
// //                 }
// //                 const data = await response.json();
// //                 setRankings(data);
// //                 console.log(data)
// //             } catch (error) {
// //                 setError(error.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchRankings();
// //     }, [id]);

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }

// //     const formatPrize = (prize) => {
// //         return Math.floor(prize);
// //     };

// //     return (
// //         <div>
// //             <MainContainer>
// //                 <div className="w-full flex h-[100vh] justify-center gradient-tournament-background bg-cover">
// //                     <div className="w-[500px] flex flex-col items-center font-montserrat">
// //                         <div className="w-full flex flex-col items-center gradient-tournament-background text-white pt-6 px-2 pb-20">
// //                             <h1 className="text-2xl mb-3">Ranking</h1>
// //                             <div className="h-[2px] w-[85%] mb-6 bg-gray-600"></div>
// //                             <div className="w-full max-w-2xl flex flex-col items-center px-8 ">
// //                                 {rankings.map((rank, index) => (
// //                                     <div
// //                                         key={rank.user_id}
// //                                         className="flex w-full items-center space-x-5 mb-4"
// //                                     >
// //                                         <div className="flex items-center justify-center text-sm text-gray-300">
// //                                             {index + 1}
// //                                         </div>
// //                                         <div className="relative">
// //                                             {index === 0 ? (
// //                                                 <Image
// //                                                     src={rank.image}
// //                                                     alt={`Rank ${index + 1}`}
// //                                                     width={200}
// //                                                     height={202}
// //                                                     className="w-[90px] rounded-full mb-4 mt-7 h-[90px] object-cover"
// //                                                 />
// //                                             ) : (
// //                                                 <Image
// //                                                     src={rank.image}
// //                                                     alt={`Rank ${index + 1}`}
// //                                                     width={200}
// //                                                     height={202}
// //                                                     className="w-[75px] h-[75px] object-cover rounded-full"
// //                                                 />
// //                                             )}

// //                                             {index === 0 && (
// //                                                 <div className="absolute top-[-10px] left-[50%] transform -translate-x-1/2 w-8 h-8">
// //                                                     <Image
// //                                                         src="/images/image-buttons/crown.png"
// //                                                         alt="Crown"
// //                                                         layout="fill"
// //                                                         objectFit="contain"
// //                                                     />
// //                                                 </div>
// //                                             )}
// //                                         </div>
// //                                         <div className="flex ml-4">
// //                                             <div className="ml-0">
// //                                                 <div className="text-sm">
// //                                                     {rank.username}
// //                                                 </div>
// //                                                 <Link href={rank.artist_page}>
// //                                                     <div className="text-xs underline text-gray-500">
// //                                                         artist page
// //                                                     </div>
// //                                                 </Link>
// //                                             </div>
// //                                             <div className="font-normal text-nowrap ml-6 flex items-center text-xl">
// //                                                 400 $
// //                                             </div>
// //                                             <div className="font-normal text-nowrap ml-4 text-xl flex items-center">
// //                                                 <Image src={whiteLike} alt="like" className="h-[20px] w-[20px]" height={20} width={20} />
// //                                                 <div className="ml-2 text-xm">400</div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 ))}
// //                             </div>

// //                             <Link href={`/tournaments`}>
// //                                 <div className="text-white mt-10 text-xl border-2 rounded-2xl px-4 py-2 border-indigo-800">
// //                                     Return to tournaments page
// //                                 </div>
// //                             </Link>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </MainContainer>
// //         </div>
// //     );
// // };

// // export default Tournament;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import likeIndicator from "../../../public/images/image-buttons/likeIndicator.svg";
// import chanceToWinTrophy from "../../../public/images/image-buttons/chanceToWinTrophy.svg";

// const LikesAndChanceIndicator = () => {
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [chanceToWin, setChanceToWin] = useState(100 / 4); // Initial chance to win

//     useEffect(() => {
//         // Recalculate chance to win based on current round
//         const newChanceToWin = (100 / (4 / Math.pow(2, 2)));
//         setChanceToWin(newChanceToWin);
//     }, []);

//     // Simulate the like animation
//     useEffect(() => {
//         if (0 > 0) {
//             setShowAnimation(true);
//             const timer = setTimeout(() => {
//                 setShowAnimation(false);
//             }, 1000); // Animation duration in milliseconds
//             return () => clearTimeout(timer);
//         }
//     }, []);

//     return (
//         <div className="relative w-[93%] h-[90px] mb-4 flex mt-10 justify-between items-center p-4 bg-cover bg-center rounded-xl border-2 px-8 border-gray-600" style={{ backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fblack-and-white-drawing.html&psig=AOvVaw03s0n-jLddDu5I_9BGX2C0&ust=1722966038204000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj81-ey3ocDFQAAAAAdAAAAABAE')` }}>
//             <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35 rounded-xl"></div>
//             <div className="text-white z-10 text-lg flex flex-col items-center mt-4 justify-center">
//                 <Image src={chanceToWinTrophy} alt="trophy" width={45} height={45} />
//                 <span className="font-bold ml-2">{chanceToWin.toFixed(0)}%</span>
//             </div>
//             <div className="relative flex z-10 flex-col items-center justify-center mt-2">
//                 <Image src={likeIndicator} alt="likes" width={55} height={55} />
//                 <span className="text-white font-bold text-lg mt-[-8px]">40</span>

//                 {showAnimation && (
//                     <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
//                         <Image src="/like-animation.png" alt="like animation" width={50} height={50} className="animate-bounce" />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LikesAndChanceIndicator;

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import finalRound from "../../../public/images/image-buttons/finalRound.png";

// const FinalRoundModal = ({ show, onClose }) => {
//     useEffect(() => {
//         if (show) {
//             const timer = setTimeout(onClose, 4000);
//             return () => clearTimeout(timer);
//         }
//     }, [show, onClose]);

//     if (!show) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
//             <motion.div
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.5, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-center text-white"
//             >
//                 <Image
//                     src={finalRound}
//                     alt="finalRound"
//                     width={700}
//                     height={400}
//                     className="w-[250px] h-auto"
//                 />
//             </motion.div>
//         </div>
//     );
// };

// export default FinalRoundModal;

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Lottie from "lottie-react";
// import finalRound from "../../../public/images/image-buttons/finalRound.png";
// import fireworksAnimation from "../../../public/fireworks.json";

// const FinalRoundModal = () => {
//     // useEffect(() => {
//     //     if (show) {
//     //         const timer = setTimeout(onClose, 4000);
//     //         return () => clearTimeout(timer);
//     //     }
//     // }, [show, onClose]);

//     // if (!show) return null;

//     return (
//         <div className="fixed w-full inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
//             <motion.div
//                 initial={{ scale: 0.5, opacity: 0, y: 200 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.5, opacity: 0, y: 200 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-center text-white relative w-full flex justify-center"
//             >
//                 <Image
//                     src={finalRound}
//                     alt="finalRound"
//                     width={700}
//                     height={400}
//                     className="w-[250px] h-auto"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center">
//                     <Lottie animationData={fireworksAnimation} className="w-[450px] h-[450px]" />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default FinalRoundModal;

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Lottie from "lottie-react";
// import whiteLike from "../../../public/images/image-buttons/white-like.svg";
// import imageCheck from "../../../public/images/bannerArt1.png";
// import fireworkAnimation from "../../../public/firework-throwed.json";
// import { fetchRanking } from "@/pages/api/tournaments";

// const RankingComponent = () => {
//     const [rankings, setRankings] = useState([
//         {
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },
//         {
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },
//         {
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },
//         {
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },
//         {
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },
//         {
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },{
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },{
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },{
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },{
//             user_id: 1,
//             artwork: {
//                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 likes_count: 63,
//             },
//             artist_page: "/profile/",
//             username: "CHECK ZHANBO",
//             prize: 1000,
//         },
//     ]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [isClient, setIsClient] = useState(false);
//     const [showFireworks, setShowFireworks] = useState(true); // State to control fireworks visibility

//     // useEffect(() => {
//     //     const fetchRankings = async () => {
//     //         try {
//     //             const data = await fetchRanking(tournamentId);
//     //             setRankings(data.results.participants);
//     //         } catch (error) {
//     //             setError(error.message);
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     };

//     //     fetchRankings();
//     // }, [tournamentId]);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowFireworks(true); // Hide fireworks after 3 seconds
//         }, 3000);

//         return () => clearTimeout(timer); // Clean up the timer on component unmount
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     const formatPrize = (prize) => {
//         return Math.floor(prize);
//     };

//     const fireworkOptions = {
//         loop: false,
//         autoplay: true,
//         animationData: fireworkAnimation,
//         rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice",
//         },
//     };

//     return (
//         <div className="w-full flex flex-col items-center gradient-tournament-background text-white pt-6 px-2 pb-20">
//             {showFireworks && (
//                 <div className="absolute inset-0 flex justify-center items-center">
//                     <Lottie
//                         animationData={fireworkAnimation}
//                         className="w-[450px] h-[450px]"
//                     />
//                 </div>
//             )}
//             <h1 className="text-2xl mb-3">Ranking</h1>
//             <div className="h-[2px] w-[85%] mb-6 bg-gray-600"></div>
//             <div className="w-full max-w-2xl flex flex-col items-center px-8">
//                 {rankings.map((rank, index) => (
//                     <div
//                         key={rank.user_id}
//                         className="flex w-full items-center space-x-5 mb-4"
//                     >
//                         <div className="flex items-center justify-center text-sm text-gray-300">
//                             {index + 1}
//                         </div>
//                         <div className="relative">
//                             {index === 0 ? (
//                                 <Image
//                                     src={imageCheck}
//                                     alt={`Rank ${index + 1}`}
//                                     width={200}
//                                     height={202}
//                                     className="w-[90px] rounded-full mb-4 mt-7 h-[90px] object-cover"
//                                 />
//                             ) : (
//                                 <Image
//                                     src={imageCheck}
//                                     alt={`Rank ${index + 1}`}
//                                     width={200}
//                                     height={202}
//                                     className="w-[75px] h-[75px] object-cover rounded-full"
//                                 />
//                             )}

//                             {index === 0 && (
//                                 <div className="absolute top-[-10px] left-[50%] transform -translate-x-1/2 w-8 h-8">
//                                     <Image
//                                         src="/images/image-buttons/crown.png"
//                                         alt="Crown"
//                                         layout="fill"
//                                         objectFit="contain"
//                                     />
//                                 </div>
//                             )}
//                         </div>
//                         <div className="flex ml-4">
//                             <div className="ml-0">
//                                 <div className="text-sm">{rank.username}</div>
//                                 {isClient && rank.artist_page && (
//                                     <Link
//                                         className="text-xs underline text-gray-500"
//                                         href={rank.artist_page}
//                                     >
//                                         artist page
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="font-normal text-nowrap ml-6 flex items-center text-xl">
//                                 {formatPrize(rank.prize)} $
//                             </div>
//                             <div className="font-normal text-nowrap ml-4 text-xl flex items-center">
//                                 <Image
//                                     src={whiteLike}
//                                     alt="like"
//                                     className="h-[20px] w-[20px]"
//                                     height={20}
//                                     width={20}
//                                 />
//                                 <div className="ml-2 text-xm">
//                                     {rank.artwork.likes_count}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {isClient && (
//                 <Link
//                     href={`/tournaments`}
//                     className="text-white mt-10 text-xl border-2 rounded-2xl px-4 py-2 border-indigo-800"
//                 >
//                     Return to tournaments page
//                 </Link>
//             )}
//         </div>
//     );
// };

// export default RankingComponent;
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { fetchRanking } from "@/pages/api/tournaments";
// import like from "../../../public/images/image-buttons/like.svg";
// import searchIcon from "../../../public/images/image-buttons/search.svg";
// import TournamentUserCard from "../../components/tournament-components/TournamentUserCard";
// import Lottie from "lottie-react";
// import fireworkAnimation from "../../../public/firework-throwed.json";
// import TournamentResultSingleCard from "../../components/tournament-components/TournamentResultSingleCard";

// const TestRankingComponent = () => {
//     const [rankings, setRankings] = useState([]);
//     const [userRank, setUserRank] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [page, setPage] = useState(1);
//     const [username, setUsername] = useState("");
//     const [noMoreData, setNoMoreData] = useState(false);
//     const [searchResults, setSearchResults] = useState([]);
//     const [showFireworks, setShowFireworks] = useState(true);

//     useEffect(() => {
//         const fetchRankings = async () => {
//             try {
//                 console.log(
//                     "Fetching rankings for tournament ID:",
//                     12,
//                     "page:",
//                     page,
//                     "username:",
//                     username
//                 );
//                 const data = await fetchRanking(12, page, username);
//                 console.log("Fetched rankings data:", data);

//                 if (page === 1 && username === "") {
//                     setRankings(data.results.participants);
//                 } else if (page === 1 && username !== "") {
//                     setSearchResults(data.results.participants);
//                 } else {
//                     setRankings((prev) => [
//                         ...prev,
//                         ...data.results.participants,
//                     ]);
//                 }

//                 setUserRank(data.results.user_rank);

//                 if (!data.next) {
//                     setNoMoreData(true);
//                 } else {
//                     setNoMoreData(false);
//                 }

//                 setLoading(false);
//             } catch (error) {
//                 console.error(
//                     "Error fetching rankings in TournamentResult component:",
//                     error.response ? error.response.data : error.message
//                 );
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchRankings();
//     }, [page, username]);

//     const loadMore = () => {
//         setPage((prev) => prev + 1);
//     };

//     const handleSearch = (e) => {
//         setUsername(e.target.value);
//     };

//     const handleSearchClick = () => {
//         setPage(1); // Reset to page 1 for new search
//     };

//     useEffect(() => {
//         if (showFireworks) {
//             const timer = setTimeout(() => {
//                 setShowFireworks(false);
//             }, 3750);
//             return () => clearTimeout(timer);
//         }
//     }, [showFireworks]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="w-full h-screen flex justify-center dark-purple-gradient">
//             <div className="w-[90%] rounded-3xl text-white mt-10 flex flex-col items-center relative">
//                 {showFireworks && (
//                     <div className="absolute inset-0 flex justify-center items-center">
//                         <Lottie
//                             animationData={fireworkAnimation}
//                             className="w-[450px] h-[450px]"
//                         />
//                     </div>
//                 )}
//                 <h1 className="my-3 text-xl font-bold">Tournament Ranking</h1>
//                 <div className="flex justify-center space-x-3 w-full">
//                     {rankings.length > 1 && (
//                         <div className="flex flex-col items-center mt-10">
//                             <div className="relative">
//                                 <div className="w-[90px] h-[90px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
//                                     <Image
//                                         src={rankings[1].artwork.image}
//                                         alt={`Rank 2`}
//                                         width={200}
//                                         height={200}
//                                         className="object-fit rounded-full "
//                                     />
//                                 </div>
//                                 <div className="absolute top-0 right-0 w-8 h-8 bg-gray-400 text-xs font-bold text-black flex items-center justify-center rounded-full">
//                                     2nd
//                                 </div>
//                             </div>
//                             <div className="text-xs text-gray-300 mt-2">
//                                 {rankings[1].username}
//                             </div>
//                             <div className="text-xs font-bold text-white">
//                                 {rankings[1].prize} $
//                             </div>
//                             <div className="flex items-center space-x-1">
//                                 <Image
//                                     src={like}
//                                     alt="like"
//                                     width={15}
//                                     height={15}
//                                     className="w-[15px] h-[15px]"
//                                 />
//                                 <div className="text-xs">
//                                     {rankings[1].artwork.likes_count}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {rankings.length > 0 && (
//                         <div className="flex flex-col items-center">
//                             <div className="relative">
//                                 <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
//                                     <Image
//                                         src={rankings[0].artwork.image}
//                                         alt={`Rank 1`}
//                                         width={200}
//                                         height={200}
//                                         className="object-fit rounded-full "
//                                     />
//                                 </div>
//                                 <div className="absolute top-0 right-0 w-8 h-8 text-xs font-bold  text-black flex items-center justify-center rounded-full bg-yellow-400">
//                                     1st
//                                 </div>
//                             </div>
//                             <div className="text-xs text-gray-300 mt-2">
//                                 {rankings[0].username}
//                             </div>
//                             <div className="text-xs font-bold text-white">
//                                 {rankings[0].prize} $
//                             </div>
//                             <div className="flex items-center space-x-1">
//                                 <Image
//                                     src={like}
//                                     alt="like"
//                                     width={15}
//                                     height={15}
//                                     className="w-[15px] h-[15px]"
//                                 />
//                                 <div className="text-xs">
//                                     {rankings[0].artwork.likes_count}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {rankings.length > 2 && (
//                         <div className="flex flex-col items-center mt-20">
//                             <div className="relative">
//                                 <div className="w-[80px] h-[80px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
//                                     <Image
//                                         src={rankings[2].artwork.image}
//                                         alt={`Rank 3`}
//                                         width={200}
//                                         height={200}
//                                         className="object-fit rounded-full "
//                                     />
//                                 </div>
//                                 <div className="absolute top-0 right-0 w-8 h-8  text-xs font-bold text-black flex items-center justify-center rounded-full bg-yellow-600">
//                                     3rd
//                                 </div>
//                             </div>
//                             <div className="text-xs text-gray-300 mt-2">
//                                 {rankings[2].username}
//                             </div>
//                             <div className="text-xs font-bold text-white">
//                                 {rankings[2].prize} $
//                             </div>
//                             <div className="flex items-center space-x-1">
//                                 <Image
//                                     src={like}
//                                     alt="like"
//                                     width={15}
//                                     height={15}
//                                     className="w-[15px] h-[15px]"
//                                 />
//                                 <div className="text-xs">
//                                     {rankings[2].artwork.likes_count}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="flex items-center w-[250px] h-[40px] mt-4 mb-4 rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300">
//                     <input
//                         className="flex-grow bg-transparent outline-none"
//                         placeholder="search"
//                         value={username}
//                         onChange={handleSearch}
//                     />
//                     <button onClick={handleSearchClick} className="ml-2">
//                         <Image
//                             src={searchIcon}
//                             alt="search"
//                             width={24}
//                             height={24}
//                         />
//                     </button>
//                 </div>

//                 <div className="w-[330px] flex flex-col items-center">
//                     {searchResults.length > 0 ? (
//                         searchResults.map((rank) => (
//                             <TournamentUserCard
//                                 key={rank.user_id}
//                                 rank={rank.rank}
//                                 user={rank}
//                             />
//                         ))
//                     ) : (
//                         <>
//                             {userRank && userRank.participant && (
//                                 <>
//                                     <TournamentUserCard
//                                         rank={userRank.rank}
//                                         user={userRank.participant}
//                                     />
//                                     <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
//                                 </>
//                             )}
//                             {rankings.slice(3).map((rank) => (
//                                 <TournamentResultSingleCard
//                                     key={rank.user_id}
//                                     rank={rank}
//                                 />
//                             ))}
//                         </>
//                     )}
//                 </div>
//                 {!noMoreData && (
//                     <button
//                         onClick={loadMore}
//                         className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200"
//                     >
//                         Show more
//                     </button>
//                 )}

//                 <Link
//                     href={`/tournaments`}
//                     className="text-white mt-10 text-xl border-2 rounded-2xl px-4 py-2 border-purple-800 hover:bg-purple-500"
//                 >
//                     Return to tournaments page
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default TestRankingComponent;
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchRanking } from "@/pages/api/tournaments";
import like from "../../../public/images/image-buttons/like.svg";
import TournamentUserCard from "../../components/tournament-components/TournamentUserCard";
import dynamic from "next/dynamic";
import TournamentResultSingleCard from "../../components/tournament-components/TournamentResultSingleCard";
import fireworkAnimation from "../../../public/firework-throwed.json"; // Ensure correct path

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const TestRankingComponent = () => {
    const [rankings, setRankings] = useState([]);
    const [userRank, setUserRank] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [noMoreData, setNoMoreData] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showFireworks, setShowFireworks] = useState(true);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const data = await fetchRanking(12, page, username);
                if (page === 1 && username === "") {
                    setRankings(data.results.participants);
                } else if (page === 1 && username !== "") {
                    setSearchResults(data.results.participants);
                } else {
                    setRankings((prev) => [
                        ...prev,
                        ...data.results.participants,
                    ]);
                }
                setUserRank(data.results.user_rank);
                if (!data.next) {
                    setNoMoreData(true);
                } else {
                    setNoMoreData(false);
                }
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRankings();
    }, [page, username]);

    const loadMore = () => {
        setPage((prev) => prev + 1);
    };

    const handleSearch = () => {
        setUsername(searchQuery);
        setPage(1);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === "") {
            setUsername("");
            setPage(1);
        }
    };

    useEffect(() => {
        if (showFireworks) {
            const timer = setTimeout(() => {
                setShowFireworks(false);
            }, 3750);
            return () => clearTimeout(timer);
        }
    }, [showFireworks]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full h-full flex justify-center dark-purple-gradient">
            <div className="w-[90%] rounded-3xl text-white mt-10 flex flex-col items-center relative">
                {showFireworks && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Lottie
                            animationData={fireworkAnimation}
                            className="w-[450px] h-[450px]"
                        />
                    </div>
                )}
                <h1 className="my-3 text-xl font-bold">Tournament Ranking</h1>
                <div className="flex justify-center space-x-3 w-full">
                    {rankings.length > 1 && (
                        <div className="flex flex-col items-center mt-10">
                            <div className="relative">
                                <div className="w-[90px] h-[90px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                    <Image
                                        src={rankings[1].artwork.image}
                                        alt={`Rank 2`}
                                        width={200}
                                        height={200}
                                        className="w-[200px] h-[200px] object-cover rounded-full "
                                    />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8 bg-gray-400 text-xs font-bold text-black flex items-center justify-center rounded-full">
                                    2nd
                                </div>
                            </div>
                            <div className="text-xs text-gray-300 mt-2">
                                {rankings[1].username}
                            </div>
                            <div className="text-xs font-bold text-white">
                                {rankings[1].prize} $
                            </div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src={like}
                                    alt="like"
                                    width={15}
                                    height={15}
                                    className="w-[15px] h-[15px]"
                                />
                                <div className="text-xs">
                                    {rankings[1].artwork.likes_count}
                                </div>
                            </div>
                        </div>
                    )}
                    {rankings.length > 0 && (
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                    <Image
                                        src={rankings[0].artwork.image}
                                        alt={`Rank 1`}
                                        width={200}
                                        height={200}
                                        className="w-[200px] h-[200px] object-cover rounded-full "
                                    />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8 text-xs font-bold  text-black flex items-center justify-center rounded-full bg-yellow-400">
                                    1st
                                </div>
                            </div>
                            <div className="text-xs text-gray-300 mt-2">
                                {rankings[0].username}
                            </div>
                            <div className="text-xs font-bold text-white">
                                {rankings[0].prize} $
                            </div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src={like}
                                    alt="like"
                                    width={15}
                                    height={15}
                                    className="w-[15px] h-[15px]"
                                />
                                <div className="text-xs">
                                    {rankings[0].artwork.likes_count}
                                </div>
                            </div>
                        </div>
                    )}
                    {rankings.length > 2 && (
                        <div className="flex flex-col items-center mt-20">
                            <div className="relative">
                                <div className="w-[80px] h-[80px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                    <Image
                                        src={rankings[2].artwork.image}
                                        alt={`Rank 3`}
                                        width={200}
                                        height={200}
                                        className="w-[200px] h-[200px] object-cover rounded-full "
                                    />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8  text-xs font-bold text-black flex items-center justify-center rounded-full bg-yellow-600">
                                    3rd
                                </div>
                            </div>
                            <div className="text-xs text-gray-300 mt-2">
                                {rankings[2].username}
                            </div>
                            <div className="text-xs font-bold text-white">
                                {rankings[2].prize} $
                            </div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src={like}
                                    alt="like"
                                    width={15}
                                    height={15}
                                    className="w-[15px] h-[15px]"
                                />
                                <div className="text-xs">
                                    {rankings[2].artwork.likes_count}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex mt-4 mb-4 w-[250px]">
                    <input
                        className="w-full h-[40px] rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300"
                        placeholder="search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handleSearch}
                        className="ml-2 bg-gray-700 text-white rounded-full p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.35-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="w-[330px] flex flex-col items-center">
                    {searchResults.length > 0 ? (
                        searchResults.map((rank) => (
                            <TournamentResultSingleCard
                                key={rank.user_id}
                                rank={rank}
                            />
                        ))
                    ) : (
                        <>
                            {userRank && userRank.participant && (
                                <>
                                    <TournamentUserCard
                                        rank={userRank.rank}
                                        user={userRank.participant}
                                    />
                                    <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
                                </>
                            )}
                            {rankings.slice(3).map((rank) => (
                                <TournamentResultSingleCard
                                    key={rank.user_id}
                                    rank={rank}
                                />
                            ))}
                        </>
                    )}
                </div>
                {!noMoreData && (
                    <button
                        onClick={loadMore}
                        className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200"
                    >
                        Show more
                    </button>
                )}

                <Link
                    href={`/tournaments`}
                    className="text-white mt-10 mb-10 text-xl border-2 rounded-2xl px-4 py-2 border-purple-800 hover:bg-purple-500"
                >
                    Return to tournaments page
                </Link>
            </div>
        </div>
    );
};

export default TestRankingComponent;
