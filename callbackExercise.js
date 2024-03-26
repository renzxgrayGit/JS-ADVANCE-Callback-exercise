/* Question #1 */
function runFunction(callback) {
    // Execute the passed function
    callback();
}

/* Example of usage */
function exFunction() {
    console.log("Executing the example function");
}

/* Calling the executeFunction with exampleFunction as an argument */
runFunction(exFunction);


/* Question #2 */
function executeFunction() {
    return functionReturn; // Return the function reference without parentheses
}

function functionReturn() {
    console.log("This is return from executeFunction");
}

/* Now let's execute the returned function */
var returnedFunction = executeFunction(); // Assign the returned function to a variable
returnedFunction(); // Execute the returned function


/* Question #3 */
function randomExecution(func1, func2) {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();

    // If random number is less than 0.5, execute func1, else execute func2
    if (randomNum < 0.5) {
        func1();
    } else {
        func2();
    }
}

// Example usage:
function firstFunction() {
    console.log("First function executed");
}

function secondFunction() {
    console.log("Second function executed");
}

randomExecution(firstFunction, secondFunction);
