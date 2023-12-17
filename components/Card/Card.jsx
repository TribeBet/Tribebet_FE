// components/MovieCard.js
const Card = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className=" w-full card-side bg-base-200 rounded-lg shadow-xl">
      <figure>
        <img src={imageUrl} style={{width:"300", height:"200", }} className="shadow-xl w-[300] rounded-xl p-1 h-auto" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default Card;
