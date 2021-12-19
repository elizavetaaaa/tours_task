import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeProgram, getData} from "../redux/reducer/store";
import Description from "./Description";
import DatesAndPrices from "./DatesAndPrices";
import Photos from "./Photos";
import Commets from "./Commets";
import {Routes, Route, Link} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const myData = useSelector(state => state.store.myData)
    const data = useSelector(state => state.store.data);
    const pr = useSelector(state => state.store.data.programs);

    useEffect(() => {
        dispatch(getData());
        console.log("hello use effect" + myData.length)
    }, []);


    return (
        <div className="header">
            <nav className="header__nav">
                <div className="container">
                    <ul className="header__ul">
                        <li><Link to='/' className="li">Описание</Link></li>
                        <li><Link to='/datesandprices' className="li">Дата и цены</Link></li>
                        <li><Link to='/photos' className="li">Фотографии</Link></li>
                        <li><Link to='/comments' className="li">Отзывы</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="header__header-divs">
                    <div className="header__half">
                        <img src="https://kalpak-travel.com/wp-content/uploads/2019/06/best-central-asia-tour-map.png"
                             alt="asia"
                             className="description__img"/>
                    </div>

                    <div className="header__half">
                        <h1 className="header__title">{data.name}</h1>
                        <p className="header__subtitle"><span>14 дней |</span> Казахстан, Кыргызстан, Узбекистан,
                            Туркменистан,
                            Таджикистан</p>
                        {/*<button onClick={() => dispatch(changeProgram())}>change</button>*/}


                    </div>
                </div>

                <Routes>
                    <Route exact path="/" element={<Description/>}/>
                    <Route path="/datesandprices" element={<DatesAndPrices/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                    <Route path="/comments" element={<Commets/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Header;