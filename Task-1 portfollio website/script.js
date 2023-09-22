document.addEventListener('DOMContentLoaded', function (event) {
  var text = " Hiii \n I am karan mishra"; // Change the text to your desired message
  var delay = 60; // Adjust the delay between each character typing

  var i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("text").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, delay);
    }
  }
  typeWriter();
});
document.addEventListener('DOMContentLoaded', function (event) {
  var text2 = "Hiii. I am karan kumar mishar . I'm enthusiastic software devloper specializing in builiding exceptional digital experiences."; // Change the text to your desired message
  var delay = 60; // Adjust the delay between each character typing

  var i = 0;
  function typeWriter() {
    if (i < text2.length) {
      document.getElementById("text2").textContent += text2.charAt(i);
      i++;
      setTimeout(typeWriter, delay);
    }
  }

  typeWriter();

});


function dark() {


  if (document.body.style.background == "black") {
    document.body.style.background = "#0b1634";
    document.getElementById('emg').src = 'karan2.png';
    document.getElementById('intro').style.backgroundColor = "#0b1634";
    document.getElementById('list_iteam').style.backgroundColor = '#0b1634';
  }
  else {
    document.body.style.background = "black";
    document.getElementById('emg').src = 'https://avatars.githubusercontent.com/u/93134411?v=4';
    document.getElementById('intro').style.backgroundColor = "black";
    document.getElementById('list_iteam').style.backgroundColor = 'black';

  }
}
function option() {
  document.getElementById('list_iteam').style.width = "60vw";
  document.getElementById('list_iteam').style.padding = "1rem";
  document.getElementById('list_iteam').style.boxShadow = "2rem 2rem 2rem 4rem black";
  /*document.getElementById('main').style.display="flex";
  document.getElementById('main').style.display="none";
  document.getElementById('list_iteam').style.display="flex";
  */

}
function hide() {
  document.getElementById('list_iteam').style.width = "0vw";
  document.getElementById('list_iteam').style.padding = "0rem";
  document.getElementById('list_iteam').style.boxShadow = "0rem 0rem 0rem 0rem rgba(0, 0, 0, 0)";



}

function hide_loading() {
  document.getElementById("main").style.display = "flex";
  setTimeout(() => {
    document.getElementById("main").style.display = "none";
  }
    , 3000);
}
