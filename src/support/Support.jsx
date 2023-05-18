import React from 'react'
import './style.scss'

const Support = () => {
  return (
    <section className='support '>
        <div className='box-support d-flex justify-content-center align-items-center '>
            <div className='d-flex justify-content-center align-items-center flex-column ' >
                <p className='display-4 fw-semibold'>Support The Show</p>
                <h5 className='my-4'>Enjoy listening to our podcast? Consider making a donation!</h5>
                <button className='btn btn-primary text-center'>Make a Donation</button>
            </div>
        </div>

    </section>
  )
}

export default Support
