const btn = document.getElementById("sndbtn");
const email = document.getElementById("email");
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");
const contactForm = document.getElementById("contactForm");

let formSubmitted = false; // Flag to track form submission status

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  if (!formSubmitted && email.value !== "" && name.value !== "" && subject.value !== "" && msg.value !== "") {
    // If all fields are filled, submit the form
    formSubmitted = true; // Set the flag to indicate form submission
    btn.innerHTML = `Processing <i class="fa fa-circle-o-notch fa-spin"></i>`;
    btn.disabled = true; // Disable the button while sending the form (optional)

    // Simulate form submission (You can replace this with actual form submission code)
    setTimeout(function () {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(contactForm)
      }).then(response => {
        if (response.ok) {
          btn.innerHTML = `Sent Successfully <i class="fas fa-check"></i>`;
          btn.style.color = "white";
          btn.style.background = "green";
          // Reset the button color and border to the original state after 2 seconds
          setTimeout(function () {
            btn.innerHTML = "Submit";
            btn.style.color = "white"; // Set to empty to reset to default color
            btn.style.background = "#149ddd"; // Set to empty to reset to default background
            btn.disabled = false; // Re-enable the button after form submission (optional)

            // Reset form inputs to blank
            email.value = "";
            name.value = "";
            subject.value = "";
            msg.value = "";

            formSubmitted = false; // Reset the form submission flag
          }, 2000);
        } else {
          btn.innerHTML = `Error Submitting Form <i class="fas fa-exclamation-circle"></i>`;
          btn.style.color = "white";
          btn.style.background = "red";
          btn.disabled = false; // Re-enable the button after form submission (optional)
        }
      }).catch(error => {
        console.error("Error:", error);
        btn.innerHTML = `Error Submitting Form <i class="fas fa-exclamation-triangle"></i>`;
        btn.style.color = "white";
        btn.style.background = "red";
        btn.disabled = false; // Re-enable the button after form submission (optional)
      });
    }, 3000);
  } else {
      btn.innerHTML = `Please Fill All The Fields <i class="fas fa-exclamation-circle"></i>`;
      btn.style.color = "white";
      btn.style.background = "red";

      setTimeout(() => {
            btn.innerHTML = "Submit";
            btn.style.color = "white"; // Set to empty to reset to default color
            btn.style.background = "#149ddd"; // Set to empty to reset to default background
            btn.disabled = false; // Re-enable the button after form submission (optional)
      }, 2000);
  }
});
