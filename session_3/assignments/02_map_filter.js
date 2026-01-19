// Exercise 3: The Price Formatter

// Scenario: You have a list of raw number prices. You need to format them for the UI.

// Input: [10, 20, 30]

// Task: Use .map() to add a "$" sign to the front of every number.

// Expected Output: ["$10", "$20", "$30"]

let prices = [10 , 20 , 30]

function add_$(prices) {
    return prices.map((p) => `$${p}`)
}

console.log(add_$(prices));


// Exercise 4: The Clean-Up Crew

// Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).

// Input: [25, -5, 18, 0, 40]

// Task: Use .filter() to keep only valid ages 
// (positive numbers > 0).

// Expected Output: [25, 18, 40]

let ages = [25, -5, 18, 0, 40]

function clean_up_crew(data) {
    return data.filter((d)=> d > 0)
}

console.log(clean_up_crew(ages));

// Exercise 5: The "One-Liner" Chain

// Scenario: Combine both methods.

// Input: [-10, 20, 50, -5]

// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).

// Expected Output: [40, 100]

let data = [-10, 20, 50, -5]

function one_liner_chain(data) {
     return data.filter((d) => d >0).map((d) => d*2)
}

console.log(one_liner_chain(data));
