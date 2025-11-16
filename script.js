document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const terms = document.getElementById("terms").checked;
  const message = document.getElementById("message");

// Basic validation

if (!fullName || !email || !password || !confirmPassword || !dob) {
  message.textContent = "All fields are required!";
  message.style.color = "red";
  return;
}

// Email validation

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  message.textContent = "Please enter a valid email address.";
  message.style.color = "red";
  return;
}

// Password match

if (password !== confirmPassword) {
  message.textContent = "Passwords do not match!";
  message.style.color = "red";
  return;
}

// Terms checkbox

if (!terms) {
  message.textContent = "You must agree to the terms and conditions";
  message.style.color = "red";
  return;
}

message.textContent = "Signup successful!";
message.style.color = "lightgreen";

document.getElementById("signupForm").reset();
});