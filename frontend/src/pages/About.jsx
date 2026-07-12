import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t border-gray-400'>
<Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
  <p>Forever was founded on the belief that fashion should be accessible to everyone, everywhere. We started as a small online store with a big dream: to make high-quality, stylish clothing available at prices that won't break the bank.</p>
  <p>Today, we're proud to say that dream has become a reality. We've grown into a global brand, loved by millions of customers who appreciate our commitment to style, quality, and affordability. Forever remains dedicated to bringing you the latest trends without compromising on value.</p>
  <b className='text-gray-800'>Our Mission</b>
  <p>We believe that everyone deserves to look and feel their best, regardless of their budget. That's why we're committed to offering the highest quality products at the most competitive prices. We source our materials ethically and work with trusted manufacturers to ensure that every item meets our strict quality standards.</p>
  </div>
</div>
<div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US'} />
  </div>
  <div className='flex flow-col md:flex-row text-sm mb-20'>
<div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Quality Assurance : </b>
<p className='text-gray-600'>We never compromise on quality. Every product in our collection is carefully selected to ensure it meets our high standards.</p>
</div>
<div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Convenience : </b>
<p className='text-gray-600'>Shop from the comfort of your home, 24/7. Fast delivery and easy returns.</p>
</div>
<div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Exceptional Customer Service : </b>
<p className='text-gray-600'>Our dedicated support team is always ready to assist you with any queries or concerns.</p>
</div>
  </div>
  <NewsLetterBox />
    </div>

  )
}

export default About