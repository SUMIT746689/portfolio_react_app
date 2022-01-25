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
        <h1>Tour Web Presence</h1>
        <p>I am a professional web full stack web developer. I'm tring my best to be a top developer in whole world </p>
        <button>Read More</button>
    </div>
    <div><Membership state={state[0]} /></div>   
    <div><Membership state={state[1]} /></div>   
    <div><IoMdAnalytics/><IoMdGlobe/><IoMdSettings/><IoMdPeople/></div>   
    <div>
    <Support support={support[0]}/>
    <Support support={support[1]}/>
    <Support support={support[2]}/>
    <Support support={support[3]}/>
    </div>   
  </div>
)}

export default Content;
