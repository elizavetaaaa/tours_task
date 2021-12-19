import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Program from "./Program";
import {changeProgram, showProgramInfo} from "../redux/reducer/store";

const Programs = () => {
    const dispatch = useDispatch();
    const info = useSelector(state => state.store.data.programs);
    const myData = useSelector(state => state.store.myData);

    //                myData: state.data.map(v => ({...v, isExpended: false}))
    const accomodation = useSelector(state => state.store.data.accommodation);

    const programInfo = useSelector(state => state.store.data.programInfo);

    const showSpan = useSelector(state => state.store.showSpan);

    return (

        <div className="programs">
            <div className="container programs__2parts">

                <div className="program__program-part">
                    <h3 className="programs__title">Программа тура : </h3>
                    <p>Если Вы хотите узнать о туре подробнее, то в этом разделе вы можете более детально ознакомиться с программой тура, ежедневным расписанием, а
                        также тем, что предоставляется клиентам со стороны компании в течении тура</p>

                    <p className="programs__getInfo-btn" onClick={() => dispatch(changeProgram())}>Ознакомиться с
                        программой </p>

                    {/*<span style={{display : showSpan ? "block" : "none"}} className="programs__show-all" onClick={() => dispatch(showProgramInfo())}>{programInfo ? 'скрыть все' : 'показать все'}</span>*/}




                    {myData?.map((el) => {
                        return <Program key={Math.random()} info={el}/>
                    })}
                </div>

                <div className="programs__accomodation-part">
                    <h3 className="programs__title">Проживание</h3>
                    <ul className="programs__acc-ul">
                        {accomodation?.map((el) => {
                            return el.location.match(2) ?
                                <li><span>{el.location}</span><p>{el.body}</p></li>
                                : el.night === 1 ?
                                    <li><span>{el.location}</span>{el.night} ночь <p>{el.body}</p></li>
                                    : <li><span>{el.location}</span>{el.night} ночи <p> {el.body}</p></li>
                        })}
                    </ul>


                </div>
            </div>


        </div>
    );
};

export default Programs;