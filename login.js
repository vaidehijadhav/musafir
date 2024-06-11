document.addEventListener("DOMContentLoaded", () => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const signupForm = document.querySelector("form.signup");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
  
    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };
  
    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };
  
    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
  
    // Add event listeners to handle form submissions and redirect
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "./Tours.html";
    });
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "./Tours.html";
    });
});
  