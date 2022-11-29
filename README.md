# Development

### Link to Deployed Website
https://eagereagle997.github.io/Development/

### Goal and Value of the Application
- Star Wars is one of the biggest movie franchises in the United States and the World as a whole. 
- This app was designed as a tool to help users keep track of the movies in the Saga that they have seen.
- Within the interface they are able to build out a running tally of the movies that they have seen, and it tallies up the total minutes they have spent watching Star Wars!

### Usability Principles Considered
- Learnability: I designed the website with an eye for making it easy for first time users to interact with the interface. For the add and filter buttons I made them large and green to indicate that these are what you are supposed to interact with. Then when removing movies from the movie list I made those buttons big and red to indicate that they are a potentially dangerous, non-reversible action. I also put a down arrow in the dropdown menu to indicate it as being such. 
- Efficiency: Once users learn the interface it is very quick and easy to navigate, and all components are where you would expect them to be. 
- Memorability: Due to the fairly standard layout of the interface it is quick and easy for returning users to get back into the flow of operating the interface. 

### Organization of Components
- In this webapp, the only main component used was a "MovieItem" component. The purpose of this component was to provide and easy and repeatable way to generate each of the movie elements based off the movie list JSON for the primary part of the interface. 
- I also used the React Bootstrap component "Dropdown" to represent the filter and sort by values.

### How Data is Passed Down Through Components
- Data from App.js is passed to the MovieItem component via props. 

### How the User Triggers State Changes
- The user triggers state changes via interaction with the various buttons across the interface. 
- Each button is tied to a different state change, for example there are 3 state variables representing each of the filter states, one for the sort by state and various buttons controlling the add to and remove from movie list functions. 
- Each of these buttons is tied to its respective function, and triggers the state change when pressed. 

