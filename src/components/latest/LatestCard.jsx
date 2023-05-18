import React from 'react'

const LatestCard = (props) => {
  return (
    <>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 p-3 '>
        <div className='backgroundImages rounded ' style={{backgroundImage: `url(${props.image})`}}>
            <div className='d-flex justify-content-between p-3 '>
                <div className='d-flex bg-dark rounded-pill p-1'>
                    <i className="bi bi-tags"></i>
                    <small>Music,Radio</small>
                </div>
                <div className='d-flex bg-dark rounded-pill align-items-center p-1'>
                    <i className="bi bi-stopwatch"></i>
                    <small>40 mins</small>
                </div>
            </div>
            <div className='d-flex align-items-end  p-3' style={{height:'80%'}}>
                <div>
                <h3>{props.text}</h3>
                <div className='d-flex '>
                <i className="bi bi-calendar"></i>
                <small>16 Feb 2019</small>
                </div>

                </div>

            </div>

        </div>
        </div>
    </>
  )
}

export default LatestCard
