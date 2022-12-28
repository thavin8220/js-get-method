//..getDate()
const birthday = new Date('october 27, 2000 23:15:30:100');
const date1 = birthday.getDate();
console.log(date1);

//.getDay()
const date2 = birthday.getDay();
console.log(date2);

//.getfullYear()
const date3 = birthday.getFullYear();
console.log(date3);

//.getHours()
const date4 = birthday.getHours();
console.log(date4);

//.getMilliseconds()
const date5 = birthday.getMilliseconds();
console.log(date5);

//.getMinutes()
const date6 = birthday.getMinutes();
console.log(date6);

//.getMonth()
const date7= birthday.getMonth();
console.log(date7);

//.getSeconds()
const date8= birthday.getSeconds();
console.log(date8);

//.getTime()
const date9= birthday.getTime();
console.log(date9);

//.getTimezoneOffset()
const date10= birthday.getTimezoneOffset();
console.log(date10);

//.getYear()
const date11= birthday.getYear();
console.log(date11);




//.setDate()
birthday.setDate(31);
console.log(birthday.getDate());

//.setFullYear()
birthday.setFullYear(2000);
console.log(birthday.getFullYear());

//.setHours()
birthday.setHours(23);
console.log(birthday);

//.setMilliseconds()
birthday.setMilliseconds(5);
console.log(birthday.getMilliseconds());

//.setMinutes()
birthday.setMinutes(19);
console.log(birthday);

//.setMinutes()
birthday.setMinutes(12);
console.log(birthday);

//.setSeconds()
birthday.setSeconds(9);
console.log(birthday);

//.setTime()
birthday.setTime(7);
console.log(birthday);

//.setYear()
birthday.setYear(2000);
console.log(birthday);



//.toDatestring()
birthday.toDateString();
console.log(birthday.toDateString());


//.toISOString()()
birthday.toISOString();
console.log(birthday.toISOString());

//.toJSON()()
birthday.toJSON();
console.log(birthday.toJSON());


//.toGMTString()
birthday.toGMTString();
console.log(birthday.toGMTString());

//.toLocaleDateString()
birthday.toLocaleDateString();
console.log(birthday.toLocaleDateString());

//.toLocaleString()
birthday.toLocaleString();
console.log(birthday.toLocaleString());


//.toLocaleString()
birthday.toLocaleTimeString();
console.log(birthday.toLocaleTimeString());


//.toString()
birthday.toString();
console.log(birthday.toString());

//.toTimeString()
birthday.toTimeString();
console.log(birthday.toTimeString());