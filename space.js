function rollDice(){
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var status = document.getElementById('status');
    var caption = document.getElementById('caption');
    var d1 = Math.floor(Math.random()*6) +1;
    var d2 = Math.floor(Math.random()*6) +1;
    var diceTotal = d1+d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Think about the number "+diceTotal+" "

    

    function rollOne(){
        let oneRoll = document.createElement('div');
        let contain= document.querySelector('#container');
        contain.appendChild(oneRoll);
        oneRoll.classList.add('one');
    }
    function rollTwo(){
        let  twoRoll = document.createElement('div');
        let contain= document.querySelector('#container-2');
        contain.appendChild(twoRoll);
        twoRoll.classList.add('two');
    }
    function rollThree(){
        let threeRoll = document.createElement('div');
        let contain= document.querySelector('#container-3');
        contain.appendChild(threeRoll);
        threeRoll.classList.add('three');
    }

    function rollFour(){
        let fourRoll = document.createElement('div');
        let contain= document.querySelector('#container-4');
        contain.appendChild(fourRoll);
        fourRoll.classList.add('four');
    }
    function rollFive(){
        let  fiveRoll = document.createElement('div');
        let contain= document.querySelector('#container-5');
        contain.appendChild(fiveRoll);
        fiveRoll.classList.add('five');
    }
    function rollSix(){
        let sixRoll = document.createElement('div');
        let contain= document.querySelector('#container-6');
        contain.appendChild(sixRoll);
        sixRoll.classList.add('six');
    }
    function doubleTrouble(){
       let dt = document.querySelector('#status');
        dt.classList.toggle('fire');
    }
    function water(){
        let dt = document.querySelector('#status');
        
        dt.classList.toggle('water');
    }
    function h2o(){
        let dt = document.querySelector('#status');
        dt.classList.toggle('h2o');
    }
    function bJack(){
        let dt = document.querySelector('#status');
        dt.classList.toggle('blackjack');
    }
   // all rolling conditionals 

    if(d1==d2){
        status.innerHTML += " DOUBLES! You get another turn!!";
        caption.innerHTML += "love ";
        doubleTrouble();
    }
    if (d1==1){
        rollOne();
        caption.innerHTML += "inspire, ";
        water();
    }
    if(d2==1){
        rollOne();
        caption.innerHTML += "rejoice, ";
        h2o();
    }
    if(d1==2 && d2==1){
        status.innerHTML + " Black Jack!!";
        bJack();
    }

    if (d1==2){
        rollTwo();
        status.innerHTML + " dueces are WILD!";
        caption.innerHTML += "destroy, ";
        
    }
    if(d2==2){
        rollTwo();
        status.innerHTML + " dueces are WILD!";
        caption.innerHTML += "inform, ";
    }

    if (d1==3){
        rollThree();
        caption.innerHTML += "<span>give</span>, ";
    }
    if(d2==3){
        rollThree();
        caption.innerHTML += "live, ";
    }

    if (d1==4){
        rollFour();
        caption.innerHTML += "redefine, ";
    }
    if(d2==4){
        rollFour();
        caption.innerHTML += "<span>pray</span>,";
    }

    if (d1==5){
        rollFive();
        caption.innerHTML += "promote, ";
    }
    if(d2==5){
        rollFive();
        caption.innerHTML += "respect, ";
    }
    if (d1==6){
        rollSix();
        caption.innerHTML += "produce, ";
    }
    if(d2==6){
        rollSix();
        caption.innerHTML = " ";
        caption.innerHTML += "This is another day to ";
    }
}