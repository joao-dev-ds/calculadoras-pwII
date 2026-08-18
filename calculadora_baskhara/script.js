function Calcular() {
    var va = document.getElementById("a").value;
    var vb = document.getElementById("b").value;
    var vc = document.getElementById("c").value;
    var delta, vx1, vx2;

    if ((isNaN(va)) || (va === "") || (va == 0)) 
        {
        window.alert("O 1° termo não pode ser vazio, zero ou caracter");
        document.getElementById("a").value = "";
        document.getElementById("d").value = "";
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("a").focus();
    }
    else if ((isNaN(vb)) || (vb === "")) 
        {
        window.alert("O 2° termo não pode ser vazio ou caracter");
        document.getElementById("b").value = "";
        document.getElementById("d").value = "";
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("b").focus();
    }
    else if ((isNaN(vc)) || (vc === "")) 
        {
        window.alert("O 3° termo não pode ser vazio ou caracter");
        document.getElementById("c").value = "";
        document.getElementById("d").value = "";
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("c").focus();
    }
    else 
        {
        va = parseFloat(va);
        vb = parseFloat(vb);
        vc = parseFloat(vc);
        delta = Math.pow(vb, 2) - 4 * va * vc;
        document.getElementById("d").value = delta;

        if (delta < 0) 
            {
            window.alert("o delta é negativo, não existem raízes reais!");
            document.getElementById("x1").style.width = "25%";
            document.getElementById("x2").style.width = "25%";
            document.getElementById("x1").style.backgroundColor = "rgba(105, 4, 4, 0.46)";
            document.getElementById("x2").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("x1").value = "Não existem raízes reais!";
            document.getElementById("x2").value = "Não existem raízes reais!";
        }
        else 
            {
            vx1 = (-vb + Math.sqrt(delta)) / (2 * va);
            vx2 = (-vb - Math.sqrt(delta)) / (2 * va);
            document.getElementById("x1").style.width = "8%";
            document.getElementById("x2").style.width = "8%";
            document.getElementById("x1").style.backgroundColor = "rgb(247, 0, 0)";
            document.getElementById("x2").style.backgroundColor = "rgb(255, 0, 0)";
            document.getElementById("x1").value = vx1.toFixed(2);
            document.getElementById("x2").value = vx2.toFixed(2);
        }
    }
}

function Limpar() 
{
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("a").focus();
    document.getElementById("x1").style.width = "8%";
    document.getElementById("x2").style.width = "8%";
    document.getElementById("x1").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("x2").style.backgroundColor = "rgb(255, 255, 255)";
}