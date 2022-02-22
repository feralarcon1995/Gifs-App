import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import Footer from './components/Footer';
import GifGrid from './components/GifGrid';

const GifApp = () => {

    const [categories, setCategories] = useState(['THE SIMPSONS']);

    return (

        <>
            <header className='app-header'>

                <h2 >Gif App</h2>

                <AddCategory setCategories={ setCategories } />

            </header>

            <div className='app-main'>
              
                    {
                        categories.map(category => (

                            <GifGrid 
                            key={ category }
                            category={ category }/>

                    ))
                    }
               
            </div>
            <Footer />


        </>



    )
}

export default GifApp;