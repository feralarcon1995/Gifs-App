import React from 'react'

const GifGridItem = ({ id, title, url }) => {


    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <img src={url} alt={title}/>
            <h3>{title}</h3>
        </div>
    )
}

export default GifGridItem