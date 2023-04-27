import "./App.css";
import {Nav1} from './components/Nav1';
import {Nav2} from './components/Nav2';
import {Cards} from './components/Cards';
import {ReadBlog} from './components/ReadBlog';
import { useState } from "react";

function App() {
  const[read,setRead]=useState({status:'card'});

  let cards=[
    {
      photo:"./images/news1.jpeg",
      heading:"7 TIPS TO GET THE BEST WHEAT PRODUCE",
      writerImg:"./images/writer.webp",
      writer:"Blog by: Deepika Bhatt ",
      date:"31st December 2023",
      content:"Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can do. Heres how Mr. Balu Darade grew a whopping 195 quintal"
    },
    {
      photo:"./images/news2.jpg",
      heading:"7 TIPS TO GET THE BEST WHEAT PRODUCE",
      writerImg:"./images/writer.webp",
      writer:"Blog by: Deepika Bhatt ",
      date:"31st December 2023",
      content:"Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can do. Heres how Mr. Balu Darade grew a whopping 195 quintal"
    },
    {
      photo:"./images/news3.jpg",
      heading:"7 TIPS TO GET THE BEST WHEAT PRODUCE",
      writerImg:"./images/writer.webp",
      writer:"Blog by: Deepika Bhatt ",
      date:"31st December 2023",
      content:"Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can do. Heres how Mr. Balu Darade grew a whopping 195 quintal"
    },
    {
      photo:"./images/news3.jpg",
      heading:"7 TIPS TO GET THE BEST WHEAT PRODUCE",
      writerImg:"./images/writer.webp",
      writer:"Blog by: Deepika Bhatt ",
      date:"31st December 2023",
      content:"Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can do. Heres how Mr. Balu Darade grew a whopping 195 quintal"
    },
    {
      photo:"./images/news3.jpg",
      heading:"7 TIPS TO GET THE BEST WHEAT PRODUCE",
      writerImg:"./images/writer.webp",
      writer:"Blog by: Deepika Bhatt ",
      date:"31st December 2023",
      content:"Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can do. Heres how Mr. Balu Darade grew a whopping 195 quintal"
    }
  ]

  return (
    <>
   
    <Nav1/>
    <Nav2/>

    {read.status=='card'?<Cards cards={cards} setRead={setRead}/>:<ReadBlog/>}
 
    </>
  );
}

export default App;
