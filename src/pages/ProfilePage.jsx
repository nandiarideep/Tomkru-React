import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import rect from '../assets/images/rect.png'
import ell from '../assets/images/ell.png'

const ProfilePage = () => {
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
  
  return (
    <div className='flex m-5 items-center h-full w-full flex-col font-lm'>
      <div className='bg-[#2A3254] rounded-[50px] relative w-full'>
        <div>
          <img src={rect} alt="rect" />
        </div>
        <div className='absolute top-10'>
          <img src={ell} alt="ell" height={150} width={150} />
        </div>
        {/* <div className='absolute right-5 top-[130px]'>
          <button className='p-2 text-white bg-green-600 hover:bg-green-500 rounded-xl'>Update</button>
        </div> */}
        <div className='m-5'>
          <form onSubmit={formik.handleSubmit} className='flex flex-wrap gap-4'>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-white">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder='Enter Full Name'
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
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='Enter Username'
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
            {/* Mobile No Field */}
            <div className="mb-4">
              <label htmlFor="number" className="block text-white">
                Mobile No
              </label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder='Enter Mobile No'
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
            {/* Address Field */}
            <div className="mb-4">
              <label htmlFor="Address" className="block text-white">
                Enter Full Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder='Enter Your Full Address'
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
