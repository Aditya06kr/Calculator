var inp=document.getElementById('inp');
var btn=document.getElementsByClassName('same');

var str="";

for(var i=0;i<btn.length;++i){
    btn[i].addEventListener('click',(e)=>{
        var val=e.target.innerHTML;
        if(val=='C'){
            inp.value="";
            str="";
        }
        else if(val=='='){
            str=eval(str);
            inp.value=str;
        }
        else{
            if(val=='X') val='*';
            str+=val;
            inp.value=str;
            console.log(inp);
        }
    });
}