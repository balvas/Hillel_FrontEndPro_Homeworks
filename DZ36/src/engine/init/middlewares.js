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
