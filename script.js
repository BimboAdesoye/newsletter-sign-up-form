const form = document.getElementById("form");
const email = document.getElementById("email");
const errorElement = document.getElementById("error");
const confirmEmail = document.getElementById("confirmation-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", (e) => {
  let errorMessages = [];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormatValid = emailPattern.test(email.value);

  if (!email.value) {
    errorMessages.push("Please fill in the email address");
  } else if (!isFormatValid) {
    errorMessages.push("Valid email required");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = errorMessages.join(",");
    email.classList.add("error-style");
  }
});

dismissBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
