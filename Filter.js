// const a = [2, 4, 6, 5, 7, 8, 4, 7];
// b = a.filter((e) => e % 2 == 0);
// console.log(b);

// function filterByPrice(arr, maxPrice) {
//   return arr.filter((obj) => obj.price < maxPrice);
// }

// const products = [
//   { name: "Product A", price: 10 },
//   { name: "Product B", price: 25 },
//   { name: "Product C", price: 5 },
//   { name: "Product D", price: 15 },
//   { name: "Product E", price: 20 },
// ];

// const maxPrice = 15;
// const filteredProducts = filterByPrice(products, maxPrice);

// console.log(filteredProducts);

// function filterByStringLength(arr, minLength) {
//   return arr.filter((str) => str.length > minLength);
// }
// const words = ["apple", "banana", "orange", "grape", "pineapple"];
// const age= 6;

// const filteredWords = filterByStringLength(words, minLength);

// console.log(filteredWords);

// function filterByAge(arr, minAge) {
//   return arr.filter((obj) => obj.age > minAge);
// }
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
//   { name: "Dave", age: 35 },
// ];

// const filteredPeople = filterByAge(people, 25);
// console.log(filteredPeople);

// function filterByHobby(arr, hobby) {
//   return arr.filter((obj) => obj.hobbies.includes(hobby));
// }

// const people = [
//   { name: "velan", hobbies: ["reading", "painting"] },
//   { name: "roshan", hobbies: ["playing", "cooking"] },
//   { name: "malar", hobbies: ["gardening", "dancing"] },
//   { name: "vijay", hobbies: ["playing", "painting"] },
// ];

// const filteredPeople = filterByHobby(people, "painting");
// console.log(filteredPeople);

// function filterByEmailDomain(arr, domain) {
//   return arr.filter((obj) => obj.email.includes(`@${domain}`));
// }
// const users = [
//   { name: "velan", email: "velan.s@finstein.ai" },
//   { name: "Bob", email: "roshan.t@finstein.ai" },
//   { name: "Charlie", email: "ajith.r@acme.ai" },
//   { name: "Dave", email: "aravind.m@finstein.ai" },
// ];

// const filteredUsers = filterByEmailDomain(users, "finstein.ai");
// console.log(filteredUsers);

// function filterPalindromes(arr) {
//   return arr.filter((str) => str == str.split("").reverse().join(""));
// }
// const words = ["csc", "hello", "oppo", "world", "madam"];
// const palindromes = filterPalindromes(words);
// console.log(palindromes);

// function filterByDateRange(arr, startDate, endDate) {
//   return arr.filter((obj) => {
//     const date = new Date(obj.date);
//     return date >= startDate && date <= endDate;
//   });
// }
// const events = [
//   { name: "marriage", date: "2022-01-01" },
//   { name: "birthday", date: "2022-02-15" },
//   { name: "babyshower", date: "2022-03-31" },
//   { name: "earpiercing", date: "2022-04-12" },
//   { name: "engagement", date: "2022-05-23" },
// ];

// const startDate = new Date("2022-02-01");
// const endDate = new Date("2022-04-30");
// const filteredEvents = filterByDateRange(events, startDate, endDate);
// console.log(filteredEvents);

// const ar = ["velan", "sooria", "roshan", "velan"];
// function removeDuplicates(ar) {
//   let b = [];
//   ar.filter((e) => (!b.includes(e) ? b.push(e) : ""));
//   return b;
// }
// console.log(removeDuplicates(ar));
