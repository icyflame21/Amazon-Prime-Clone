export const IS_AUTH = 'IS_AUTH';
export const isAuth = (payload) =>{
    return {
        type:IS_AUTH,
        payload
    }
}