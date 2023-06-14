// export const logger = (store) => {
//     console.log(store)
//     return (next) => {
//         console.log('next', next);
//         return (action) => {
//             console.log('action', action);
//             return next(action);
//         }
//     }
// }

// export const logger = (store) => (next) => (action) => {
//     console.log('action', action);
//     console.log('before', store.getState())
//     const res = next(action);
//     console.log('after', store.getState())
//     return res;
// }

export const delay = () => (next) => (action) => {
    const delayMS = action.meta?.delayMS
    if (delayMS) {
        const timeoutID = setTimeout(() => next(action), delayMS);
        return () => {
            console.log('======> Canceled');
            clearTimeout(timeoutID);
        }
    }
    return next(action)
}
