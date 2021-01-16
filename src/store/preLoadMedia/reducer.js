import {PRE_LOAD_CATS, PRE_LOAD_INSTRUMENTS} from "./actions";

const initialState = {
    catsPreLoaded : false,
    instrumentsPreLoaded: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PRE_LOAD_CATS :
            return {
                catsPreLoaded: true,
                instrumentsPreLoaded: state.instrumentsPreLoaded,
            }

        case PRE_LOAD_INSTRUMENTS: {
            return  {
                catsPreLoaded: state.catsPreLoaded,
                instrumentsPreLoaded: true,
            }
        }

        default:
            return state;
    }
};