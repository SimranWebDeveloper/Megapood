import React from 'react'
import Astoronomy from '../astoronomy/astoronomy'
import Support from '../../support/Support'
import Latest from '../latest/Latest'
import Live from '../live/live'



const Home = () => {
  return (
    <div>
      <Astoronomy/>
      <Live/>
      <Support/>
      <Latest/>
    </div>
  )
}

export default Home
