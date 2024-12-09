document.addEventListener("DOMContentLoaded", function(eventobj) {
    const form = document.getElementById("contactform");
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.addEventListener("click", function(eventobj) {


            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            document.getElementById("errorname").style.display = "none";
            document.getElementById("erroremail").style.display = "none";
            document.getElementById("errorphone").style.display = "none";

            let isvalid = true;

            if (!name) {
                document.getElementById("errorname").style.display = "block";
                isvalid = false;
            } else {
                const namePattern = /^[a-zA-Z\s]+$/;
                if (!namePattern.test(name)) {
                    document.getElementById("errorname").style.display = "block";
                    isvalid = false;
                }
            }

            if (!phone) {
                document.getElementById("errorphone").style.display = "block";
                isvalid = false;
            } else {
                const phonePattern = /^\d{10}$/;
                if (!phonePattern.test(phone)) {
                    document.getElementById("errorphone").style.display = "block";
                    isvalid = false;
                }
            }

            if (!email) {
                document.getElementById("erroremail").style.display = "block";
                isvalid = false;
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    document.getElementById("erroremail").style.display = "block";
                    isvalid = false;
                }
            }

            if (isvalid) {
                const formData = {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                };

                fetch('http://localhost:3000/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if (isvalid) {
                    console.log("Formulario enviado:", { name, email, phone, message });
                    $('#myModal').modal('show');
                    form.reset();
                }

                if (okBtn) {
                    okBtn.addEventListener("click", function() {
                        $('#myModal').modal('hide');

                    })
                };

            }

        });

    }
});