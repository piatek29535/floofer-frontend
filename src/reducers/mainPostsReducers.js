export const fetchPosts = (state = {
    postsFetching:true,
    postsFetched:[],
    postsError:null
}, action) => {
    switch(action.type){
        case 'POSTS_FETCHING':{
            return {postsFetching:action.payload, postsError: null, ...state}
        }
        case 'POSTS_FETCHED':{
            return {postsFetching: false, postsFetched: action.payload, postsError: null}
        }
        case 'POSTS_FETCH_ERROR':{
            return {postsFetching: false, postsFetched: [], postsError: action.payload}
        }
        default:
            return state;
    }
};

export const toggleDialog = (state = {
    isDialogOpened:false
}, action) => {
  switch (action.type) {
      case 'TOGGLE_ON':
          return {isDialogOpened: action.payload};
      case 'TOGGLE_OFF':
          return {isDialogOpened: action.payload};
      default:
          return state;
  }
};