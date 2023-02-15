function fileExtension(fileName) {
    let extt =fileName.split(`.`)
    console.log(extt[1]);
}

fileExtension(`name.txt`)