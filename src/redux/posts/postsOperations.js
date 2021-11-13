import axios from 'axios';
import { fetchPostsStart, fetchPostsSuccess, fetchPostsError} from './postsActions';

export const fetchPosts = () => dispatch => {
    dispatch(fetchPostsStart());
    axios
        .get('http://localhost:8086/posts')
        .then(response => {
            dispatch(fetchPostsSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchPostsError(error));
        })
};