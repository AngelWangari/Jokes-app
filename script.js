// Get the HTML elements we need to interact with
const jokeEl = document.getElementById("jokes"); // the element where we'll display the jokes
const button = document.querySelector("button"); // the button that triggers the joke fetching

// Define a function to add a new joke to the page
const addNewJokes = async () => {
  // Fetch a new joke from the API
  const jokeText = await getdadjokes();
  
  // Create a new list item element to hold the joke
  const newLi = document.createElement("li");
  
  // Add the joke text to the list item
  newLi.append(jokeText);
  
  // Add the list item to the jokes element
  jokes.append(newLi);
};

// Define a function to fetch a joke from the API
const getdadjokes = async () => {
  try {
    // Set up the API request headers to accept JSON
    const config = { headers: { Accept: "application/json" } };
    
    // Make the API request to fetch a joke
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    
    // Return the joke text from the API response
    return res.data.joke;
  } catch (err) {
    // If there's an error, return a fallback message
    return "Sorry, no jokes available ";
  }
};

// Add an event listener to the button to trigger the joke fetching
button.addEventListener("click", addNewJokes);
