
for (let index = 2; index <=100; index++) {
    if ( index == 2 || index==3 || index==5) {
    console.log(index);
} else if ((index-1)%6==0 || (index+1)%6==0) {
    console.log(index);
}
}