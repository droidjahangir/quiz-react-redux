// const INTIAL_STATE = {
//     score: null,
// }

export default (state = 0, action) => {
    switch (action.type) {
        case 'SCORE':
            return  action.payload
        default:
            return state;
    }
}