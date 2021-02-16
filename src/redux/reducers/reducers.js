import { ADD_NOTE, REMOVE_NOTE } from "../actions/actions";

const initialState = {
  notes: []
};

const rootReducer = (state = initialState, action) => {
  const { type, title, content, id } = action;
  switch(type){
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {title, content}
        ]
      }
    
    case REMOVE_NOTE:
      return{
        ...state,
        notes: state.notes.filter((v, idx) => idx !== id)
      }

    default:
      return state;
  }
}

export default rootReducer;