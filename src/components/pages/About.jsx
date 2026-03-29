import React from 'react'

function About() {
  return (
    <>
        <div>
            <div>
                <h5 className='pt-6 p-4 uppercase font-bold text-4xl text-center mx-auto'>About us</h5>
                   <hr className='line1' />
                   <hr className='line2'/>
                   <hr className='line1' />
                <div className='pt-6 pb-8 ml-6 mr-6'>
                    <p>At Star Stores, we believe style is more than just fashion — it’s a statement. We are a modern fashion brand dedicated to offering high-quality, trend-forward clothing, footwear, and handbags for both men and women.</p>
                    <p>Founded with a passion for fashion and a deep understanding of what clients truly want, Star Stores was created to bridge the gap between affordability and premium quality. Over time, we've grown into a trusted name for those who value exceptional service and standout style.</p>
                </div>
                <div className='state flex space-x-10 ml-6 mr-2'>
                    <div>
                        <h5>Mission Statement</h5>
                        <p><strong>Our Mission is to</strong> make everyday style effortless and accessible. Whether you're dressing for work, a night out, or your daily routine, our collections are designed to elevate your wardrobe with timeless pieces and seasonal essentials.</p>
                    </div>
                    <div className='vision mt-20'>
                        <h5>Vision Statement</h5>
                        <p><strong>Our vision is to</strong> curate a wide range of male and female wears, stylish footwear, and versatile handbags — all carefully selected to meet the needs of today’s fashion-conscious individuals. From classic staples to bold new trends, we offer pieces that blend quality, comfort, and style.</p>
                    </div>
                </div>
                <div className='banner mt-16 bg-blue-900 flex'>
                    <div className='pt-10 ml-12 space-y-4 text-white'>
                        <h1 className='font-bold text-cyan-500 text-2xl'>Our Team</h1>
                        <p>Behind every item is a dedicated team that ensures excellence — from sourcing and styling to customer support. We’re committed to making your shopping experience seamless and satisfying, every step of the way.</p>
                    </div>
                    <div className='circle mr-12 my-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                         <h5>Team</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;
