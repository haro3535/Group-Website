
/*
export function ToggleButtonOnClicked(){

    let toggleMenu = document.getElementById('toggle-menu');
    toggleMenu.style.transition = "height 1s ease-in-out";
    (toggleMenu.classList.contains("hidden")) ? toggleMenu.classList.remove("hidden") : toggleMenu.classList.add("hidden"); 
    toggleMenu.style.height = "auto";
}

export function CloseToggleMenu(){
    let toggleMenu = document.getElementById('toggle-menu');
    if (!toggleMenu.classList.contains("hidden"))
        toggleMenu.classList.add("hidden")
}

*/
window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("nav-element").classList.remove("h-[12vh]");
      document.getElementById("nav-element").classList.add("h-[8vh]");

      //document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("nav-element").classList.remove("h-[8vh]");
      document.getElementById("nav-element").classList.add("h-[12vh]");
      //document.getElementById("logo").style.fontSize = "35px";
    }
}


export function ToggleButtonOnClicked() {
  const toggleMenu = document.getElementById('toggle-menu');
  if (toggleMenu.classList.contains('open')) {
      toggleMenu.classList.remove('open');
      setTimeout(() => {
          toggleMenu.style.display = 'none';
      }, 1000); // matches the transition duration
  } else {
      toggleMenu.style.display = 'flex';
      setTimeout(() => {
          toggleMenu.classList.add('open');
      }, 10); // small delay to allow display property to take effect
  }
}

export function CloseToggleMenu() {
  const toggleMenu = document.getElementById('toggle-menu');
  toggleMenu.classList.remove('open');
  setTimeout(() => {
      toggleMenu.style.display = 'none';
  }, 1000); // matches the transition duration
}









