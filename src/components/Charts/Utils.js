let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
var COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
];

// This module is for some generic used function by charts to help populating data and Legends.

module.exports = {
    CHART_COLORS: {
        red: "#ffb1c1",
        blue: "#9ad0f5",
        green: "#a5dfdf",
        yellow: "#ffcf9f",
        lightYellow: "#ffe6aa"
    },
    months: (data) => {
        return monthsArray.slice(0, data.count);
    },
    numbers: ({ count, max, min }) => {
        let num_arr = [];
        while (count != 0) {
            num_arr.push(randomNumber(min, max));
            count--;
        }
        console.log(num_arr.length);
        return num_arr;
    }
}
