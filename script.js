mainList=[]; 
function initialize(){
    list = document.getElementById("main");
    let item = document.getElementById("itemBox");
    numBox = document.getElementById(numberBox.value);
// use numberBox.value to retrieve value //
}

function display(){
    list.innerHTML="";
    for (let i=0;i<mainList.length;i++){
        list.innerHTML += "<li>" +mainList[i] +"</li>";
    }
}

function del(){
    number = parseInt(numberBox.value);
if(mainList.length>0){
    mainList.splice(number-1,1);
}
display();
}

function add(){
    if (itemBox.value===""){
    alert('Enter something.');
    }
    else{
    let canContinue =true;
    if (!(mainList.length===0)){
    for (let i=0;i<mainList.length;i++){
        if(itemBox.value===mainList[i]){
            canContinue=false;
        }
    }
}
    if (canContinue){
        mainList.push(itemBox.value);
        display();
    }
    else{
        alert('No duplicates.');
    }
    }


}

function up(){
    replacement = mainList[0];
    mainList.splice(0,1);
    mainList.push(replacement);
    display();
}

function down(){
replacement = mainList.pop();
mainList.unshift(replacement);
display();
}
