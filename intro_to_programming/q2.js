let num = 4936;


let ones = num % 10; //1s place

let tens = (num - ones)/10 % 10; //10s place

let hundreds = (num - tens - ones)/100 % 10; // 100s place

let thousands = (num - hundreds - tens - ones)/1000; //1000s place
