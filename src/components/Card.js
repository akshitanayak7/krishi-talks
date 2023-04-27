import React from 'react';
import '../App.css';

export const Card = ({card},{setRead}) => {

  return (
  <>
    <div className='no-of-cards col-lg-4 col-md-6 col-sm-12 p-4'>
     <div className="card shadow">
     <img src={card.photo} className="card-img-top" alt="..." width={30}/>
     <div className="card-body">
      <h6 className="card-title" style={{ color: "#005718" }}>{card.heading}</h6>
      
      <div>
        <img src={card.writerImg} alt='...' className='rounded-circle p-1' width={50}/>
        <div className="container  d-inline">
                    <div className="text-wrap  d-inline-block align-middle heading small" style={{color:"#005718",width:'10rem'}}>
                      {card.writer}{card.date}
                    </div>
        </div>
      </div>

      <p className="card-text m-2 small">{card.content} . . . . . . <a className='link text-black'>Read More.</a></p>
     </div>
   </div>
  </div>
  </>
  )
}

export default Card
