var connection = require("../config/connection.js");

//this is a helper function to print question marks for sql syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}