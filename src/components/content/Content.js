import React,{useState} from 'react';
import content_style from './Content.module.css';
import Membership from './content_item/Membership';
import { IoMdAnalytics ,IoMdGlobe,IoMdSettings,IoMdPeople } from 'react-icons/io';
import Support from './content_item/Support';
function Content() {

  const [state,setState]=useState([
    {name:"Membership",price:199},
    {name:"Pro Membership",price:299}
]);
  const[support,setSupport] = useState([
    {name:'Analytics',
    icon:'<IoMdAnalytics/>',
    text:'Learn this is analytical concept.we should lraen that.'
  },
  {
    name:"Marketing",
    icon:'<IoMdGlobe/>',
    text:'Learn this is analytical concept.we should lraen that.'
  },
  {
    name:"Development",
    icon:'<IoMdSettings/>',
    text:'Learn this is analytical concept.we should lraen that.'  
  },
  {
    name:"Support",
    icon:'IoMdPeople',
    text:'Learn this is analytical concept.we should lraen that.'  
  }
  ]);
  return (
  <div className={content_style.content}>
    <div className={content_style.imageview}>
        <h1 className={content_style.h1}>Tour Web Presence</h1>
        <p>I am a professional web full stack web developer. I'm tring my best to be a top developer in whole world </p>
        <button>Read More</button>
    </div>
    <div className={content_style.membership}><Membership state={state[0]} /></div>

    <div className={content_style.proMembership}><Membership state={state[1]} /></div>   

    <div className={content_style.support}>
      <div className={content_style.supportItem}>
        <IoMdAnalytics/>
        <Support support={support[0]}/>
      </div>
      
      <div className={content_style.supportItem}>
        <IoMdGlobe/>
        <Support support={support[1]}/>
      </div>
  
      <div className={content_style.supportItem}>
        <IoMdSettings/>
        <Support support={support[2]}/>
      </div>
      <div className={content_style.supportItem} >
        <IoMdPeople/>
        <Support support={support[3]}/>
      </div>
    </div>

    <div className={content_style.imageSlider}>
      <div className={content_style.imageSlider_item_1}>
        <img className={content_style.image} src='https://gallery.yopriceville.com/var/albums/Abstract/pink_fantasy_wallpaper.jpg?m=1399676400' alt='Another_img'/>
      </div>
      <div className={content_style.imageSlider_item_2}>
        <h3>My Business On The Web</h3>
        <p>Learn this is analytical concept.we should lraen that.Learn this is analytical concept.we should lraen that.Learn this is analytical concept.we should lraen that.Learn this is analytical concept.we should lraen that.Learn this is analytical concept.we should lraen that.</p>
        <button  className={content_style.button}>Read more</button>
      </div>
    </div>
    
    <div  className={content_style.allImages}>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      <img className={content_style.image} src='https://cdn.unsell.design/2021/01/7040940a-free-pink-portfolio-templates-indesign.jpg' alt='Another_img'/>
      
    </div>

  </div>
)}

export default Content;
