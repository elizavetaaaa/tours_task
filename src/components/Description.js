import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showExtraText} from "../redux/reducer/store";
import Programs from "./Programs";


const Description = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.store.data);
    const hidden = useSelector(state => state.store.hidden);


    //console.log("это тело" + {data.body})

    return (
        <div className="description">
            <div className="description__main-content">

                <div className="description__text-div">
                    <p className="description__main-text">
                        {data.body}

                    </p>
                </div>
            </div>
            <div className="description__extra-content">
                <h3 className="programs__title">Что мы предлагаем? </h3>

                <p className="description__main-text">
                    {data.included}
                    <button className="description__btn"
                            onClick={() => dispatch(showExtraText())}>{hidden ? 'скрыть' : 'подробнее   '}</button>

                </p>

            </div>

            <div className="description__extra-content" style={{display: hidden ? 'block' : 'none'}}>
                <h3 className="programs__title"> А также...! </h3>

                <p className="description__main-text">
                    {data.excluded}
                </p>

            </div>
            <Programs/>
        </div>
    );
};

export default Description;