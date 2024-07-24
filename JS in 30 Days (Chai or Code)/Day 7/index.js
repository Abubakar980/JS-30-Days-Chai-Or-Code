// Activity 1:
// Task 1:
const book = {
  title: "JS sy dur rho",
  author: "Abubakar",
  year: 2024,
};
console.log(book);

// Task 2:
console.log(book.title);
console.log(book.author);

// Activity 2:
// Task 3:
const book2 = {
  title: "JS sy dur rho",
  author: "Abubakar",
  year: 2024,
  updateYear: function (data) { // making a function for updating year
    this.year = data; // this is use for accessing members inside the obj
  },
};
console.log(`Title = "${book2.title}" & Author = "${book2.author}" `);
// Task 4:
book2.updateYear(2002);
console.log(book.year);
// Activity 3:
// Task 5:
const library = {
  name: "Free ka gyan",
  books: [
    {
      title: "Patly kesy ho",
      author: "Unknown",
    },
    {
      title: "Programmer in one day",
      author: "Nhi btao ga",
    },
    {
      title: "Achi baty kiya kro",
      author: "Khud dhoond lo",
    },
  ],
};
console.log(library);
// Task 6:
console.log(library.name);
library.books.forEach((book) => {
  console.log(book.title);
});
// Activity 4:
// Task 7:
const obj2 = {
  title: "JS sy dur rho",
  author: "Abubakar",
  year: 2024,
  printData: function () {
    return `Title = "${this.title}" & Author = "${this.author}" `;
  },
};
console.log(obj2.printData());
// Activity 5:
// Task 8:
const book3 = [
  {
    title: "Book 1",
    author: "One",
  },
];
for (let key in book3) {
  console.log(book3);
}
// Task 9:
console.log(Object.keys(book));
console.log(Object.values(book));
