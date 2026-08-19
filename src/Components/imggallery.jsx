import React from 'react'
import dark from "../assets/dark.jpg"

const Imggallery = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-4  gap-2'>
                <img src={dark} alt="" className='col-span-2  row-span-2'/>
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
                <img src={dark} alt="" />
            </div>
        </div>
    )
}

export default Imggallery