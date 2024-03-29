/** Fetches the current date from the server and adds it to the page. */
async function showLocation() {
  const responseFromServer = await fetch('/portfolio');
  const textFromResponse = await responseFromServer.text();

  const locationContainer = document.getElementById('location-container');
locationContainer.innerText = textFromResponse;
  const location = await responseFromServer.json();

  console.log(location.Paris);
  console.log(location.Dubai);
  console.log(location.Senegal);
  console.log(location.Switzerland);
  console.log(location.London);
  console.log(location.Milan);
  console.log(location.Germany);
  console.log(location.Jamaica);

  /*const locationContainer = document.getElementById('location-container');
    locationContainer.innerText = textFromResponse; */

}
