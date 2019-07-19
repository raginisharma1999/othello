

function play()
{
  var p1=window.prompt("enter name of player1");
    var p2=prompt("enter name of player2","player2");
    if(p1!=NULL)
    document.getElementById("a").innerHTML=p1;
     else
    alert("wrong input");
    document.getElementById("c").innerHTML="Vrs.";
        document.getElementById("b").innerHTML=p2;

}
