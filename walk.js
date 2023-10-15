import{boston} from "./boston.js";
var boston1=boston.data
var elem=" ";
for(let i=0;i<boston1.length;i++){
    for(let j=i+1;j<boston1.length;j++){
        if(boston1[i][11]<boston1[j][11]){
            let temp=boston1[i];
            boston1[i]=boston1[j]
            boston1[j]=temp
        }
        }}
        var slice=boston1.slice(0,5);
for( let i=0;i<5;i++){
elem=elem + "<h1>"+ slice[i][8]+"</h1>" + "<h1>"+ slice[i][11] + "</h1>"
}
document.getElementById("app").innerHTML=elem;