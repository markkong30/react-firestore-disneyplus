import React, { useEffect } from "react";
import ImgSlider from "./imgSlider";
import Viewers from "./viewers";
import Recommend from "./recommend";
import NewDisney from "./newDisney";
import Originals from "./originals"
import Trending from "./trending";
import db from "../../firebase";
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from "../../features/movieSlice";
import { selectUsername } from '../../features/userSlice';
import { collection, getDocs } from "firebase/firestore";

import './home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUsername);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        getDocs(collection(db, "movies"))
            .then((querySnapshot) => {
                querySnapshot.docs.map(doc => {
                    switch (doc.data().type) {
                        case 'recommend':
                            recommends = [...recommends, { id: doc.id, ...doc.data() }]
                            break;
                        case 'new':
                            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                            break;
                        case 'original':
                            originals = [...originals, { id: doc.id, ...doc.data() }]
                            break;
                        case 'trending':
                            trending = [...trending, { id: doc.id, ...doc.data() }]
                            break;

                        default:
                            break;

                    }
                })
            })
            .then(() => {
                console.log(recommends)
                dispatch(
                    setMovies({
                        recommend: recommends,
                        newDisney: newDisneys,
                        original: originals,
                        trending: trending,
                    })
                )
            })

    }, [userName]);

    return (
        <div id="home">
            <ImgSlider />
            <Viewers />
            <Recommend />
            <NewDisney />
            <Originals />
            <Trending />
        </div>

    )
}


export default Home;