import React, {  useState} from 'react'
// import { NavLink } from 'react-router-dom'
import Style from './Gmax.module.css'
import { NavLink } from 'react-router-dom';
// import { Crop } from './Crop';
import { Downloads } from './Downloads';




export const Home = () => {
  const [index, setIndex] = useState(1);
const images =[
  {
    id:1,
    mainpageurl:'https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600',
    suburl:[
      "https://th.bing.com/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://i.pinimg.com/originals/b8/1a/fe/b81afe4fe3b704631fa9dcfe92c7ebf0.jpg",
      "https://i.pinimg.com/originals/b8/1a/fe/b81afe4fe3b704631fa9dcfe92c7ebf0.jpg"
    ]
  }
]
  // const images=[
  // 'https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/8482895/pexels-photo-8482895.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  // 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=600',
  //    ];

  const handlePrevious = () => {
    setIndex(index === 0 ? images.length-1 : index-1);
  };

  const handleNext = () => {
    setIndex(index === images.length-1 ? 0 : index+1);
  };

  return (
    <>
    <Downloads props={images}/>
    <div className={Style.imgTop}>
      <div className={Style.imgMid}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>

    <div className={Style.imgParent}>
  
  {/* <Crop/> */}
  <NavLink to="/details/${index}">
      <img className={Style.imgChild} src={images[index].mainpageurl} alt='images' />
  </NavLink>
      
    </div>

    </>
  );
};




