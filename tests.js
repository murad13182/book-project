let n=100;
for(let i=1; i<=n; i++){
if(i%3==0 && i%5!=0){
    document.write('3');
}
else if(i%5==0 && i%3!=0){
    document.write('5');
}
else if((i%3==0) && (i%5==0)){
    document.write('35');
}
else{
    document.write('India');
}
}