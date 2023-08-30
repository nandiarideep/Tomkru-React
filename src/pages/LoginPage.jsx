import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fast from '../images/fast.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });
  const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
  

  

  return (
    <div className='flex flex-col min-h-full min-w-full bg-[#070e2b] text-white items-center'>
      <div className='bg-[#2A3254] h-[77px] flex w-full justify-center items-center font-az'>
        <h1 className='text-[27px]'>welcome to our <span className='text-[#f4f438]'>world!!</span></h1>
      </div>
      <section className='m-[5rem] h-full w-[90%] flex flex-col'>
        <h3 className='flex md:justify-end capitalize ml-[5%] text-lg gap-2'>if you encounter issues, please contact <span className='text-[#ef3333] cursor-pointer'>online cs</span></h3>
        <div className='bg-[#251d41] h-full w-full flex items-center border-[#f4f438] border-[5px] justify-center'>
          <div className='bg-[#191E32] h-full w-full m-5 flex flex-col items-center justify-center'>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex justify-center'>
                <h1 className='uppercase font-bold text-2xl my-3'>login</h1>
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
              <div className='flex justify-center'>
                <button
                  type="submit"
                  className="bg-[#f4f438] text-black px-3 py-1 rounded-lg text-xl font-az">
                  Login
                </button>
              </div>
              <div className='flex justify-center my-3 gap-2'>
               Don't Have An Account ? <span className='font-bold cursor-pointer hover:underline'><Link to='/SignupPage'>Sign Up</Link></span>
              </div>
            </form>
          </div>
          <div>
            <img src={fast} alt="fast" className='lg:block hidden' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage



// validationSchema: Yup.object({
//   username: Yup.string()
//   .test('emailOrMobile', 'Invalid input entered', function (value) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (emailRegex.test(value)) {

//       return true; // Valid email
//     }

//     if (phoneRegex.test(value)) {
//       return true; // Valid mobile number
//     }

//     throw new Yup.ValidationError('Invalid email or mobile number e
