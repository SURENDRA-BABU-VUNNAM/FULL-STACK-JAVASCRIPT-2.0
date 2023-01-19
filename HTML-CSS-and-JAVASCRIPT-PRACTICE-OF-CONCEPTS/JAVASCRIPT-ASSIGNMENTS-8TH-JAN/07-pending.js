
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr =["ineuron","pw-skills","pw-neet","pw-jee","pw-skills","pw-upsc"];

const newarr = sliceIntoChunks(arr,1)

// for (const iterator of newarr) {
//     for (let x of iterator) {

//     }
// }

