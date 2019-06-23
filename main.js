var slideTrigger = document.getElementsByClassName("slide-trigger")[0];

slideTrigger.addEventListener("click", function() {
  var sub = document.getElementsByClassName("sub-column")[0];
  sub.classList.toggle("open");
});
