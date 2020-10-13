import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

//  Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
    // Want to filter for 2014, then filter for Stage: "Final"
    //Then want to map for Home Team Name

function wcYear (year) {// More Versatile Function, let's you input year
    return fifaData.filter(function(game){
        return game.Year === year});
}
// console.log(wcYear(2014));
const wc2014 = wcYear(2014);

// const wC2014 = fifaData.filter((game) => {//Less versatile function, hardcoded year
//     return game.Year === 2014;
// });

const wc2014Final = wc2014.filter((game) =>{
    return game.Stage === "Final";
});
// console.log(wc2014Final);

const hT2014Final = wc2014Final.map((game) =>{
    return game["Home Team Name"];
});
console.log(hT2014Final);

// (b) Away Team name for 2014 world cup final - want to map for Away team name

const aT2014Final = wc2014Final.map((game) => {
    return game["Away Team Name"];
});

console.log(aT2014Final);


// (c) Home Team goals for 2014 world cup final - want to map from 2014 final and get home team goals
const hT2014FinalGoals = wc2014Final.map(function(game){
    return game["Home Team Goals"];
});
console.log(hT2014FinalGoals);

// (d) Away Team goals for 2014 world cup final

const aT2014FinalGoals = wc2014Final.map((game) =>{
    return game["Away Team Goals"];
});
console.log(aT2014FinalGoals);


// (e) Winner of 2014 world cup final - 
    // compare ht final and at goals
    //return name of winner


const wc2014Win = function(){
    if (hT2014FinalGoals > aT2014FinalGoals){
        return hT2014Final;
    } else if (aT2014FinalGoals > hT2014FinalGoals){
        return aT2014Final;
    } else {
        return 'tie';
    }
}
console.log(wc2014Win());




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
    //Accept the data array (fifa)
    //use filter to search for finals - return if Stage is Final

function getFinals(data) {
    data.filter(function(game){
        return 
    })

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
