var ran=document.querySelector(".ran");
var vals=document.querySelector(".vals");
var con=document.querySelector(".display");
ran.addEventListener("input",values);
function values() {
vals.innerHTML=ran.value;    
if(ran.value=="0") {
con.style.background="#000000";
con.innerText="#000000";
}
else if(ran.value=="6.25"){
con.style.background="#C0C0C0";    
con.innerText="#C0C0C0";
}
else if(ran.value=="12.5"){
con.style.background="#808080";    
con.innerText="#808080";
}
else if(ran.value=="18.75"){
con.style.background="#FFFFFF";    
con.innerText="#FFFFFF";
}
else if(ran.value=="25"){
con.style.background="#800000";    
con.innerText="#800000";
}
else if(ran.value=="31.25"){
con.style.background="#FF0000";    
con.innerText="#FF0000";
}
else if(ran.value=="37.5"){
con.style.background="#800080";   
con.innerText="#800080";
}
else if(ran.value=="43.75"){
con.style.background="#FF00FF";    
con.innerText="#FF00FF";
}
else if(ran.value=="50"){
con.style.background="#008000";   
con.innerText="#008000";
}
else if(ran.value=="56.25"){
con.style.background="#008100";    
con.innerText="#008100";
}
else if(ran.value=="62.5"){
con.style.background="#008000";    
con.innerText="#008000";
}
else if(ran.value=="68.75"){
con.style.background="#00FF00";    
con.innerText="#00FF00";
}
else if(ran.value=="75"){
con.style.background="#808000";    
con.innerText="#808000";
}
else if(ran.value=="81.25"){
con.style.background="#FFFF00";    
con.innerText="#FFFF00";
}
else if(ran.value=="87.5"){
con.style.background="#000080";    
con.innerText="#000080";
}
else if(ran.value=="93.75"){
con.style.background="#00FFFF";    
con.innerText="#00FFFF";
}
else if(ran.value=="100"){
con.style.background="#000FFF";    
con.innerText="#000FFF";
}
}


