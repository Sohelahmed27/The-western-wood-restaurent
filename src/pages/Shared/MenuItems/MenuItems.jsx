

const MenuItems = ({item}) => {
  const {image, name, price, recipe} =item;

  return (
    <div className="flex my-10 p-4">
      <img src={image} alt=""  style={{width:'100px', borderRadius:'0 200px 200px 200px'}}/>
      <div className="ms-3">
        <h4 className="text-xl">{name}...............................................................</h4>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-500 font-bold">${price}</p>
    </div>
  );
};

export default MenuItems;