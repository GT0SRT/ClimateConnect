import React from 'react'
import Cards from './Cards'

const testimonials = [
    {
        name: "Emily Johnson",
        testimonial: "I absolutely love this climate app! It helps me stay updated on the weather and air quality, especially with my asthma. I now check the AQI regularly before heading outdoors, and it's been a game-changer for my health.",
        img: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Michael Smith",
        testimonial: "The precipitation map is fantastic. It gives me real-time information on rainfall and snow, making it easier to plan my outdoor activities. It's so accurate, and I can count on it every time I go hiking.",
        img:"https://www.findtherightclick.com/wp-content/uploads/2017/07/Matt-T-Testimonial-pic.jpg"
    },
    {
        name: "Sarah Lee",
        testimonial: "As an environmental enthusiast, this app is a must-have! The cloud coverage and wind maps help me understand weather patterns in my area. It also provides valuable insights into air quality, which is great for tracking pollution.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClM8jS8v61W45EtkLx8ItDqdX4Bcg2xE_gw&s"
    },
    {
        name: "David Martinez",
        testimonial: "This app has become an essential part of my daily routine. The temperature map is perfect for planning my commute, and I love how it also tracks the UV index, reminding me to stay safe in the sun!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ns5cjCx_vpVyNM00cXGZ3fHYEocnkuWs_g&s"
    },
    {
        name: "Jessica Clark",
        testimonial: "I use this app every day to monitor weather changes. It’s super intuitive and the barometric pressure and wind speed maps are incredibly useful for predicting storms. It's a must-have for anyone living in unpredictable weather zones.",
        img:"https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
    },
    {
        name: "James Taylor",
        testimonial: "As a farmer, understanding the weather is crucial for my crops. This app provides detailed and reliable data, from precipitation to humidity, helping me make informed decisions to protect my harvests.",
        img:"https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg"
    }
];

const Testimonials = () => {
  return (
    <>
        <div className='pt-5 mt-7'>
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-3xl md:text-4xl font-bold flex flex-col text-center'>Testimonials</h1>
            <div className='flex flex-wrap md:m-32 mt-7 mb-12'>
                {testimonials.map((title, index) => (
                    <Cards 
                        title={title.name}
                        des={title.testimonial}
                        imgSrc={title.img}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Testimonials