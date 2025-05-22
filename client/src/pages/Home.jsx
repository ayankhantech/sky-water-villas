
import { useState } from 'react';
import { addtoCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import poster from "../imgs/poster.jpeg"
import poster2 from "../imgs/poster2.jpeg"
import poster3 from "../imgs/poster3.jpeg"
import Card from './Card';
import photo1 from "../imgs/photo1.jpg"
import photo2 from "../imgs/photo2.jpg"
import photo3 from "../imgs/photo3.jpg"
import photo4 from "../imgs/photo4.jpg"
import photo5 from "../imgs/photo5.jpg"
import photo6 from "../imgs/photo6.jpg"
import photo7 from "../imgs/photo7.jpg"
import photo8 from "../imgs/photo8.jpg"
import photoData from './photoData';
import icon1 from "../imgs/icon1.png"
import icon2 from "../imgs/icon2.png"
import icon3 from "../imgs/icon3.png"
import icon5 from "../imgs/icon5.png"
import icon6 from "../imgs/icon6.png"
import icon7 from "../imgs/icon7.png"
import hover1 from "../imgs/hover1.jpg"
import hover2 from "../imgs/hover2.jpg"
import hover3 from "../imgs/hover3.jpg"
import hover4 from "../imgs/hover4.jpg"
import flex1 from "../imgs/flex1.jpg"
import flex2 from "../imgs/flex2.jpg"
import flex3 from "../imgs/flex3.jpg"
import flex4 from "../imgs/flex4.jpg"
import flex6 from "../imgs/flex6.jpg"
import about from "../imgs/about.jpg"



export const Home = () => {
  const dispatch = useDispatch()
  const imagess = [
    {
      image: poster,
      text1: 'WELCOME TO',
      text2: "SKY WATER VILLAS",
      text3: "Best Luxury villas",
      text4: "view more"

    },
    {
      image: poster2,
      text1: 'ENJOY A LUXURY',
      text2: "EXPERIENCE AT",
      text3: "Igatpuri Villas",
      text4: "know more"
    },
    {
      image: poster3,
      text1: 'LUXURY VILLAS IN IGATPURI',
      text2: "With Private Swimming Pool",
      text3: "Igatpuri Villas",
      text4: "Book Now"
    },
  ]

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? imagess.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === imagess.length - 1 ? 0 : prevIndex + 1
    );
  };

//   const images = [
//     photo2,
//     photo3,
//     photo4,
//     photo6,
//     photo7,
//     photo8
    
// ];

  const photo = (val) => {
    
    return (
      <>
        <div className="box1">
      
         
          <Card images={val.img} />

          <div className="details">
            <div className="column1">
              <div><img src={icon1} alt="" /></div>
              <div>{val.val1} Person</div>
              <div><img src={icon5} alt="" /></div>
              <div> Aircondition</div>
            </div>
            <div className="column1">
              <div><img src={icon2} alt="" /></div>
              <div>{val.val2} Bedroom</div>
              <div><img src={icon6} alt="" /></div>
              <div>Parking</div>
            </div>
            <div className="column1">
              <div><img src={icon3} alt="" /></div>
              <div>{val.val3} Bathroom</div>
              <div><img src={icon7} alt="" /></div>
              <div>Washer</div>
            </div>
          </div>
          <p className="moscow">{val.name}</p>
          <p className="igat">Igatpuri</p>
          <h3 className='igat' > Rs {val.price}</h3>
          <button className="get" onClick={() => dispatch(addtoCart({ id: val.id, img: val.img2, name: val.name, price: val.price, piece: val.piece }))} ><NavLink to="/cart" className="navlink">Book Now</NavLink></button>
        </div>

      </>
    )
  }

  



  return (
    <>
      <div className="image-slider">
        <button className='custom-arrow prev' onClick={prevImage}> <span><i className="fa-solid fa-less-than fa-lg"></i></span></button>

        <div className='slide'>
          <img
            src={imagess[currentImage].image}
            alt="Slide"
            className='slideImg'
          />
          <div className='caption'>
            <h1 >{imagess[currentImage].text1}</h1>
            <h1 style={{ color: "rgb(254, 179, 68)" }}>{imagess[currentImage].text2}</h1>
            <p>{imagess[currentImage].text3}</p>
            <button>{imagess[currentImage].text4}</button>
          </div>
        </div>

        <button className='custom-arrow next' onClick={nextImage}><span><i className="fa-solid fa-greater-than fa-lg"></i></span></button>


      </div>
      

      <div className="content2">
        <div className="title">
          <h1><span>OUR </span>VILLAS</h1>
          <p>Best luxury villas in igatpuri with private swimming pool</p>
        </div>
        <div className="cards">
          
        
          <div className="items">
          

          { 
  photoData ? photoData.map(photo) : ""
}

          </div>
        </div>
      </div>

            

      <div className="hoverDiv">
        <div className="title">
          <h1><span>VILLAS</span> FACILITIES</h1>
          <p>With the best luxury experiences</p>
        </div>


        <div className="hoverDiv">
          <div className="hoverImgDiv">
            <div className="hoverImg"><img src={hover1} alt="" /></div>
            <div className="hoverImg"><img src={hover2} alt="" /></div>
            <div className="hoverImg"><img src={hover3} alt="" /></div>
            <div className="hoverImg"><img src={hover4} alt="" /></div>
          </div>
          <div className="hoverDetails" >
            <div className="detailsDiv" >
              <div className="details1">
                <p>Swimming Pool</p>
              </div>
              <div className="details2" >
                <div className="subdetails1" >
                  <div >Swimming Pool</div>
                  <div >Igatpuri Villas with Swimming Pool</div>
                </div>

              </div>

            </div>
            <div className="detailsDiv" >
              <div className="details3">
                <p>Jaccuzi</p>
              </div>
              <div className="details4" >
                <div className="subdetails2" >
                  <div >Jaccuzi</div>
                  <div >Jacuzzi Tub With Shooters</div>
                </div>
              </div>

            </div>
            <div className="detailsDiv" >
              <div className="details5">
                <p>Party Pad Pool Side</p>
              </div>
              <div className="details6" >
                <div className="subdetails3" >
                  <div >Party Pad Pool Side</div>
                  <div >Private Party Pad Pool Side in Igatpuri Villas
                  </div>
                </div>
              </div>

            </div>
            <div className="detailsDiv" >
              <div className="details7">
                <p>Gazebo Sitting Area</p>
              </div>
              <div className="details8">
                <div className="subdetails4" >
                  <div >Gazebo Sitting Area</div>
                  <div >Gazebo Sitting Area in igatpuri villas</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="content3" >
        <div className="title">
          <h1><span>IGATPURI</span> VILLAS</h1>
        </div>

      </div>
      <div className="content4">
        <div className="hover">
          <div className="part3">
            <div className="col" id="col1" >
              <div>VILLAS FOR PICNIC IN IGATPURI</div>
            </div>
            <div className="col" id="col2">
              <div>VILLAS WITH PRIVATE POOL IN IGATPURI</div>
            </div>
          </div>

          <div className="part1">
            <div className="col">
              <img src={flex6} alt="" />
            </div>
            <div className="col">
              <img src={flex1} alt="" />
            </div>
          </div>
        </div>


        <div className="hover2">
          <div className="part4">
            <div className="col" id="col3">
              <div>LUXURY VILLAS IN IGATPURI</div>
            </div>
            <div className="col" id="col4">
              <div>VILLAS ON RENT IGATPURI</div>
            </div>
            <div className="col" id="col5">
              <div>HOLIDAY HOMES IN IGATPURI</div>
            </div>
          </div>

          <div className="part2">
            <div className="col">
              <img src={flex2} alt="" />
            </div>
            <div className="col">
              <img src={flex3} alt="" />
            </div>
            <div className="col">
              <img src={flex4} alt="" />
            </div>

          </div>
        </div>

      </div>






      <div className="content5">
        <div className="aboutImg">
          <h1><span >ABOUT </span>US</h1>
        </div>
        <div className="content6">
          <div><img src={about} alt="" /></div>
          <div className="div2">
            <h1>About Sky Water Villas</h1>
            <p>Skywater Villas at Igatpuri gives you a valley touch villas for a perfect
              weekend getaways for family picnic at very affordable rates.<br />

              We provide top private villa at igatpuri with private swimming pool. At
              igatpuri villas you enjoy fun-filled parties with your friends and family.<br />

              Our villas present to you the option to enjoy several luxurious amenities.<br />

              Choose range of Holiday Homes For Weekend in Igatpuri, Discover the
              best homestay with 2BHK, 3BHK, 4BHK and 5BHK Villas.
            </p>
          </div>
        </div>

      </div>
      <div className="footer">
        <div className="footer1">
          <div className="left">
            <div className="left1">Our Villas</div>
            <div className="about">About Us</div>
          </div>
          <div className="right">
            <div className="right1">Booking</div>
            <div className="term">Terms & Condition</div>
          </div>
        </div>
        <div className="footer2">
          <span><a href="https://www.facebook.com/skywatervillasigatpuri/"><i className="fa-brands fa-facebook-f"></i></a></span>
          <span><a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fskywatervillas"><i className="fa-brands fa-twitter"></i></a></span>
          <span><a href="https://www.youtube.com/channel/UClWCtiHPo2ulcFeCdZy5eRw"><i className="fa-brands fa-youtube"></i></a></span>
          <span><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></span></div>
        <div className="footer3"><p>Copyright © 2025 Sky Water Villas | Designed by KHAN MOHD AYAN </p></div>
      </div>





    </>
  );
};


