// JavaScript Document

function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("tab_"+name+"_"+i);
menu.className=i==cursel?"current":"";
con.style.display=i==cursel?"block":"none";
}
}

