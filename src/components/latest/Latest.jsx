import React from 'react'
import LatestProduct from './DataLates'
import LatestCard from './LatestCard'
import '../latest/style.scss'


const Latest = () => {
  return (
    <section className='Latest'>
      <div className='container'>
        <div className='row g-3'>
            <h2>Latest Episodes</h2>

            {
                
                LatestProduct.map((element,index)=>{
                    return (<LatestCard image={element.image} text={element.text} key={index}/>)
                })
            }
        </div>

      </div>
    </section>
  )
}

export default Latest
