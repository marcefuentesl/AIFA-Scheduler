function sendEmail() {

    var airline_name = document.getElementById("airline_name").value;
    var representativ_name = document.getElementById("representative_name").value;
    var email = document.getElementById("email").value;

    var msg = representativ_name + " wants to schedule for gate. Airline: " + airline_name;

    console.log(airline_name)
    console.log(representativ_name)
    console.log(email)
	console.log(msg)

    email.send({
	Host: "smtp.gmail.com",
	Username : "softwarearqui5",
	Password : "SoftwareArqui1234",
	To : "A01748161@tec.mx",
	From : "softwarearqui5@gmail.com",
	Subject : "Gate reservation request",
	Body : "You just successfully made a gate reservation at AIFA.",
	}).then(
		message => alert("mail sent successfully")
	);

}
