// components/VersusCard.js
const VersusCard = ({ image1, image2, text1, text2 }) => {
  return (
    <div className=" bg-base-100 shadow-xl p-4 mb-4 text-center max-w-md mx-auto rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-col items-center mr-4">
          <img src={image1} alt="Team 1" className="w-24 h-auto rounded-xl mb-2" />
          <p className="text-lg font-bold">{text1}</p>
        </div>
        <span className="text-2xl font-bold mx-4">vs</span>
        <div className="flex flex-col items-center ml-4">
          <img src={image2} alt="Team 2" className="w-24 h-auto rounded-xl mb-2" />
          <p className="text-lg font-bold">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default VersusCard;
