import React from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import {useSelector} from "react-redux";

const Fancybox = () => {

    const data = useSelector(state => state.store.data);
    //
    // const image1 = data.photos[0].image;
    // const image2 = data.photos[1].image;
    // const image3 = data.photos[2].image;
    // console.log("im1" + image1);
    return (
        <div className="fancybox">
            <ReactFancyBox
                thumbnail="https://loremflickr.com/320/240"
                image="https://www.w3schools.com/howto/img_forest.jpg"/>


            <ReactFancyBox
                thumbnail="https://loremflickr.com/320/240"
                image="https://www.w3schools.com/howto/img_forest.jpg"/>

             <ReactFancyBox
                thumbnail="https://loremflickr.com/320/240"
                image="https://www.w3schools.com/howto/img_forest.jpg"/>


        </div>
    );
};

export default Fancybox;