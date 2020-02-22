import {FETCH_COMMENTS_SUCCESS, FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS} from "./actions";

const initialState = {
  posts: [],
  post: null,
  comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: action.posts};
    case FETCH_POST_SUCCESS:
      return {...state, post: action.post};
    case FETCH_COMMENTS_SUCCESS:
      return {...state, comments: action.comments};
    default:
      return state;
  }
};

export default reducer;