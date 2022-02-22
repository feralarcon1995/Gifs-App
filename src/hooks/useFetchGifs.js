
import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGif(category)
            .then(imgs => {

                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    });

            }, 3000);
    }


    )


}, [])

//   setTimeout(() => {

//     setState({
//         data:[1,2,3,4,5,6,7],
//         loading: false
//     })

//   },3000)

return state;

}