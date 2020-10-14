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
    return data.filter(function(game){
        return game.Stage === "Final";
    })
}

console.log(getFinals(fifaData));


// function getFinals(data) {
//     return data.filter((game) => game.Stage === "Final"); 
// };


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
    //Higher order function that accepts 'getFinals' as a callback
    //Needs to output an array of years - Use map to log years


function getYears(cb) {
    return cb.map(game => game.Year);

};

const years = getYears(getFinals(fifaData));
console.log(years);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */  
    //HOF needs to accept getFinals
    //Determine winner - if statement
        //Compare home team goals vs away - create if statenent to compare home and away
    //create winners array -use map



function getWinners(cb) {
    return cb.map(game =>{
        if (game["Home Team Goals"] > game["Away Team Goals"]){
            return game["Home Team Name"];
        } else if (game["Away Team Goals"] > game["Home Team Goals"]){
            return game["Away Team Name"];
        }else {
            return "Tie";
        }
    })

};

const winners = getWinners(getFinals(fifaData));
console.log(winners);


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
    //HOF that accepts 2 cbs
    //loop through both functions - use foreach ?
    //have it create a new string -use interpolation.

function getWinnersByYear(getW,getY) {
    let str = "";
    getY.forEach((year,ind) =>
        str += `In ${year}, ${getW[ind]} won the world cup! \n`) ;
    return str; 

};

// console.log(getWinnersByYear(getWinners(getFinals(fifaData)),getYears(getFinals(fifaData))));

console.log(getWinnersByYear(winners,years));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
    //HOF takes data
    //Need to return average of home team and away per match.
        // sum number of matches (array.length), use reduce on home goals and away goals.
            //divide each by number of matches... return interpolated string?

function getAverageGoals(data) {
    let home = data.reduce((acc, item) =>{
        return acc + item["Home Team Goals"]},0);
    let away = data.reduce((acc,item) => {
        return acc + item["Away Team Goals"]},0);
    return `Average number of Home team goals per match is ${(home / data.length).toFixed(1)} goals.\nAverage number of Away team goals per match is ${(away / data.length).toFixed(1)} goals.\nAverage combined goals per match is ${((home+away) / data.length).toFixed(1)} goals.`;

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

    //HOF that takes data and initials
    //Associate initials with home/away team goals
    //need to filter final matches
    //compare to see if itials team won the match
    //How to use reduce? Would loop through each games played by initials, would compare to see if won, then would accumulate


function getCountryWins(data, initials) {
    return data.reduce(function(acc,match){
        if (match["Home Team Initials"] === initials && match.Stage === "Final"){
            if (match["Home Team Goals"] > match["Away Team Goals"]){
                return ++acc;
            } else {return acc + 0;}
        } else if (match["Away Team Initials"] === initials && match.Stage === "Final"){
            if (match["Away Team Goals"] > match["Home Team Goals"]){
                return ++acc;
            } else {return acc + 0;}
        } else {return acc + 0;}
    },0)
};

console.log(getCountryWins(fifaData, "BRA"));





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
