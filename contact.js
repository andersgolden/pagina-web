const form = document.getElementById("contactform");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(eventobj) {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    if (!validateForm(formData)) {
        return;
    }

    sendForm(formData);
});


function validateForm(formData) {
    var isvalid = true;

    var pattern = /^[a-zA-Z\s]+$/;
    var nameIsValid = validateField(formData.name, pattern, "errorname")
    if (nameIsValid == false) {
        isvalid = false;
    }

    pattern = /^\d{10}$/;
    var phoneIsvalid = validateField(formData.phone, pattern, "errorphone")
    if (phoneIsvalid == false) {
        isvalid = false;
    }

    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var emailIsvalid = validateField(formData.email, pattern, "erroremail")
    if (emailIsvalid == false) {
        isvalid = false;
    }

    return isvalid;
}

function validateField(value, pattern, errorLabel) {
    if (!pattern.test(value)) {
        document.getElementById(errorLabel).style.display = "block";
        return false;
    }

    return true;
}

function sendForm(formData) {
    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })


    $('#myModal').modal('show');
    reset();

    if (okBtn) {
        okBtn.addEventListener("click", function() {
            $('#myModal').modal('hide');

        })
    };
}

function reset() {
    form.reset();
    document.getElementById("errorname").style.display = "none";
    document.getElementById("erroremail").style.display = "none";
    document.getElementById("errorphone").style.display = "none";
}