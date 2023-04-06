window.onload = function() {
    const postIt = document.getElementById("postIt");
    const displayBtn = document.getElementById("displayBtn");
    const hideBtn = document.getElementById("hideBtn");
    const hoverText = document.getElementById("hoverText");

    displayBtn.addEventListener("click", function() {
      postIt.style.visibility = "visible";
      postIt.innerHTML = "Vous avez cliqué sur le bouton 'Affiche' !";
    });

    hideBtn.addEventListener("click", function() {
      postIt.style.visibility = "hidden";
    });

    hoverText.addEventListener("mouseover", function() {
      postIt.style.visibility = "visible";
      postIt.innerHTML = "C’est gentil de me survoler...";
    });

    hoverText.addEventListener("mouseout", function() {
      postIt.style.visibility = "hidden";
    });
  };