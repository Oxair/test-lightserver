//EVENTS SCRIPT


//FUNCTION FOR SUBMISSION getTicketSubmit

function getTicketSubmit(){
	// STORING DATA IN VARIABLES
	var mobileNumber = document.getElementById("mobileNumber").value;
	var mailAddress = document.getElementById("mailAddress").value;
	
	if (mobileNumber == "" || mailAddress == ""){
		document.getElementById("failureMessageTicket").style.display = "block";
		document.getElementById("successMessageTicket").style.display = "none";
	} else{
		document.getElementById("failureMessageTicket").style.display = "none";
		document.getElementById("successMessageTicket").style.display = "block";
	}
};


document.getElementById("successMessageTicket").style.display = "none";
document.getElementById("failureMessageTicket").style.display = "none";
document.getElementById("submitTicketForm").onclick = function(){ getTicketSubmit() };
