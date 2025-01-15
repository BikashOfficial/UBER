import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {  
        e.preventDefault()
    }

    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmRidePopupPanel(false)
            }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            <h3 className='font-semibold text-2xl mb-5'>Confirm this Ride to start</h3>

            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='size-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrvbjwtgii40vjhTtoo_Rn5P0cz1V5P_SHA&s" alt="" />
                    <h2 className='text-lg font-medium'>Alexa Stark</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='flex flex-col gap-5 justify-between items-center'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-add-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>Kankariya Talab, Ahemadabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>Kankariya Talab, Ahemadabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="text-xl ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹192.16</h3>
                            <p className='text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>



                <div className='mt-6 w-full'>
                    <form onSubmit={(e) => {
                       submitHandler(e)
                    }
                    }>
                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value) } placeholder='Enter OTP' className='w-full mt-5 bg-[#eee] px-6 py-2 text-center font-mono font-bold text-2xl rounded-lg' />
                        <Link
                            to={`/captain-riding`}
                            className=' mt-5 w-full flex justify-center bg-green-600 rounded-lg text-white text-xl font-semibold p-2'
                        >Confirm</Link>
                        <button onClick={() => {
                            props.setRidePopupPanel(false)
                            props.setConfirmRidePopupPanel(false)
                        }} className='mt-2 w-full bg-red-500 rounded-lg text-white text-xl font-semibold p-2'>Cancel</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ConfirmRidePopUp