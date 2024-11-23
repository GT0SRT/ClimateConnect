import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const headers = [
  "Climate Crisis: Scientists Warn of Irreversible Damage if Immediate Action Isn’t Taken",
  "World Leaders Meet to Address Escalating Climate Change: Will They Finally Take Action?",
  "The Green New Deal: Can This Bold Climate Initiative Save Our Planet?",
  "2024 Hurricane Season Brings Unprecedented Storms: Are We Prepared for the Worst?",
  "Record Flooding in South Asia: Millions Displaced as Rivers Overflow",
  "Heatwaves Across the Globe: Is This the New Normal in a Warming World?",
  "El Niño Returns: What This Weather Phenomenon Means for Global Climate",
  "The Arctic Melt: How Changing Weather Patterns Are Affecting the Global Climate",
  "Intense Winter Storms Expected: Meteorologists Warn of Record-Breaking Snowfall",
  "Green Energy Revolution: Can Solar and Wind Power Save Us From Climate Catastrophe?",
  "Deforestation Crisis: Loss of Forests Could Lead to More Severe Weather Events",
  "Carbon Capture Technology: A Game-Changer in the Fight Against Global Warming?",
  "Protecting Biodiversity: How Climate Change is Threatening Ecosystems Worldwide",
  "Youth-Led Climate Strikes: Are Young Activists Making a Difference in the Fight Against Global Warming?",
  "United Nations Climate Summit: Can the World Come Together to Tackle Global Warming?",
  "Carbon Tax Debate: Should Governments Impose Taxation to Curb Climate Change?",
  "Local Governments Take Climate Action: Cities Around the World Implement Bold Green Policies",
  "Corporate Responsibility: Companies Commit to Net-Zero Emissions by 2050"
];

const imagesSrc = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGInPEU8LJjJz9guBuuSwLWdzEJylOttDP-xp4qHGsNtfUSAuqAhpqgRL2gCDOMgbJycg&usqp=CAU",
  "https://i.ytimg.com/vi/MNe_TnP2oCc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7HwH_t9fOoOC61jwX8OU1IRpg7Q",
  "https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg",
  "https://www.livemint.com/lm-img/img/2024/10/07/600x338/PTI10-06-2024-000109B-0_1728267339462_1728267372399.jpg",
  "https://snowreport.co.za/snowimages/20240601/Nico-SALT-5-cropped-stamped.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-762x508,f_auto,q_auto:best/rockcms/2024-11/241120-bomb-cyclone-pacific-northwest-al-0916-18f275.jpg",
  "https://images.firstpost.com/uploads/2023/01/Weather-Weather-Forecast-Weather-Update-Weather-Update-Today-Weather-News-Weather-Report-Winter-Cold-Rain-Meteorological-Department.png?im=Resize,width=720,aspect=fit,type=normal",
  "https://cdn.dnaindia.com/sites/default/files/2024/05/18/2635047-untitled-design-2024-05-18t225735.063.jpg?im=FitAndFill=(1200,900)",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYujv2q11wyZcrGHJn10Y2k0Fq-BaDfR_EtA&s",
  "https://thecsruniverse.com/adminxsafe/uploads/2020/09/Save-the-Children.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5FxDHpWs7FMgXpD65bTlP0ss-4nXSy8jbQ&s",
  "https://www.brookings.edu/wp-content/uploads/2016/06/wildfire001.jpg?quality=75&w=1500",
  "https://www.godigit.com/content/dam/godigit/directportal/en/Natural-Disasters-in-India.jpg",
  "https://www.economist.com/content-assets/images/20230415_BLP504.jpg",
  "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/05115837/Natural-Disaster-1024x768.jpg",
  "https://www.usnews.com/object/image/00000176-8717-df90-a17e-9f3778c60000/201222bc-disasters7-editorial.jpg?update-time=1608647040715&size=responsive640",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhU1-OBgrg90U1r958DIcECPM5Ql8NaOLzg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GJUKUSchCGh-eK3TpxwYfULOXUJVmAjTdw&s"
];

const eventImg = [
  "https://media.istockphoto.com/id/182149444/photo/body-mind-and-soul.jpg?s=612x612&w=0&k=20&c=b899tAY_IvxWRSczeJ4dAFipXgVzEBcr6b491HVWsrU=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtB41bsXjc55eQ2307ONs-VhXkVsJxuwqOA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTanJCLoNB7thV690RFl6ORM1rHFuSwD9A&s",
  "https://upload.wikimedia.org/wikipedia/commons/e/ea/Farmers_and_Artisans_Market_at_Farmington_-_Michigan.jpg",
  "https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg",
  "https://media.istockphoto.com/id/957023718/photo/anxious-audience-waiting-for-the-curtains-to-open-to-see-the-performance.jpg?s=612x612&w=0&k=20&c=n6_Sbo40UHp7iO1s4Yhvuc0SCS9BqdMaNbxj8wA-S7Y=",
  "https://i0.wp.com/paksc.org/pk/wp-content/uploads/2023/08/2023-top-30-Best-Working-Model-Ideas-of-Science-Exhibition-for-classes-8-9-and-10.jpg?fit=768%2C634&ssl=1",
  "https://www.imagesredefined.in/wp-content/uploads/2019/05/photography-workshop-blog.jpg",
  "https://race-registration-cdn.indiarunning.com/events/2024/03/17/sbi-green-marathon-season-4---bhopal-2024/banner1709038819820.jpeg",
  "https://m.media-amazon.com/images/I/81IrbhICkoL._UF1000,1000_QL80_.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/2017_European_Beach_Volleyball_Championships.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/72/6c/0b/caption.jpg?w=300&h=300&s=1",
  "https://www.gofundme.com/en-gb/c/wp-content/uploads/sites/11/2022/10/MK-Marathon-Start.webp?w=1024",
  "https://beyondthestreets.com/cdn/shop/files/shanghai-show-1.jpg?v=1690241059"
]

const events = [
  { title: "Outdoor Yoga Class", location: "Central Park, New York" },
  { title: "Food Truck Festival", location: "Downtown Square, Chicago" },
  { title: "Stand-Up Comedy Show", location: "Laugh Factory, Los Angeles" },
  { title: "Farmers Market", location: "Union Square, San Francisco" },
  { title: "Tech Conference", location: "Silicon Valley Convention Center, San Francisco" },
  { title: "Theater Performance", location: "Broadway, New York City" },
  { title: "Science Exhibition", location: "Science Museum, Boston" },
  { title: "Photography Workshop", location: "The Art Studio, Miami" },
  { title: "Marathon Run", location: "City Park, Los Angeles" },
  { title: "Book Launch", location: "The Book Loft, Chicago" },
  { title: "Beach Volleyball Tournament", location: "Venice Beach, Los Angeles" },
  { title: "Cooking Class", location: "Culinary Institute of America, Napa Valley" },
  { title: "Charity Run", location: "Central Park, New York" },
  { title: "Street Art Show", location: "Wynwood Walls, Miami" }
];


const User = () => {
  return (
    <>
      <div className='md:ml-32 md:mr-32 shadow-lg mb-7'>
        <div className='flex p-3'>
          <div className='w-[60vw] md:w-2/3'>
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-xl md:text-2xl m-5 font-bold flex flex-col'>Top Stories & Articles</h1>
            <div className='m-3 md:m-7 w-[50vw] md:w-[45vw] md:flex'>
              <img src="https://cms.accuweather.com/wp-content/uploads/2024/11/Screenshot-2024-11-20-at-8.07.49-AM.png?w=348&h=260&crop=1" className='w-96 md:w-[16vw] md:h-[22vh]' alt="" />
              <div className='flex flex-col p-3'>
                <h1 className='text-center libre-baskerville-regular text-[0.6rem] md:text-[1rem] p-2'>1 dead, massive power outages as bomb cyclone hits Pacific Northwest</h1>
                <p className="text-gray-600 text-[0.4rem] md:text-[0.7rem] text-center p-2">14 minutes ago</p>
              </div>
            </div>
            <div className='flex flex-wrap'>
              {headers.map((name, index) => (
                <div className='flex flex-row'>
                    <div className='flex m-3 md:m-7 w-[50vw] md:w-[20vw]'>
                      <img src={imagesSrc[index]} className='w-[18vw] md:w-[8vw] md:h-[22vh]' alt="" />
                      <div className='flex flex-col p-3'>
                        <h1 className='text-center libre-baskerville-regular text-[0.6rem] p-2'>{name}</h1>
                        <p className="text-gray-600 text-[0.4rem] text-center">{index} minitues ago</p>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className='border-l-2 border-[#d6d3d3c3] w-[40vw] md:w-1/3'>
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-xl md:text-2xl m-5 font-bold flex flex-col'>Events</h1>
            {
              events.map((name,index) => (
                <div className='flex flex-row'>
                    <div className='flex m-3 md:m-7 w-[50vw] md:w-[12vw]'>
                      <img src={eventImg[index]} className='w-[12vw] md:w-[12vw]' alt="" />
                      <div className='flex flex-col p-1'>
                        <h1 className='text-center libre-baskerville-regular text-[0.6rem] p-2'>{name.title}</h1>
                        <p className="text-[#ff7a32] text-[0.4rem] text-center">{name.location}</p>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default User;