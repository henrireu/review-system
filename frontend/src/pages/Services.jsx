import { useState } from 'react'

import sportsNetwork from '../assets/service1.png'
import indianChai from '../assets/service2.jpg'

import Reviews from '../components/Reviews'

const Services = () => {
  const [serviceId, setServiceId] = useState("")

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
            <h1 className="text-3xl mt-2">Sports network</h1>
          </div>
          <Reviews id={serviceId}/>
          </>
        ): (
          <>
          <div className="flex gap-5">
            <img src={indianChai} className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px]"/>
            <h1 className="text-3xl mt-2">Indian Chai</h1>
          </div>
          <Reviews id={serviceId}/>
          </>
          
        )}
      
      <button onClick={() => setServiceId("")}>back</button>
    </div>
  )
  
}

export default Services;