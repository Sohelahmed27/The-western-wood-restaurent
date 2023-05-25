import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 glass">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute right-top-20 text-white font-bold bg-slate-800">
        ${price}
      </p>
      <div className="card-body  flex flex-cols items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-600">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
