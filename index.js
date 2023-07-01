function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
  
    let clockFormat = getClockFormat();
    if (clockFormat === 12) {
      hours = (hours % 12) || 12;
    }
  
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(3, "0");
  }
  
  // Function to get the selected clock format
  function getClockFormat() {
    const activeOption = document.querySelector(".slider-option.active");
    return parseInt(activeOption.getAttribute("data-value"));
  }
  
  // Function to toggle the clock format on slider click
  function toggleClockFormat() {
    const options = document.querySelectorAll(".slider-option");
    options.forEach(option => {
      option.classList.toggle("active");
    });
    updateClock();
  }
  
  // Add click event listener to the clock format slider
  const slider = document.querySelector(".slider-container");
  slider.addEventListener("click", toggleClockFormat);
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  