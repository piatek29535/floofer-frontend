export const userFollowersAndFolloweReducers = (state = {
    followersFetching:false,
    followers:[],
    followersAmount:0,
    followee:[],
    followeeAmount:0,
    followersFetchError:null
}, action) => {
    switch (action.type) {
        case 'FETCHING_USER_FOLLOWERS':
            return {
                followersFetching:action.payload,
                followers:[],
                followersAmount:0,
                followee:[],
                followeeAmount:0,
                followersFetchError:null
            };
        case 'USER_FOLLOWERS_SUCCESS':
            return {
                followersFetching:false,
                followers:action.payload.followers,
                followersAmount:action.payload.followersAmount,
                followee:action.payload.following,
                followeeAmount:action.payload.followingAmount,
                followersFetchError:null
            };
        case 'USER_FOLLOWERS_ERROR':
            return {
                followersFetching:false,
                followers:[],
                followersAmount:0,
                followee:[],
                followeeAmount:0,
                followersFetchError:action.payload
            };
        default:
            return state;
    }
};