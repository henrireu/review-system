import { useState } from 'react'
 
import sportsNetwork from '../assets/service1.png'
import indianChai from '../assets/service2.jpg'

import Reviews from '../components/Reviews'
//import ReviewForm from '../components/ReviewForm'

// eslint-disable-next-line react/prop-types
const Services = ({loggedIn}) => {
  const [serviceId, setServiceId] = useState("")
  //const [showForm, setShowForm] = useState(false)

  /*const leaveForm = () => {
    setShowForm(false)
  }*/

  if (serviceId === "") return (
    <div>
      <h1 className="text-3xl">Services</h1>

      <div className="flex gap-10 mt-10">

        <div 
          className="p-10 border border-black hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => setServiceId("1")}
        >
          <img src={sportsNetwork} alt="sportsnetwork" className="h-[200px] w-[200px]"/>
        </div>

        <div 
          className="p-10 border border-black hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => setServiceId("2")}
        >
          <img src={indianChai} alt="indianChai" className="h-[200px] w-[200px]"/>
        </div>

      </div>
       
    </div>
  )

  return (
    <div className="flex flex-col">

      {serviceId === "1" ? (
        <>
          <div className="flex gap-5">
            <img src={sportsNetwork}  className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px]"/>
            <div>
              <h1 className="text-3xl mt-2">Sports network</h1>
            </div>
          </div>
          <Reviews id={serviceId} loggedIn={loggedIn}/>
        </>
      ): (
        <>
          <div className="flex gap-5">
            <img src={indianChai} className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px]"/>
            <div>
              <h1 className="text-3xl mt-2">Indian chai</h1>
            </div>
          </div>
          <Reviews id={serviceId} loggedIn={loggedIn}/>
        </>
          
      )}
      
      <button onClick={() => setServiceId("")}>back</button>
    </div>
  )
  
}

export default Services;