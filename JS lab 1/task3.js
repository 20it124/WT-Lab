var color=new Array(6);
color[0]="green";
color[1]="black";
color[2]="#99CCFF";
color[3]="yellow";
color[4]="pink";
color[5]="orange";

function Change_col()
{
var randNum= Math.floor(Math.random()*6);
document.body.style.backgroundColor=color[randNum];
}