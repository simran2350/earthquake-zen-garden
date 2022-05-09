export const getDate = (time) => {
    const date = new Date(time).toDateString();
    const timeStamp = new Date(time).toLocaleTimeString();
    return date + ', ' + timeStamp;
};