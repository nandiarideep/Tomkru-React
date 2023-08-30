import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import depo from '../images/depo.png';


const SignupPage = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      chooseCurrency: '',
      referralCode: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Name or Email is must'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password should Match'),
      referralCode: Yup.string()
    }),
    onSubmit: (values, action) => {
      // Handle form submission here
      console.log(values);
      action.resetForm();
    },

  });

  const [value, setValue] = useState('');
  const options = [
    { label: 'INR', value: 1 },
    { label: 'EUR', value: 2 },
    { label: 'USD', value: 3 },
    { label: 'BDT', value: 4 },
    { label: 'PKR', value: 5 },
    { label: 'GBP', value: 6 },
    { label: 'QAR', value: 7 },
    { label: 'AED', value: 8 },
    { label: 'NZD', value: 9 },
    { label: 'HKD', value: 10 },
  ]
  function handleSelect(e) {
    setValue(e.target.value)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className='flex flex-col min-h-full min-w-full bg-[#070e2b] text-white items-center'>
      <div className='bg-[#2A3254] h-[77px] flex w-full justify-center items-center font-az'>
        <h1 className='text-[27px]'>welcome to our <span className='text-[#f4f438]'>world!!</span></h1>
      </div>
      <section className='m-[5rem] h-full w-[90%] flex flex-col'>
        <div className='flex justify-center md:justify-end'>
          <h3 className='capitalize text-lg gap-2'>if you encounter issues, please contact <span className='text-[#ef3333] cursor-pointer'>online cs</span></h3>
        </div>
        <div className='bg-[#251d41] h-full w-full flex items-center border-[#f4f438] border-[5px] justify-center'>
          <div className='bg-[#191E32] h-full w-full m-5 flex flex-col items-center justify-center'>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex justify-center'>
                <h1 className='uppercase font-bold text-2xl my-3'>sign up</h1>
              </div>
              <div className="mb-4">
                <hr className='h-[2px] w-[375px] bg-[#f4f438] mb-3' />
                <label htmlFor="email" className="block text-white">
                  E-Mail Id<span className='text-[#ef3333]'>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter Username/Email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className={`h-[63px] w-[375px] bg-[#303756] hover:bg-[#43475e] border rounded-md focus:outline-none focus:ring-2 text-white ${formik.touched.email && formik.errors.email
                    ? 'ring-red-500'
                    : 'focus:ring-purple-400'
                    }`}
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white">
                  Password<span className='text-[#ef3333]'>*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Enter Password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className={`bg-[#303756] hover:bg-[#43475e] h-[63px] w-[375px] border rounded-md focus:outline-none focus:ring-2 text-white ${formik.touched.password && formik.errors.password
                    ? 'ring-red-500'
                    : 'focus:ring-purple-400'
                    }`}
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-white">
                  Confirm Password<span className='text-[#ef3333]'>*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder='Confirm Password'
                  className={`bg-[#303756] hover:bg-[#43475e] h-[63px] w-[375px] border rounded-md focus:outline-none focus:ring-2 text-white ${formik.touched.password && formik.errors.password
                    ? 'ring-red-500'
                    : 'focus:ring-purple-400'
                    }`}
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className="text-red-500">{formik.errors.confirmPassword}</div>
                )}
              </div>
              {/* Choose Currency */}
              <div className="mb-4">
                <label htmlFor="chooseCurrency" className="block text-white">
                  Choose Currency<span className='text-[#ef3333]'>*</span>
                </label>
                <select className='bg-[#303756] h-[63px] w-[375px] border rounded-md' onChange={handleSelect}>
                  {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              {/* Referral Code */}
              <div className="mb-4">
                <label htmlFor="referral code" className="block text-white">
                  Referral code
                </label>
                <input
                  type="text"
                  id="referralCode"
                  name="referralCode"
                  placeholder='Enter Referral Code'
                  className='bg-[#303756] hover:bg-[#43475e] h-[63px] w-[375px] border rounded-md'></input>
              </div>
              <div className='flex justify-center'>
                <button
                  type="submit"
                  className="bg-[#f4f438] text-black px-3 py-1 rounded-lg text-xl font-az">
                  Register
                </button>
              </div>
              <div className='flex justify-center my-3 gap-2'>
                Have An Account ? <span className='font-bold cursor-pointer hover:underline'><Link to='/LoginPage'>Log In</Link></span>
              </div>
            </form>
          </div>
          <div>
            <img src={depo} alt="fast" className='lg:block hidden' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignupPage