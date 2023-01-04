//Sidebar Collapse 
function myFunction(x) {
  if (x.matches) {
    document.querySelector(".nav-bar").classList.remove("nav-mobile");
    sideBar.onclick = () => {
      document.querySelector(".nav-bar").classList.toggle("nav-collapse");
      document.querySelector(".dashboard-content").classList.toggle("dashboard-collapse");
      document.querySelector(".creator").classList.toggle("creator-collapse");
    };
  } else {
    sideBar.onclick = () => {
      document.querySelector(".nav-bar").classList.add("nav-mobile");
    };
    sideBarClose.onclick=()=>{
        document.querySelector(".nav-bar").classList.remove("nav-mobile"); 
    }
  }
}
const mmObj = window.matchMedia("(min-width: 1399.98px)"),
    sideBar = document.getElementById("collapseBtn"),
    sideBarClose=document.getElementById('nav-close-btn');
myFunction(mmObj);
mmObj.addEventListener("change", myFunction);


