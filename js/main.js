async function sendEmail() {
	const email = document.getElementById("email").value;

	const response = await fetch("/api/email/send", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email }),
	});

	const result = await response.json();
	alert(result.message);
}

document.getElementById("form-submit").addEventListener("click", function(e) {
	e.preventDefault();
	sendEmail();
});
