import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Cards = ({ title, des, imgSrc}) => {

    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/');
    // };

  return (
    <>
        <div className="mt-6 w-64 max-w-sm mx-auto">
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                <img
                src={imgSrc}
                alt="card-image"
                className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg">
            <h1 className='text-center rowdies-regular text-[18px] font-bold p-3'>{title}</h1>
                <p className="text-gray-600 text-[12px]">
                    {des}
                </p>
                {/* <div className="text-center">
                    <button onClick={handleClick} className="bg-[#ff7a32] text-white mt-5 py-2 px-4 rounded-lg hover:bg-[White] hover:border-2 hover:border-[#ff7a32] hover:text-black focus:outline-none">
                        See More
                    </button>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Cards