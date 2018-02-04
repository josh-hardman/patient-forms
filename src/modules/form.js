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
        form: { data: 'it arrived!' },
        isFetching: !state.isFetching
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: FORM_DATA_REQUESTED
    })

    dispatch({
      type: FORM_DATA
    })
  }
}

export const fetchFormData = () => {
  return dispatch => {
    dispatch({
      type: FORM_DATA_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: FORM_DATA
      })
    }, 3000)
  }
}
