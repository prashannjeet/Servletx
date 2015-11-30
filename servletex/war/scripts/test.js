	
	function emailFunction(){
		myFunction();
		document.getElementById("validate").style.visibility = "visible";
		document.getElementById("h3").innerHTML="Enter Email ID  For Validation";
	}

	function zipFunction(){myFunction();
		document.getElementById("validate").style.visibility = "visible";
		document.getElementById("h3").innerHTML="Enter  ZIP Code For Validation";
	}
	function alphaFunction(){myFunction();
		document.getElementById("validate").style.visibility = "visible";
		document.getElementById("h3").innerHTML="Enter a String To Check Alphabate";
	}
	function numFunction(){
		document.getElementById("validate").style.visibility = "visible";
		document.getElementById("h3").innerHTML="Enter a Number To Check Prime Number";
	}

	function myFunction(){
		document.getElementById("myP").style.visibility = "hidden";
		document.getElementById("validate").style.visibility = "hidden";
	}
	function sumFunction(){myFunction();
		document.getElementById("myP").style.visibility = "visible";
		document.getElementById("h2").innerHTML="Addition Of Two Number";
		document.getElementById("sumButton").innerHTML="ADD";
		
	}
	function subFunction(){myFunction();
		document.getElementById("myP").style.visibility = "visible";
		document.getElementById("h2").innerHTML="Subtraction Of Two Number";
		document.getElementById("sumButton").innerHTML="SUBTRACT";
		
	}
	function mulFunction(){myFunction();
		document.getElementById("myP").style.visibility = "visible";
		document.getElementById("h2").innerHTML="Multiplicatio Of Two Number";
		document.getElementById("sumButton").innerHTML="MULTIPLICATION";
		
	}
	function divFunction(){myFunction();
		document.getElementById("myP").style.visibility = "visible";
		document.getElementById("h2").innerHTML="Division Of Two Number";
		document.getElementById("sumButton").innerHTML="DIVISION";
		
	}

	function addition(){

		var value1=parseInt(document.getElementById("input1").value);
		var value2=parseInt(document.getElementById("input2").value);
		 if (isNaN(value1) || isNaN(value2)) {
    			alert("Must Input Numbers !");
    			return false;
 			 }
		if(document.getElementById("sumButton").text=="ADD"){
			window.alert("Sum Of Two Number = " + (value1 + value2));
		}

		else if(document.getElementById("sumButton").text=="SUBTRACT"){
			window.alert("Subtraction Of Two Number = " + (value1 - value2));
		}
		else if(document.getElementById("sumButton").text=="MULTIPLICATION"){
			window.alert("Multiplication Of Two Number = " + (value1 * value2));
		}
		else if(document.getElementById("sumButton").text=="DIVISION"){
			window.alert("Division Of Two Number = " + (value1 / value2));
		}
	}
function clearFunction(){
		document.getElementById("input1").value=null;
		document.getElementById("input2").value=null;
}
function clearFunction1(){
		document.getElementById("txtEmail").value=null;
}

function checkEmail() {

    var email = document.getElementById('txtEmail');
    var text=document.getElementById("h3").firstChild.data;;
    if(text.match("Email")){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
   }
   else
   	  alert("Email Id Is Valid.."+text);
    }

    else if(text.match("ZIP")){
    	if( isNaN(email) && email.value.length==6 && email.value>99999 && email.value<=999999)
    		alert("ZIP Code Is Valid");
    	else 
    		alert("ZIP Code Is Not Valid !!");
    }
     else if(text.match("Alphabate")){
     		var letters = /^[A-Za-z]+$/;  
			if(email.value.match(letters)) { 
				alert("Given Alphabate is A Valid ");
				return true;
     		}
     		else{
     			alert("Invalid Alphabate");
     			email.focus;
     		}
     }
     else if(text.match("Prime")){

     	if(isPrime(parseInt(email.value)))
     		alert("Given Number is Prime");
     	else
     		alert("Given Number is not Prime");


     }
  }


function isPrime(num){
	for (var i = 2; i <=num/2; i++) {
		if (num % i == 0) {
			return false;
		}
	}
		return true;

}


