// Navbar counts
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// HTML elements
const heartCounter = document.getElementById("heartCount");
const copyCounter = document.getElementById("copyCount");
const coinCounter = document.getElementById("coinCount");

// ===== Card 1: National Emergency =====
const heartBtn1 = document.getElementById("heartBtn1");
const copyBtn1 = document.getElementById("copyBtn1");
const callBtn1 = document.getElementById("callBtn1");
const number1 = document.getElementById("number1");
const title=document.getElementById("title");
// Heart button
heartBtn1.addEventListener("click", function() {
  heartCount++;
  heartCounter.innerText = heartCount;
});

// Copy button
copyBtn1.addEventListener("click", function() {
  const num = number1.innerText;
  navigator.clipboard.writeText(num);
  alert(num + " copied!");

  copyCount++;
  copyCounter.innerText = copyCount;
});

// Call History Section
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// কল হিস্ট্রি যোগ করার ফাংশন
function addToHistory(serviceName, serviceNumber) {
  // লোকাল টাইম পাওয়া (hh:mm:ss format)
  const now = new Date();
  const time = now.toLocaleTimeString();

  // নতুন li বানানো
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
  historyList.innerHTML = ""; // সব মুছে ফেলা
});


callBtn1.addEventListener("click", function() {
  if (coinCount >= 20) {
    coinCount -= 20;
    coinCounter.innerText = coinCount;

    // Call history তে যোগ করবো
    const serviceName = document.getElementById("title").innerText; // নাম
    const serviceNumber = number1.innerText; // নম্বর
    addToHistory(serviceName, serviceNumber);

    alert("Calling " + number1.innerText + "... (20 coins deducted)");
  } else {
    alert("Not enough coins!");
  }
});
