import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({items, title, img}) => {
  return (
    <div className="pt-8">
    { title && <Cover img={img} title={title}></Cover>}
       <div className="grid md:grid-cols-2  gap-4 mt-16">
      {
        items.map(item =><MenuItems 
        key ={item._id}
        item={item}
        ></MenuItems>)
      }
     </div>
    </div>
  );
};

export default MenuCategory;