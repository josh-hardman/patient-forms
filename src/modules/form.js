import fire from '../fire'

const firebase = fire.database()

export const FORM_DATA_REQUESTED = 'counter/FORM_DATA_REQUESTED'
export const FORM_DATA = 'counter/FORM_DATA'

const initialState = {
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true
      }

    case FORM_DATA:
      return {
        ...state,
        ...action.data,
        isFetching: !state.isFetching
      }

    default:
      return state
  }
}

export const fetchFormData = (practice, formType) => {
  return dispatch => {
    dispatch({
      type: FORM_DATA_REQUESTED
    })

    return firebase
      .ref('forms')
      .orderByChild('practice')
      .equalTo(practice)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val().filter(i => i.type === formType)[0]
        return dispatch({
          type: FORM_DATA,
          data
        })
      })
  }
}
