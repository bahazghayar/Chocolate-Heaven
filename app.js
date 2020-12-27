
// alert('Welcome Happiness Seeker'); 

displayAmessage ('Welcome Happiness Seeker') ; 


var chocolate_kind ; 
var time ;

AskTheUser (time) ; 
 
// while ( isNaN(time) || time === '' ) {

//     time = prompt('You will get a white chocolate as A GIFT if the sun has not yet set. otherwise, you will get a dark chocolate, your health is important. So what is the time? ' ) ;
    
// } 

// if (time <= 5 ) {
//     chocolate_kind= 'White Chocolate' ;
// } else {
//     chocolate_kind= 'Dark Chocolate' ; 
// }
 

// alert (`${chocolate_kind}, lucky you `); 
  displayAmessage (`${chocolate_kind}, lucky you `); 


var Number_of_chocolates ; 
  chocolateNum (Number_of_chocolates) ; 

// Number_of_chocolates = prompt ('How many chocolates do you want?') ; 
// for (i=0  ; i< Number_of_chocolates  ; i++   ) {
//     document.write( '<img src="2be5d40218.jpg"> ') 
// }

// functions declerations: 

function displayAmessage (message ) { 
   return alert (message) ;
}

function AskTheUser (time) {
    while ( isNaN(time) || time === '' ) { 
     time = prompt('You will get a white chocolate as A GIFT if the sun has not yet set. otherwise, you will get a dark chocolate, your health is important. So what is the time? ' ) ;
    
    } 
    if (time <= 5 ) {
        chocolate_kind= 'White Chocolate' ;
    } else {
        chocolate_kind= 'Dark Chocolate' ; 
    }
}

function chocolateNum (num) {
    Number_of_chocolates = prompt ('How many chocolates do you want?') ; 
    for (i=0  ; i< Number_of_chocolates  ; i++   ) {
        document.write( '<img src="2be5d40218.jpg"> ') 
    }

}
