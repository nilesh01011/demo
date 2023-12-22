// API endpoint
const apiURL = "https://api.example.com/data";

// Authentication
const token = "Token";

const headers = {
  Authorization: "Bearer " + token,
};

// Make API call
async function getAPIdata() {
  try {
    // with authentication
    const response = await fetch(apiURL, {
      method: "GET",
      headers: headers,
    });
    // Without authentication
    // const response = await fetch(apiURL);

    const jsonData = await response.json();

    // Display data
    displayData(jsonData);
  } catch (error) {
    console.log(error);
  }
}

// Display data
function displayData(data) {
  document.getElementById("result").innerText = data.content;
}

// Call API initially and every 30 seconds
getAPIdata();
setInterval(getAPIdata, 30000);
