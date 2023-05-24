import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import BannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu([]);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Western-Wood | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={BannerImg} title={"our menu"}></Cover>
      {/* offered section */}
      <SectionTitle
        heading={"Today's offer"}
        subHeading={"don't miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert section */}

      <MenuCategory
        items={desserts}
        title="Desserts"
        img={dessertImg}
      ></MenuCategory>

      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>

      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>

      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
