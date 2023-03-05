var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

  } else {
    document.getElementById("navbar").style.top = "-18vh";
  }
  prevScrollpos = currentScrollPos;
}




window.onload = function(){
  Swal.fire({
    title: 'Hello!',
    text: 'Wanna try my Interactive Portfolio?, Click continue',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Continue',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location = "https://leojomar01.github.io/I-Portfolio/";
    } 
  })
}



