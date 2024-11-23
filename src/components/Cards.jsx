import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Cards = ({ title, des, imgSrc}) => {

    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/');
    // };

  return (
    <>
        <div className="mt-6 w-64 max-w-sm mx-auto hover:scale-105">
            <div className="bg-[#e3e2e281] p-2 rounded-lg hover:bg-[#ff7a3244] flex items-center justify-center flex-col">
                <img
                    src={imgSrc}
                    alt="card-image"
                    className="w-[120px] h-[120px] p-1 object-cover rounded-full"
                />
                <h1 className='text-center libre-baskerville-bold text-[18px] font-bold p-1'>{title}</h1>
                <p className="text-gray-600 p-5 pt-3 text-[12px]">
                    {des}
                </p>
            </div>
        </div>
    </>
  )
}

export default Cards