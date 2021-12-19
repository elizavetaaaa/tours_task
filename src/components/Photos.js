import React from 'react';
import Fancybox from "./Fancybox";
import {useSelector} from "react-redux";

const Photos = () => {
    const data = useSelector(state => state.store.data.photos);
    return (
        <div className="photos">
            <div className="container">
                <h2>Здесь будут фото тура</h2>
                {data.map((el, idx)=>{
                    return <img src={el.image} alt="image" key={el.id}/>;
                })}
            </div>
        </div>
    );
};

export default Photos;