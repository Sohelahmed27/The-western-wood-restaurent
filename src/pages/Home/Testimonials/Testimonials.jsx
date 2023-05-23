import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';



// import required modules
import { Navigation } from "swiper";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(()=>{
    fetch('reviews.json')
    .then(response => response.json())
    .then(data =>setTestimonials(data))
  },[])
  return (
    <div>
      <SectionTitle heading={'Testimonials'} subHeading={'Our Clint says'}></SectionTitle>
      <div>
       
          
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
          testimonials.map((testimonial) => <SwiperSlide 
          key={testimonial._id} 
          testimonial={testimonial}>
          <div className="my-20 mx-20 flex flex-col items-center">
          <Rating
      style={{ maxWidth: 180 }}
      value={testimonial.rat}
     
    />
            <FaQuoteLeft className="text-2xl my-5"></FaQuoteLeft>
            <p>{testimonial.details}</p>
            <h3 className="text-2xl text-orange-500 text-center font-bold mt-4">{testimonial.name}</h3>
          </div>

          </SwiperSlide>)
        }
      </Swiper>
  
       
      </div>
    </div>
  );
};

export default Testimonials;