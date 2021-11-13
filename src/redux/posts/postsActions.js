export const ActionType = {
    FETCH_POSTS_START: 'FETCH_POSTS_START',
    FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
    CHANGE_TAG: 'CHANGE_TAG',
    DELETE_POSTS: 'DELETE_POSTS',
};

export const fetchPostsStart = () => ({
    type: ActionType.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
    type: ActionType.FETCH_POSTS_SUCCESS,
    payload: {
        posts,
    },
});

export const fetchPostsError = error => ({
    type: ActionType.FETCH_POSTS_ERROR,
    payload: {
        error,
    },
});

export const deletePosts = id => ({
    type: ActionType.DELETE_POSTS,
    payload: id,
});

export const changeTag = tag => ({
    type: ActionType.CHANGE_TAG,
    payload: tag,
});