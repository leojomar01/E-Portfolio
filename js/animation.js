// create animation div

let shape = 50;

for(var i=0;i<shape;i++){
    let div = document.createElement('div');
    div.className="shape"+i;
    document.getElementById("BGanimation").appendChild(div);
}