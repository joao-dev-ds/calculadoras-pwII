function Calcula(op)
 {

    let resu=0;
    let n1=document.getElementById("txtn1").value;
    let n2=document.getElementById("txtn2").value;
    
    if(isNaN(n1))
    {
        alert("Para de ser burro, o 1° valor tem que ser numero!!!!!");
        document.getElementById("txtn1").value="";    
        document.getElementById("txtn1").focus();
    }
    else if(isNaN(n2))
    {
        alert("Para de ser burro, o 2° valor também tem que ser numero!!!!!");
        document.getElementById("txtn2").value="";    
        document.getElementById("txtn2").focus();
    }
    else
    {
        n1=parseFloat(n1);
        n2=parseFloat(n2);
        if(op=="+")
            resu=n1+n2;
        else if(op=="-")
            resu=n1-n2;
        else if(op=="x")
            resu=n1*n2;
        else if(n2!=0)
            resu=n1/n2;
        else
        {
            alert("Divisão por zero!");
            document.getElementById("txtn2").value="";  
            document.getElementById("txtn2").focus();
            return;
        }
        document.getElementById("txtresu").value=resu.toFixed(2);
    }
 }

 function Limpar()
 {
     document.getElementById("txtn1").focus();
 }