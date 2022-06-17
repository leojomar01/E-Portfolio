// create animation div
let addBtn = document.getElementById('addShapeBtn');


let shape = 20;
let k=0;
function addShape(x){
    shape=shape+x;
    for(var i=k;i<shape;i++){
        let div = document.createElement('div');
        div.className="shape"+i;
        div.addEventListener('click',()=>{
            div.style.width="0";
            div.style.background="black";
            addBtn.style.visibility ="visible";
        });
        document.getElementById("BGanimation").appendChild(div);
    }
    console.log(shape,j)
    for(var j=k;j<shape;j++){
        let div = document.createElement('div');
        div.className="shape0"+j;
        div.addEventListener('click',()=>{
            div.style.height="0";
            div.style.background="black";

        });
        document.getElementById("BGanimation").appendChild(div);
    }
    k=shape;
    if(shape>=50){
       addBtn.innerHTML="max reach";
       addBtn.disabled=true;
       addBtn.style.color="red";

    }

}
addShape(0);


let shape2=30;

for(var x=0;x<=shape2;x++){
    let div2 = document.createElement('div');
    div2.className="shape"+x;
    document.getElementById("BGanimation2").appendChild(div2);
}

