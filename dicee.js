$(".btn").click(function(){
    var randomnum1 = Math.floor((Math.random()*6)+1);

    var randomimg = "dice" + randomnum1 + ".png";
    
    var randomimgsrc = "images/" + randomimg;
    
    var image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src" , randomimgsrc);
    
    
    
    var randomnum2 = Math.floor((Math.random()*6)+1);
    
    var randomimg2 = "dice" + randomnum2 + ".png";
    
    var randomimgsrc2 = "images/" + randomimg2;
    
    var image2 = document.querySelectorAll("img")[1];
    
    image2.setAttribute("src" , randomimgsrc2);
    
    
    
    if(randomnum1 > randomnum2){
        document.querySelector("h1").innerHTML = "player 1 wins";
    }
    
    
    else if(randomnum2 > randomnum1){
        document.querySelector("h1").innerHTML = "player 2 wins";
    }
    
    
    else{
        document.querySelector("h1").innerHTML = "draw";
    }
    
});
