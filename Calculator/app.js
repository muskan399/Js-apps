console.log("JS Script")
function getOutput() {
    return document.getElementById('output-val').innerText;
}
function getHistory(){
    return document.getElementById('history-val').innerText;
}
function printHistory(num) {
    console.log("Printing")
    document.getElementById('history-val').innerText=num;
}
function printOutput(num){
    document.getElementById('output-val').innerText=num;
}

var operator=document.getElementsByClassName('operator')
for(var i=0;i<operator.length;i++){
    console.log("KK")
    operator[i].addEventListener('click',function(){
        var history=getHistory();
        console.log(history);
        if(this.id=="clear"){
            console.log("Muskan")
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace")
        {
            console.log("BACK SPACE");
            var output=getOutput().toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
                printHistory(output);
            }
        }
        else if(this.id=="="){
            var result=eval(history)
            printOutput(result);
            printHistory(result)
        }
        else
        {
            if(history!=NaN){
                history=history+this.id;
                printHistory(history);
            }
        }

    })
}
var digits=document.getElementsByClassName('number');
for(var i=0;i<digits.length;i++)
{
        digits[i].addEventListener('click',function (){
           
            var history=getHistory();
            console.log(history);
            if(history!=NaN){
                history=history+this.id;
                printHistory(history);
            }
    })
}
