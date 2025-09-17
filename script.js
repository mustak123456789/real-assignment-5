// ✅ Copy buttons (detect by text "Copy")
document.querySelectorAll("button").forEach(button => {
  if (button.textContent.trim() === "Copy") {
    button.addEventListener("click", function () {
      // Find the number inside the same card (the <h3>)
      const card = this.closest("div");
      const numberElement = card.querySelector("h3");
      if (numberElement) {
        const number = numberElement.textContent.trim();
        navigator.clipboard.writeText(number).then(() => {
          alert(number + " copied to clipboard!");
        });
      }
    });
  }
});

// ✅ Clear button (detect by text "Clear")
document.querySelectorAll("button").forEach(button => {
  if (button.textContent.trim() === "Clear") {
    button.addEventListener("click", function () {
      const historyContainer = this.closest("div").parentElement; 
      const historyList = historyContainer.querySelectorAll(".flex.justify-between.items-center.border-b.py-2");
      
      historyList.forEach(item => item.remove());

      // Show placeholder
      const placeholder = document.createElement("p");
      placeholder.textContent = "No call history";
      placeholder.className = "text-gray-400 text-sm";
      historyContainer.appendChild(placeholder);
    });
  }
});
