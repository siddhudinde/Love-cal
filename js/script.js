function display()
{


    var score = Math.ceil(Math.random()*100);
    
    var name = document.querySelectorAll("input")[0].value;
    var pname = document.querySelectorAll("input")[0].value;

    if(name === ""  &&   pname === "")
    {
        document.querySelectorAll("h1")[1].innerHTML=  "Please enter your name and your partner's name";
    }

    else
    {
        if(score<=25)
    {
      document.querySelectorAll("h1")[0].innerHTML = "ohhhh Hard Luck Dear";
      document.querySelectorAll("h1")[1].innerHTML = score ;

    }
    if(score>25 && score<=50)
    {
        document.querySelectorAll("h1")[0].innerHTML = "ohhhh so sad !!! INSTAL TINDER";
        document.querySelectorAll("h1")[1].innerHTML = score ;
  
    }
    if(score>50 && score<=75)
    {
        document.querySelectorAll("h1")[0].innerHTML = "ohhhh That's Great";
        document.querySelectorAll("h1")[1].innerHTML = score ;
  
    }
    if(score>75 && score<=100)
    {
        document.querySelectorAll("h1")[0].innerHTML = "SOULMATES";
        document.querySelectorAll("h1")[1].innerHTML = score ;
  
    }

    }
 
    
}

 

