import axios from "axios";

const GET_DATA = 'GET_DATA';
const CHANGE_PROGRAM = 'CHANGE_PROGRAM';
const SHOW_EXTRA_TEXT = 'SHOW_EXTRA_TEXT';
const SHOW_PROGRAM_INFO = 'SHOW_PROGRAM_INFO';

const initialState = {
    data: [],
    myData: [],
    hidden: false,
    showSpan: false,
    programInfo: false,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state, data: action.data
            }
        }
        case SHOW_EXTRA_TEXT: {
            return {
                ...state, hidden: !state.hidden
            }
        }
        case SHOW_PROGRAM_INFO: {
            return {
                ...state,
                myData: state.myData.map((el) => el.id === action.id
                    ?
                    {...el, isExpended: !el.isExpended}
                    :
                    el)

            }
        }


        case CHANGE_PROGRAM: {
            return {
                ...state,
                showSpan: !state.showSpan,
                myData: state.data.programs?.map(v => ({...v, isExpended: false}))

            }
        }
        default :
            return state
    }
}


export const getData = () => {
    return (dispatch) => {
        axios("https://erzhan.pythonanywhere.com/api/v1/tours/4/?format=json")
            .then(({data}) => {
                return dispatch({type: GET_DATA, data: data})
            })
    }
};

export const changeProgram = () => ({
    type: CHANGE_PROGRAM
});

export const showExtraText = () => ({
    type: SHOW_EXTRA_TEXT
});

export const showProgramInfo = (id) => ({
    type: SHOW_PROGRAM_INFO,
    id

});
