//Step 3. Access index.html.
const app = document.getElementById('root')

//Step 3a. Create an image element.
const logo = document.createElement('img')
logo.src = 'logo.png'

//Step 3b. Create a div element and set the class to container.
const container = document.createElement('div')
container.setAttribute('class', 'container')

//Step 3c. Append the logo image and container div to the app root.
app.appendChild(logo)
app.appendChild(container)

//Step 1. Create a connection to the api by using XMLHttpRequest objects.
//Step 1a. Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

//Step 1b. Open a new connection using the GET request on the URL endpoint for Studio Ghibli.
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//Step 1c. Begin accessing JSON data here.
request.onload = function () {
  //Step 2. Convert JSON into Javascript objects using a variable.
  //Step 2a. Parse the response using JSON.parse().

  var data = JSON.parse(this.response)

  //Step 2b. Use forEach to console.log each title.
  //Step 2c. Add a if statement to catch errors.
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      //4. Use textContent to set the text html to the data from the API. Use substring on the p element to limit the description and set the cards to equal length.

      //4a. Create a div with card class.
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      //4b. Create an h1 and set the textContent to the film's title.
      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      //4c. Create a p and set the textContent the film's description.
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    console.log('error')
  }
}

//Step 1d. Send the request.
request.send()