const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  
  // Task 1: Print the name of each company using forEach
  companies.forEach(company => {
    console.log(company.name);
  });
  
  // Task 2: Print the name of each company that started after 1987
  companies
    .filter(company => company.start > 1987)
    .forEach(company => {
      console.log(company.name);
    });
  
  // Task 3: Get companies with category Retail, increment start by 1, and append to DOM
  const retailCompanies = companies
    .filter(company => company.category === "Retail")
    .map(company => ({
      ...company,
      start: company.start + 1
    }));
  
  const retailDiv = document.createElement("div");
  retailCompanies.forEach(company => {
    const companyInfo = document.createElement("p");
    companyInfo.textContent = `Name: ${company.name}, Category: ${company.category}, Start: ${company.start}, End: ${company.end}`;
    retailDiv.appendChild(companyInfo);
  });
  document.body.appendChild(retailDiv);
  
  // Task 4: Sort the companies based on their end date in ascending order
  const sortedCompanies = companies.sort((a, b) => a.end - b.end);
  console.log(sortedCompanies);
  
  // Task 5: Sort the ages array in descending order
  const sortedAges = ages.sort((a, b) => b - a);
  console.log(sortedAges);
  
  // Task 6: Print the sum of all ages using reduce
  const sumAges = ages.reduce((acc, age) => acc + age, 0);
  console.log("Sum of Ages:", sumAges);
  
  // Task 7: Create a new object using destructuring and ES6
  const { name, category } = companies[0];
  const newObject = { name, category, print: () => console.log(name) };
  console.log(newObject);
  
  // Task 8: Function to sum an unknown number of numbers
  const sumNumbers = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
  console.log("Sum of Numbers:", sumNumbers(1, 2, 3, 4, 5));
  
  // Task 9: Function to add values to an array
  const addValuesToArray = (...args) => args.reduce((arr, arg) => {
    if (Array.isArray(arg)) {
      arr.push(...arg);
    } else {
      arr.push(arg);
    }
    return arr;
  }, []);
  
  console.log("Array with added values:", addValuesToArray(1, [2, 3], 4, [5, 6]));
  
  // Task 10: Destructuring the property street from the person object
  const { street } = person.address;
  console.log("Street:", street);
  
  // Task 11: Function that returns an incrementing number every time it's called
  const incrementingNumber = (() => {
    let counter = 0;
    return () => counter++;
  })();
  
  console.log(incrementingNumber());
  console.log(incrementingNumber());
  console.log(incrementingNumber());
  
  // Task 12: Function to parse URL query parameters
  const parseUrlParameters = (url) => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    return queryString.split('&').reduce((params, param) => {
      const [key, value] = param.split('=');
      params[key] = value;
      return params;
    }, {});
  };
  
  const exampleUrl = "http://localhost:8080/";
  const parsedParams = parseUrlParameters(exampleUrl);
  console.log("Parsed URL Parameters:", parsedParams);
  