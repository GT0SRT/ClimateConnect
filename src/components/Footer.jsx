import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const links = [
    {
        name: "Home",
        target: ""
    },
    {
        name: "About",
        target: "about"
    },
    {
        name: "Explore",
        target: "services"
    },
    {
        name: "Contact us",
        target: "contact"
    },
]

const contact = [
    "Write a Message",
];

const legal = [
    "Terms & Conditions",
    "Privacy Policy"
];

const Footer = () => {
  return (
    <>
        <div className='bg-[#e3e2e281]'>
        <div className="flex flex-col md:flex-row gap-5 pb-5 pt-7 mx-5">
            <div className="mt-3 p-7 flex flex-col items-center md:items-start">
                <h1 className='text-[#ff7a32] text-3xl md:text-4xl font-bold flex flex-col'>Climate <span>Connect</span></h1>
                <h5 className='font-semibold text-[12px] text-[black] text-base'>
                    Stay Ahead of the Storm
                </h5>
            </div>
            
            <div className="flex-1 mt-3">
                <h2 className='font-bold text-lg'>Quick Links</h2>
                <nav className='list-none gap-5 ml-auto text-[16px] text-[#7b7b7b] font-semibold'>
                    {links.map(
                        (link, index) => {
                            return <NavLink className={`${(e)=>{return e.isActive?"red": "" }} cursor-pointer flex items-center gap-2 hover:text-[#E1341E]`} to={`/${link.target}`}>{link.icon}<li>{link.name}</li></NavLink>
                        }
                    )}
                </nav>
            </div>

            <div className="flex-1 mt-3">
                <h2 className='font-bold text-lg'>Contact us</h2>
                <nav className='list-none gap-5 ml-auto text-[16px] text-[#7b7b7b] font-semibold'>
                    <NavLink className={`${(e)=>{return e.isActive?"red": "" }} cursor-pointer flex items-center gap-2 hover:text-[#E1341E]`} to={`/Contact`}><li>Write a Message</li></NavLink>
                </nav>
                <h2 className='font-bold text-lg mt-4'>Legal</h2>
                {legal.map((com, index) => (
                    <p key={index} className='text-[#7b7b7b] hover:text-[#E1341E] hover:cursor-pointer font-semibold pt-1'>{com}</p>
                ))}
            </div>

            <div className='flex-1 mt-3'>
                <h2 className='font-bold text-lg text-black'>Our Location</h2>
                <p className='text-sm text-[#7b7b7b]'><FaLocationDot className='inline'/> 420 street 220705, Aliens Nation</p>
                <p className='text-sm text-[#7b7b7b]'><FaPhoneAlt className='inline'/> 0122 075 1204</p>
                <p className='text-sm text-[#7b7b7b]'><MdEmail className='inline'/> climate.connect@company.com</p>
                <h2 className='font-bold text-lg mt-6'>Social</h2>
                <div className='flex gap-2 pt-1'>
                    <FaLinkedin size={20} className='hover:cursor-pointer' />
                    <FaInstagram size={20} className='hover:cursor-pointer'/>
                    <FaSquareXTwitter size={20} className='hover:cursor-pointer' />
                    <FaFacebookF size={20} className='hover:cursor-pointer' />
                    <FaPinterest size={20} className='hover:cursor-pointer' />
                </div>
            </div>
        </div>
        <div className='bg-[#ff7a32] p-1'>
            <p className='font-semibold text-white text-center text-sm'>All Rights Reserved ©2024 ClimateConnect<sup>®</sup></p>
        </div>
    </div>
    </>
  )
}

export default Footer