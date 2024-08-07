//Add event listener to the login form to handle form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch("login.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = data.redirect;
        } else {
          document.getElementById("error").textContent = data.message;
          document.getElementById("email").value = email;
          document.getElementById("password").value = "";
        }
      })
      .catch((error) => console.error("Error:", error));
  });

// Apply dark mode setting
function applyDarkMode(){
  const darkmode = localStorage.getItem('darkMode');
  if(darkmode == 'true'){
    document.body.classList.add('dark');
  }
}
applyDarkMode();
