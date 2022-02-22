import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGif } from './../hooks/useFetchGifs';
import { BallTriangle } from 'react-loader-spinner';


const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGif(category); 

    return (
        <>

            <h3 className='category-title'>{category}</h3>
            <hr />

            {loading && <BallTriangle
                heigth="200"
                width="200"
                color="#eee"
                ariaLabel="loading-indicator"
            /> }

            <div className='card-grid'>

                {
                    images.map(img => (

                        <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    ))
                }

            </div>
        </>

    )
}

export default GifGrid