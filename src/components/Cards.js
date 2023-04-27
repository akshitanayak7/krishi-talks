import React from 'react'
import {Card} from './Card'
import '../App.css'

export const Cards = (props) => {

  const openReadBlog=()=>{
    props.setRead({status:'read'})
 }  

  return (

    <div class="container">
    <div class="row  mt-4 pt-4">
      <div class="col text-center" >
        <img class="krishi" src="./images/krishiTalks.png" width={180} />
      </div>
    </div>

    <div class="row mb-4 mt-3">
      <div class="col text-center">
        <span class="fw-bold fs-5" ><span class="head">Find some of the most insteresting <span class="head" style={{ color: "#005718" }}>Agro-Technical </span>Blogs here!</span></span>
      </div>
    </div>

    <div class="row search">
      <div class="col p-3 pb-4">
        <div class=" rounded-pill  mx-auto w-50 shadow search-box" style={{ backgroundColor:"rgba(228,231,228,0.29)" }}> 
        <i class="fa-solid fa-magnifying-glass icon m-2" style={{ color: "#00C170" }}></i> 
         <input class="w-75 search-text" type="search" placeholder="Search blogs here" /> 
          </div>
      </div>

    <div className='container'>
      <a onClick={openReadBlog}><div className='row'>
       {props.cards.map((card)=>{
          return <Card card={card}/>
       })}
      </div></a>
    </div>
    </div>
  </div>
  )
}

export default Cards
