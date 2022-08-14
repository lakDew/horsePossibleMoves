for(let a=0;a<8;a++){
    let borad=document.querySelector('.board');
         
    for(let b=0;b<8;b++){
       let node=document.createElement('div');
       node.classList.add(a,'node')
        node.id=b;
        
        if((a+b)%2==0){
            node.classList.add('black')
        }
        else{
            node.classList.add('white')
        }
        borad.appendChild(node)
    }
   
}
let allNode=document.querySelectorAll('.node');

for(let a=0;a<allNode.length;a++){

    allNode[a].addEventListener('click',fun)
}

function fun(e){
    for(let a=0;a<allNode.length;a++){

        allNode[a].classList.remove('active');
    }
    this.classList.add('active');
    let currentId= this.id;
    let currentClass=this.classList[0];
    let possible=reach(currentClass,currentId);
    possibleNodes(possible);

}

function possibleNodes(nodes){
    for(let a=0;a<allNode.length;a++){

        allNode[a].classList.remove('possible');
    }

    for(let a=0;a<nodes.length;a++){
        nodes[a].classList.add('possible');
    }
}

function reach(currentClass,currentId){
    let possible=[];
    if(Number(currentClass)-2>=0){
        let current=Number(currentClass)-2;
        let nodes=document.getElementsByClassName(current);
        if(Number(currentId)-1>=0){
        possible.push(nodes[Number(currentId)-1])
        }
        if(Number(currentId)+1<=7){
        possible.push(nodes[Number(currentId)+1]);
        }
    }
    if(Number(currentClass)+2<=7){
        let current=Number(currentClass)+2;
        let nodes=document.getElementsByClassName(current);
        if(Number(currentId)-1>=0){
        possible.push(nodes[Number(currentId)-1])
        }
        if(Number(currentId)+1<=7){
        possible.push(nodes[Number(currentId)+1]);
        }
    }
    if(Number(currentClass)-1>=0){
        let current=Number(currentClass)-1;
        let nodes=document.getElementsByClassName(current);
        if(Number(currentId)-2>=0){
        possible.push(nodes[Number(currentId)-2])
        }
        if(Number(currentId)+2<=7){
        possible.push(nodes[Number(currentId)+2]);
        }
    }

    if(Number(currentClass)+1<=7){
        let current=Number(currentClass)+1;
        let nodes=document.getElementsByClassName(current);
        if(Number(currentId)-2>=0){
        possible.push(nodes[Number(currentId)-2])
        }
        if(Number(currentId)+2<=7){
        possible.push(nodes[Number(currentId)+2]);
        }
    }

    
   
    return possible;
};


