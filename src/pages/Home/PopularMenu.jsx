
import SectionTitle from "../Shared/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
  const [menu] =useMenu([]);
  const popular = menu.filter(item => item.category === 'popular');
  

  
  return (
    <section>
      <SectionTitle
      heading="from our menu"
      subHeading="Our Popular Items"
      ></SectionTitle>
     <div className="grid md:grid-cols-2  gap-4">
      {
        popular.map(item =><MenuItems 
        key ={item._id}
        item={item}
        ></MenuItems>)
      }
     </div>
     
    </section>
  );
};

export default PopularMenu;