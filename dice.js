
function roll()
{
    var bet=document.getElementById("bet");
    var coins=document.getElementById("coins");
    var check=bet.value!="" && selection();
     if(check)
    {
       if(coins.value!=0 && parseInt(bet.value)<=parseInt(coins.value) && parseInt(bet.value)!=0 )
       {
            var checked=selection();
            var diceRoll=dicetotal();
            
            if(checked<=6)
            {
                if(diceRoll<=checked)
                {
                    document.getElementById("coins").value=+coins.value + +bet.value;
                    document.getElementById("status").innerHTML="You WON the game"+"<br>"+bet.value +" "+"coins Added to your score Bin";
                    
                }
                else{
                    document.getElementById("coins").value=+coins.value - +bet.value;
                    document.getElementById("status").innerHTML="You LOST the game"+"<br> "+bet.value +" "+"coins deducted from your score Bin";
                    
                }
            }
            else if(checked>=8)
            {
                if(diceRoll>=checked)
                {
                    document.getElementById("coins").value=+coins.value + +bet.value;
                    document.getElementById("status").innerHTML="You WON the game"+"<br> "+bet.value +" "+"coins Added to your score Bin";
                }
                else{
                    document.getElementById("coins").value=+coins.value - +bet.value;
                    document.getElementById("status").innerHTML="You LOST the game"+"<br> "+bet.value +" "+"coins deducted from your score Bin";
                    
                }
            }
            else if(checked==7)
            {
                if(diceRoll==checked)
                {
                    document.getElementById("coins").value=+coins.value + +(bet.value *5);
                    document.getElementById("status").innerHTML="You WON the game"+"<br> "+bet.value *5 +" "+"coins Added to your score Bin";
                }
                else{
                    document.getElementById("coins").value=+coins.value - +bet.value;
                    document.getElementById("status").innerHTML="You LOST the game"+"<br> "+bet.value +" "+"coins deducted from your score Bin";
                   
                }
            }
            
        }

        else if(parseInt(bet.value)>=parseInt(coins.value) && parseInt(coins.value)!=0)
        {
            alert("You dont have sufficent coins in your bin,For rolling a Dice .Available coins are :"+coins.value +" "+"coin(s)");

        }
        else if(parseInt(bet.value)==0)
        {
            alert("please check the Bet")
        }
        else{
            alert("Your Bin is having 0 coins . Play again");
            document.getElementById("playagain").style.display="block";
        }
    }   
   
}
    function selection()
    {
        var rd_btns = document.getElementsByName('flexRadioDefault');
        var selected_rdbtn;
        for(var i = 0; i < rd_btns.length; i++)
        {
            if(rd_btns[i].checked)
            {
                selected_rdbtn= rd_btns[i].value;
                return selected_rdbtn;
            }
        }
    }

    function dicetotal()
    {
    
        var d1=Math.floor(Math.random()*6)+1;
        var d2=Math.floor(Math.random()*6)+1;
        document.getElementById("dice1").src="dice/"+ d1 +".png"; 
        document.getElementById("dice2").src="dice/"+ d2 +".png";
        var x=+d1 + +d2;
        document.getElementById("dice3").src="images/"+ x +".png";
        document.getElementById("res").style.display="block"
        
        return x;
    }

    function btn(){

        var bet=document.getElementById("bet");
        bet.value="";
        
    }
    function playagain()
    {
       
        window.location.reload();
        document.getElementById("playagain").style.display="none";
        
    }