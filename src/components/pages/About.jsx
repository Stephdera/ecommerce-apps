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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, reprehenderit doloremque ratione fugiat mollitia quia sed ullam est perferendis blanditiis excepturi natus architecto consequatur amet ea officia placeat pariatur tempore deleniti, iste consectetur cumque labore. Porro eveniet fugiat, assumenda quos explicabo distinctio. Iste beatae aspernatur odio ducimus voluptatibus facere veritatis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate nemo alias id pariatur fugit odio repellat, voluptatibus ipsam minus quasi cumque, aut natus temporibus? Modi eum voluptatem iste veritatis odio in reiciendis, nam reprehenderit quo alias beatae fuga distinctio. Eveniet provident a veniam dolore deleniti ipsum excepturi mollitia error.</p>
                </div>
                <div className='state flex space-x-10 ml-6 mr-2'>
                    <div>
                        <h5>Mission Statement</h5>
                        <p><strong>Our Mission is to</strong> create opportunities that accelerate economic growth for all of Africa. </p>
                    </div>
                    <div className='vision mt-20'>
                        <h5>Vision Statement</h5>
                        <p><strong>Our vision is to</strong> Enable seamless payments for businesses, banks and consumers across Africa.</p>
                    </div>
                </div>
                <div className='banner mt-16 rounded bg-blue-900 flex'>
                    <div className='pt-10 ml-12 space-y-4 text-white'>
                        <h1 className='font-bold text-cyan-500 text-2xl'>Where we work</h1>
                        <h5 className='text-xl'>We're Pan-Africa</h5>
                        <p>On our way to building a more digitized Africa, we’ve extended our networks to a number of locations all over the continent.</p>
                        <div className='teams space-x-4 text-black flex'>
                            <h1 className='bg-blue-500'>Teams in 18 countries</h1>
                            <h1 className='bg-yellow-500'>Serving 35 countries</h1>
                            <h1 className='bg-purple-500'>450+ team</h1>
                        </div>
                    </div>
                    <div className='circle mr-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                         <h5>Team</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;
