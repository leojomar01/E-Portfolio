// create animation div

let shape = 20;

for(var i=0;i<=shape;i++){
    let div = document.createElement('div');
    div.className="shape"+i;
    document.getElementById("BGanimation").appendChild(div);
}
for(var j=0;j<=shape;j++){
    let div = document.createElement('div');
    div.className="shape0"+j;
    document.getElementById("BGanimation").appendChild(div);
}


shape=30;

for(var x=0;x<=shape;x++){
    let div2 = document.createElement('div');
    div2.className="shape"+x;
    document.getElementById("BGanimation2").appendChild(div2);
}