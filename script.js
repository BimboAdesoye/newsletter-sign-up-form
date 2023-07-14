const form = document.getElementById("form");
const email = document.getElementById("email");
const errorElement = document.getElementById("error");
const confirmEmail = document.getElementById("confirmation-email");
const dismissBtn = document.getElementById("dismiss-btn");
const formCard = document.querySelector(".form-card");
const submitCard = document.querySelector(".submit-card");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let errorMessages = [];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormatValid = emailPattern.test(email.value);

  if (!email.value) {
    errorMessages.push("Please fill in the email address");
  } else if (!isFormatValid) {
    errorMessages.push("Valid email required");
  } else {
    formCard.classList.add("inactive");
    submitCard.classList.add("active");
    confirmEmail.innerText = email.value;
    errorElement.innerText = "";
    email.value = "";
    email.classList.remove("error-style");
  }

  if (errorMessages.length > 0) {
    errorElement.innerHTML = errorMessages.join(",");
    email.classList.add("error-style");
  }
});

dismissBtn.addEventListener("click", () => {
  formCard.classList.remove("inactive");
  submitCard.classList.remove("active");
});
