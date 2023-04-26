import React from 'react';
import '../App.css';

export const Card = ({card}) => {
  return (
  <>
    <div className='no-of-cards col-4 p-4'>
     <div className="card shadow">
     <img src={card.photo} className="card-img-top" alt="..." width={30}/>
     <div className="card-body">
      <h6 className="card-title" style={{ color: "#005718" }}>{card.heading}</h6>
      
      <div>
        <img src={card.writerImg} alt='...' className='rounded-circle p-1' width={50}/>
        <span className='px-3 small' style={{ color: "#005718" }}>Blog By : {card.writer}</span>
      </div>

      <p className="card-text m-2 small">{card.content} . . . . . . <a className='link text-black' to='/ReadBlog'>Read More.</a></p>
     </div>
   </div>
  </div>
  </>
  )
}

export default Card
