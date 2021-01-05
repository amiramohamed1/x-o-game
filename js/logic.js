//move
let counter=1;
$('#'+counter).toggleClass("active");
document.onkeydown=function(event)
{
    switch(event.which)
    {
        case 37: //left
         $('#'+counter).toggleClass("active");
         counter--;
         if(counter<1)
         {
             counter=1;
         }
         $('#'+counter).toggleClass("active");
         break;
         case 38: //up
          $('#'+counter).toggleClass("active");
          counter-=3;
          if(counter<1)
          {
              counter=1;
          }
          $('#'+counter).toggleClass("active");
          break;
          case 39: //right
            $('#'+counter).toggleClass("active");
            counter++;
            if(counter>9)
            {
                counter=1;
            }
            $('#'+counter).toggleClass("active");
         break;
         case 40: //down
            $('#'+counter).toggleClass("active"); 
            counter+=3;
            if(counter>9)
            {
                counter=1;
            }
            $('#'+counter).toggleClass("active");
         break;
    }
}

document.onkeypress=function(event)
{
    switch(event.keyCode)
    {
        case 120: //x
        case 88: 
        if($('#'+counter).text()=='')
        {
            $('#'+counter).append("X");
        }
        break;
        case 111: //o
        case 79:
        if($('#'+counter).text()=='')
        {
            $('#'+counter).append("O");
        }
        break;
    }
}

let check= setInterval(function()
{
    if(
       ($("#1").html()=="X" && $("#2").html()=="X" && $("#3").html()=="X") || 
       ($("#4").html()=="X" && $("#5").html()=="X" && $("#6").html()=="X") ||
       ($("#7").html()=="X" && $("#8").html()=="X" && $("#9").html()=="X") ||
       ($("#1").html()=="X" && $("#4").html()=="X" && $("#7").html()=="X") ||
       ($("#2").html()=="X" && $("#5").html()=="X" && $("#8").html()=="X") ||
       ($("#3").html()=="X" && $("#6").html()=="X" && $("#9").html()=="X")
       )
       {
            const plaryer1=document.getElementById("p1").value;
            document.getElementById("pw").innerHTML="Congratulation "+plaryer1+" win!!!!";
            document.getElementById("winner").style.display= "block";
            clearInterval(check);
       }
       else if(
        ($("#1").html()=="O" && $("#2").html()=="O" && $("#3").html()=="O") || 
        ($("#4").html()=="O" && $("#5").html()=="O" && $("#6").html()=="O") ||
        ($("#7").html()=="O" && $("#8").html()=="O" && $("#9").html()=="O") ||
        ($("#1").html()=="O" && $("#4").html()=="O" && $("#7").html()=="O") ||
        ($("#2").html()=="O" && $("#5").html()=="O" && $("#8").html()=="O") ||
        ($("#3").html()=="O" && $("#6").html()=="O" && $("#9").html()=="O")
       )
       {
        const plaryer2=document.getElementById("p2").value;
        document.getElementById("pw").innerHTML="Congratulation "+plaryer2+" win!!!!";
        document.getElementById("winner").style.display= "block";
        clearInterval(check);
       }
       else if(
         $("#1").html()!="" && $("#2").html()!="" && $("#3").html()!="" && 
         $("#4").html()!="" && $("#5").html()!="" && $("#6").html()!="" &&
         $("#7").html()!="" && $("#8").html()!="" && $("#9").html()!=""
       )
       {
         document.getElementById("pw").innerHTML="Sorry No one Win";
         document.getElementById("winner").style.display= "block";
         clearInterval(check);
       }
},1000)

