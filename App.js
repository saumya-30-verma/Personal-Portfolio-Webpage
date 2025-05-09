function showProject(projectName) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modalText");
    text.textContent = `Details about ${projectName} will go here.`;
    modal.style.display = "flex";
  }
  
  document.getElementById("close").onclick = function () {
    document.getElementById("modal").style.display = "none";
  };
  
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for reaching out!");
  });
  
  
