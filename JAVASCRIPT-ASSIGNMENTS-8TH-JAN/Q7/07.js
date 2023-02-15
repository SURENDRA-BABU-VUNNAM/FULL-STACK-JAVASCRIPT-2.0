
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr =["pw-skills","ineuron",["pw-skills"],"pw-skills","pw-jee","pw-upsc"];

const newarr = sliceIntoChunks(arr,1)

let firstPostiton

for (let index = 0; index < newarr.length; index++) {
    if (newarr[index].lastIndexOf("pw-skills")==0) {
        firstPostiton = index
        break
    }
}

console.log(`The first postition is ${firstPostiton}`);

console.log(`the last postition is ${arr.lastIndexOf("pw-skills")}`);

