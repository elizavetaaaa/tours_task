import React from 'react';
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import {showProgramInfo} from "../redux/reducer/store";
import {useSelector, useDispatch} from "react-redux";


const Program = ({info}) => {
    const programInfo = useSelector(state => state.store.programInfo);
    const dispatch = useDispatch();
    return (
        <div className="program" onClick={() => dispatch(showProgramInfo(info.id))}>

            <div className="program__visible-content">
                <p className="program__title"><span>День {info.day}:</span>{info.name}</p>
                <button className="program__btn" >{info.isExpended ? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
                </button>
            </div>


            <div className="program__hidden-content" style={{display: info.isExpended ? 'block' : 'none'}}>
                <p><span>Размещение:</span>{info.placement}</p>
                <p><span>Что включено:</span>{info.nutrition}</p>
                <p className="program__hidden-text">{info.body}</p>
            </div>

        </div>
    );
};

export default Program;