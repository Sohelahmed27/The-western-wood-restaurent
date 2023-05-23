import SectionTitle from "../../Shared/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
  return (
    <div  className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
      heading='from our menu'
      subHeading ="check it out"></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <img src={featuredImg} width="400px" height=""/>
        <div className="ms-10 p-20" >
        <h4>10 August, 2025</h4>
        <h3>WHERE CAN I GET SOME?</h3>
        <p>
          Introducing our sensational return menu! Indulge in a mouthwatering array of flavors, meticulously crafted to satisfy your cravings. From gourmet burgers to exquisite sushi rolls, every dish is a symphony of taste. Experience culinary excellence like never before, now back by popular demand. Bon appétit!
        </p>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;