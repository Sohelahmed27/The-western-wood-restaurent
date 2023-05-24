import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import BannerImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu";

const Menu = () => {
  return (
    <div>
    <Helmet>
        <title>Western-Wood | Menu</title>
      
      </Helmet>
      <Cover img={BannerImg} title={'our menu'}></Cover>
     <PopularMenu></PopularMenu>
      <Cover img={BannerImg} title={'our menu'}></Cover>
     <PopularMenu></PopularMenu>
      <Cover img={BannerImg} title={'our menu'}></Cover>
     <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;