import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
  const [menu, setMenu] = useState([])
 
  useEffect(()=> {
    fetch('menu.json')
    .then(response=>response.json())
    .then(data =>{
      console.log(data);
        const popularItems = data.filter(item => item.category === 'popular')
        console.log(popularItems);
        setMenu(popularItems)

    })
  },[])

  
  return (
    <section>
      <SectionTitle
      heading="from our menu"
      subHeading="Our Popular Items"
      ></SectionTitle>
     <div className="grid md:grid-cols-2  gap-4">
      {
        menu.map(item =><MenuItems 
        key ={item._id}
        item={item}
        ></MenuItems>)
      }
     </div>
     
    </section>
  );
};

export default PopularMenu;