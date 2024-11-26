const userinput = document.querySelector("#userinput");
var expression = "";

press = (num) =>{
    expression += num;
    userinput.value=expression;
}

equal =()=>{
    userinput.value = eval(expression);
    expression="";
}

erase = ()=>{
    expression="";
    userinput.value=expression;
}