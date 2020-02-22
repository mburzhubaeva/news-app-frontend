import axios from '../axios-api';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});

export const fetchPosts = () => {
  return dispatch => {
    return axios.get('/posts').then(response => dispatch(fetchPostsSuccess(response.data)));
  };
};

export const fetchPost = PostId => {
  return dispatch => {
    return axios.get('/posts' + postId).then(response => dispatch(fetchPostSuccess(response.data)));
  };
};

export const fetchComments = postId => {
  return dispatch => {
    return axios.get('/comments?post_id' + postId).then(response => dispatch(fetchCommentsSuccess(response.data)));
  }
};