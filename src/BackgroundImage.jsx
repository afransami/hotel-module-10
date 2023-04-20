import React from 'react';

const BackgroundImage = () => {
    return (
        <div className='relative'>
            <img
        className="bg-cover rounded absolute h-64 w-full"
        src="/public/hotel2.jpg"
        alt=""
      />
        </div>
    );
};

export default BackgroundImage;