import Image from "next/image";
import { useRouter } from "next/router";



const TournamentCard = ({id, name, startDate, prizeFund, participants, judges, audience, backgroundImage, ...props }) => {
    const router = useRouter();

    const openTournament = () => {
        router.push({
            pathname: `/tournaments/${id}`,
            query: { ...props, id, name, startDate, prizeFund, audience, backgroundImage }
        });
    }
    
    return (
        <button
            onClick={openTournament}
            className="w-[90%] h-[80px] rounded-3xl border-2 border-[#CAC9CB] flex items-center mb-5 relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="bg-black bg-opacity-70 w-full h-full rounded-3xl flex justify-between items-center p-4">
                <div className="text-white">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-sm">{new Date(startDate).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                    })}</p>
                </div>
                <div className="flex text-white text-right space-x-4">
                    <p className="text-sm text-start"><span className="text-gradient text-start text-lg font-extrabold">{prizeFund}$</span> <br></br> prize fund</p>
                    <p className="text-sm text-start"><span className="text-lg font-extrabold ">{audience}</span> <br></br> audience</p>
                </div>
            </div>
        </button>
    );
};

export default TournamentCard;
