import { useState } from 'react'
 
import sportsNetwork from '../assets/service1.png'
import indianChai from '../assets/service2.jpg'

import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

// eslint-disable-next-line react/prop-types
const Services = ({loggedIn}) => {
  const [serviceId, setServiceId] = useState("")
  const [showForm, setShowForm] = useState(false)

  const leaveForm = () => {
    setShowForm(false)
  }

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
          {showForm && (
            <ReviewForm leaveForm={leaveForm} serviceId={"1"}/>
          )}
          <div className="flex gap-5">
            <img src={sportsNetwork}  className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px]"/>
            <div>
              <h1 className="text-3xl mt-2">Sports network</h1>
              {loggedIn && (
                <div 
                  className="mt-10 bg-goldish flex items-center gap-2 text-white p-2 rounded hover:cursor-pointer hover:bg-goldish2"
                  onClick={() => setShowForm(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                  <p className="text-xl">Write a review</p>
                </div>
              )}
            </div>
          </div>
          <Reviews id={serviceId}/>
        </>
      ): (
        <>
          {showForm && (
            <ReviewForm leaveForm={leaveForm} serviceId={"2"}/>
          )}
          <div className="flex gap-5">
            <img src={indianChai} className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px]"/>
            <div>
              <h1 className="text-3xl mt-2">Indian chai</h1>
              {loggedIn && (
                <div 
                  className="mt-10 bg-goldish flex items-center gap-2 text-white p-2 rounded hover:cursor-pointer hover:bg-goldish2"
                  onClick={() => setShowForm(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                  <p className="text-xl">Write a review</p>
                </div>
              )}
            </div>
          </div>
          <Reviews id={serviceId}/>
        </>
          
      )}
      
      <button onClick={() => setServiceId("")}>back</button>
    </div>
  )
  
}

export default Services;