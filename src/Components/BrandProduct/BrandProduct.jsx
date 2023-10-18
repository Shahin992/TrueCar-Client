/* eslint-disable react/jsx-key */
import { useLoaderData, useParams } from "react-router-dom";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const BrandProduct = () => {
  const data = useLoaderData();
  const { name } = useParams();
  // console.log(name);
  // console.log(data);
  const filteredData = data.filter((item) => item.brandName === name);
  // console.log(filteredData);

  return (
    
    <div className="my-8">

      <div className="my-8">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/pKLZDC6/joey-banks-YApi-Wyp0lqo-unsplash.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-5xl font-bold">
                    Unbeatable Savings: Get Your Discount Now!
                  </h1>

                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/bs0RQ9w/lance-asper-p-SOAtd-MVlk-unsplash.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-5xl font-bold">
                    Unlock the Road to Savings! Discover Quality Cars and
                    Incredible Deals on TrueCar
                  </h1>

                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/Gczn1CX/rick-gebhardt-Bb-FBVUGIO74-unsplash.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-5xl font-bold">
                    Shift Gears Towards Savings! Find the Perfect Ride. Your
                    Next Adventure Begins Here!
                  </h1>

                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/r6Kkj76/pexels-pixabay-164634.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-5xl font-bold">
                    Revolutionize Your Wheels! Explore Premium Car Listings.
                    Start Your Automotive Journey Today!"
                  </h1>

                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {
        filteredData.map((data) =>   { 
          console.log(data.productName);
          return <div>
             <h3>Name: {data.productName}</h3>
             <h3>Brand: {data.brandName}</h3>
          </div>
           
          
        })
      }

     

     
     


    </div>
    
  );
};

export default BrandProduct;
