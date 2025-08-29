// Navbar counts
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// HTML elements
const heartCounter = document.getElementById("heartCount");
const copyCounter = document.getElementById("copyCount");
const coinCounter = document.getElementById("coinCount");

// Call History Section
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// call history function
function addToHistory(serviceName, serviceNumber) {
  const now = new Date();
  const time = now.toLocaleTimeString();

  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-50 rounded-lg p-3 shadow-sm";
  li.innerHTML = `
    <div>
      <p class="font-semibold text-gray-800">${serviceName}</p>
      <p class="text-sm text-gray-600">${serviceNumber}</p>
    </div>
    <span class="text-sm text-gray-500">${time}</span>
  `;
  
  historyList.appendChild(li);
}

// Clear History button
clearHistoryBtn.addEventListener("click", function() {
  historyList.innerHTML = "";
});

// all card call added in call history
const serviceCards = document.querySelectorAll(".service-card");

// for every card loop
serviceCards.forEach(card => {
  const heartBtn = card.querySelector(".heart-btn");
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");
  const serviceNumberElement = card.querySelector(".service-number");
  const serviceTitleElement = card.querySelector(".service-title");

  // Heart button functionality
  if (heartBtn) {
    heartBtn.addEventListener("click", function() {
      heartCount++;
      heartCounter.innerText = heartCount;
    });
  }

  // Copy button functionality
  if (copyBtn) {
    copyBtn.addEventListener("click", function() {
      const serviceNumber = serviceNumberElement.innerText;
      navigator.clipboard.writeText(serviceNumber);
      alert(serviceNumber + " copied!");
      copyCount++;
      copyCounter.innerText = copyCount;
    });
  }

  // Call button functionality
  if (callBtn) {
    callBtn.addEventListener("click", function() {
      if (coinCount >= 20) {
        coinCount -= 20;
        coinCounter.innerText = coinCount;

        const serviceName = serviceTitleElement.innerText;
        const serviceNumber = serviceNumberElement.innerText;
        addToHistory(serviceName, serviceNumber);

        alert("Calling "+ serviceNumber);
      } else {
        alert("Not enough coins!");
      }
    });
  }
});