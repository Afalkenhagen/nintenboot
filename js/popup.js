window.onload = function() {
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("closeButton");

    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });

    popup.style.display = "block";
  }