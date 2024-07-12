import React from 'react'
import { LoginBacground } from '../../Data/JasonData'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import LoginInput from './LoginInput';
import image from "../assets/LoginBackgroundImage/bg-01.jpg"

const LoginFile = () => {
//Slider Custom setting
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    draggable:false,
  };
//Slider Custom setting
  return (
    <>
      <div>
        <div className="h-[100vh]  overflow-y-hidden">
          <Slider {...settings}>
            {LoginBacground?.map((item) => (
              <div key={item.id}>
                <picture>
                  <img
                    src={item.Image}
                    alt={item.Image}
                    className="w-full h-[100vh]"
                  />
                </picture>
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
          <LoginInput />
        </div>
      </div>
    </>
  );
}

export default LoginFile
