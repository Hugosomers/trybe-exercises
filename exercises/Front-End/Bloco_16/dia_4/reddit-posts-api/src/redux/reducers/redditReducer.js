import { REQUESTING_API } from "../actions/redditHandle";
import { REQUEST_SUCCESS} from "../actions/redditHandle";
import { REQUEST_FAILED } from "../actions/redditHandle";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: '',
}

const redditReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUESTING_API:
      return {
        ...state,
        loading: true,
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload.data.children,
        loading: false,
      }
    case REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default redditReducer;
