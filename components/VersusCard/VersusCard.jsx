// components/VersusCard.js
const VersusCard = ({
  image1,
  image2,
  text1,
  text2,
  team1,
  team2,
  prob1,
  prob2,
  prob3,
  sportName,
  date,
}) => {
  return (
    <div className="bg-base-100 shadow-xl p-4 mb-4 text-center max-w-md mx-auto rounded-xl">
      {/* Heading with Sport Name and Date */}
      <div className="flex items-center justify-between mb-2 w-full p-2 rounded">
        <h2 className="text-2xl font-bold">{sportName} </h2>
        <p className="text-gray-500">{date}</p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-col items-center mr-4">
          <img
            src={image1}
            alt="Team 1"
            className="w-32 h-auto rounded-xl mb-2"
          />
          <p className="text-lg font-bold">{text1}</p>
        </div>
        <span className="text-2xl font-bold mx-4">vs</span>
        <div className="flex flex-col items-center ml-4">
          <img
            src={image2}
            alt="Team 2"
            className="w-32 h-auto rounded-xl mb-2"
          />
          <p className="text-lg font-bold">{text2}</p>
        </div>
      </div>
      {/* Three buttons for teams and draw */}
      <div className="flex justify-between gap-3">
        <button className="result-button bg-transparent border-solid text-start border-2 border-gray-200 flex-grow items-center justify-center p-2 rounded-xl">
          {team1}
          <span className="text-purple-400"> {prob1}</span>
        </button>
        <button className="result-button bg-transparent border-solid text-start border-2 border-gray-200 flex-grow items-center justify-center p-2 rounded-xl">
          Draw
          <span className="text-purple-400"> {prob2}</span>
        </button>
        <button className="result-button bg-transparent border-solid text-start border-2 border-gray-200 flex-grow items-center justify-center p-2 rounded-xl">
          {team2}
          <span className="text-purple-400 text-end"> {prob3}</span>
        </button>
      </div>
    </div>
  );
};

export default VersusCard;
