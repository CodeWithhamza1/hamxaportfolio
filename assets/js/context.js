// Function to display the custom right-click menu
function showCustomContextMenu(event) {
    event.preventDefault();

    const customContextMenu = document.getElementById('customContextMenu');
    customContextMenu.style.display = 'block';
    customContextMenu.style.left = event.pageX + 'px';
    customContextMenu.style.top = event.pageY + 'px';
  }

  // Function to hide the custom right-click menu
  function hideCustomContextMenu() {
    const customContextMenu = document.getElementById('customContextMenu');
    customContextMenu.style.display = 'none';
  }

  // Attach event listener to the document for right-click event
  document.addEventListener('contextmenu', showCustomContextMenu);

  // Attach event listener to the document for click event
  document.addEventListener('click', hideCustomContextMenu);

















   // Function to get the current time of the detected country
   function getCurrentTime() {
    // Get the timezone of the detected country
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Create a Date object for the current time in the detected timezone
    const currentTimeDetectedCountry = new Date().toLocaleTimeString([], { timeZone: timezone });

    return currentTimeDetectedCountry;
  }

  // Update the displayed time every second
  function updateTime() {
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.textContent = getCurrentTime();
  }

  // Call the updateTime function every second
  setInterval(updateTime, 1000);