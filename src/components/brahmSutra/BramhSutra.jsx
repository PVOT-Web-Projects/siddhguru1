import Slider from "react-slick";
import pic1 from "../../images/brahmSutraImage1.png";
import pic2 from "../../images/t1.png";
import pic3 from "../../images/t2.png";
import pic4 from "../../images/t3.png";
import pic5 from "../../images/t4.png";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bramhSutra.scss";
const BramhSutra = () => {
  const [imgIndex, setImgIndex] = useState(1);
  const images = [
    { pic: pic1 },
    { pic: pic2 },
    { pic: pic3 },
    { pic: pic4 },
    { pic: pic5 },
    { pic: pic1 },
    { pic: pic2 },
  ];
  const totalImages = images.length; // Set the total number of images
  const settings = {
    infinite: true,
    centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    focusOnSelect: true,
    beforeChange: (current, next) => setImgIndex(next + 1), // Increase the index by 1
  };
  return (
    <>
      <div className="brahmasutra_section_title">
        <p className="just_space">Brahm-Sutra</p>
      </div>
      <div className="brahmasutra_section">
        <div className="index_indicator">
          <p>{`${imgIndex}/${totalImages}`}</p> {/* Display current image index */}
        </div>
        <div className="orange_container"></div>
        <div className="brahmasutra_section_wrapper">
          <Slider {...settings}>
            {images.map((item, idx) => (
              <div
                key={idx}
                className={idx === imgIndex - 1 ? "slide activeSlide" : "slide"}
              >
                <div className="brahmasutra_section_images">
                  <img src={item.pic} alt={`Image ${idx}`}/>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default BramhSutra;