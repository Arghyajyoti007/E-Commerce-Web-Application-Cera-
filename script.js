// Hambarger menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        console.log(nav);
        nav.classList.add('active-ham');
    })
} 

if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active-ham');
    })
}

// Fetching data
// Make a GET request using fetch
fetch('https://go-ekart-backend.onrender.com/api/product')
  .then(async(response) => {
    // Check if the request was successful (status code 2xx)
    // Parse the JSON in the response
    const data = await response.json();
    console.log(data); 
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });
