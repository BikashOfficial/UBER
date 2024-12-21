import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainSignup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    })
    console.log(captainData);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <a href="/"><img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" /></a>

        <h2 className='font-semibold text-4xl mb-3'>Wanna be a Captain ?</h2>

        <form onSubmit={submitHandler}>

          <h3 className='text-lg font-medium mb-2'>Enter your Name</h3>
          <div className='flex gap-2 mb-6'>
            <input
              className='bg-[#eeee] rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base '
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder='first name'
            />

            <input
              className='bg-[#eeee] rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base '
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder='last name'
            />
          </div>

          <h3 className='text-lg mb-2 font-medium'>Enter your Email</h3>
          <input
            className='bg-[#eeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base '
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
          <input
            className='bg-[#eeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base '
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />

          <button
            className='bg-[#111] text-[white] font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '
          >Create Account</button>

        </form>

        <p className='text-center'>already a captain ? <Link to='/captain-login' className='text-blue-700'>Login here</Link></p>
      </div>

      <div>
        <p className='text-[12px] leading-tight'>By Proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default CaptainSignup