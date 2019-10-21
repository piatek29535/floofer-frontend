export function newsDialogPostOpen(post){
    return ({
        type:'OPEN_POST_DIALOG',
        payload:{isOpened:true, post}
    })
}
export function newsDialogPostClose(){
    return ({
        type:'CLOSE_POST_DIALOG',
        payload:false
    })
}