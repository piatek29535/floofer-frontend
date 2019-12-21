export const userPostsReducers = (state = {
    userPostsFetching:false,
    userPosts:[],
    userPostsError:null
}, action) => {
    switch (action.type) {
        case 'FETCHING_USER_POSTS':
            return {
                userPostsFetching:action.payload,
                userPosts:[],
                userPostsError:null
            };
        case 'USER_POSTS_SUCCESS':
            return {
                userPostsFetching:false,
                userPosts:action.payload,
                userPostsError:null
            };
        case 'USER_POSTS_FAILURE':
            return {
                userPostsFetching:false,
                userPosts:[],
                userPostsError:action.payload
            };
        default:
            return state;
    }
};