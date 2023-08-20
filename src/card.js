import React from 'react'

function Card({item})

{
    //console.log(item)
  return (
   
   
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{item.title}</h5>
            <h6 className="card-price text-center">{item.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.user}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.data}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.project}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.access}</li>
              <li className={item.project1test ? "":"text-muted"}><span className="fa-li"><i className={item.project1test ? "fas fa-check":"fas fa-times"}></i></span>
              {item.project1}</li>
              <li className={item. PhoneSupporttest ? "":"text-muted"}><span className="fa-li"><i className={item.PhoneSupporttest ? "fas fa-check":"fas fa-times"}></i></span>
                {item.projectsupport}</li>
              <li className={item.domaintest ? "":"text-muted"}><span className="fa-li"><i className={item.domaintest ? "fas fa-check":"fas fa-times"}></i></span>{item.domain}
              </li>
              <li className={item.statustest ? "":"text-muted"}><span className="fa-li"><i className={item. statustest? "fas fa-check":"fas fa-times"}></i></span>{item.status}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
     
     
      
    
  
  )
}

export default Card