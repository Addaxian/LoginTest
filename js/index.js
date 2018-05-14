function openLogin(){
 document.getElementsByClassName("login")[0].classList.add("focused");
}

function submitLogin(){
  document.getElementsByClassName("login")[0].classList.remove("focused");
  document.getElementsByClassName("login")[0].classList.add("loading");
}
