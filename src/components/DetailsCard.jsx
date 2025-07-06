import React from 'react';

const DetailsCard = ({info}) => {
    const { image,estate_title,description,facilities}= info
    return (
        <div className=" border-2  p-5 rounded-lg border-primary  my-5">
            <img className="h-[70vh] w-full object-cover rounded-lg " src={image} alt="" />
            <h1 className="text-3xl font-bold my-5">{estate_title}</h1>
            <p>{description}</p>
            <div className=" mt-4">
                {
                    facilities.map(fav=> <span className="mr-5 ">#{fav}</span>)
                }
            </div>
        </div>
    );
};

export default DetailsCard;