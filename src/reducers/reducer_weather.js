import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
  // same as:
  //  return state.concat([action.payload.data])
  }

  return state;
}
