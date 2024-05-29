const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  
  //forEach
//   The .forEach() method executes a callback function on each of the elements in an array in order.
  companies.forEach(function(company){
      console.log(company.name);
  });
  
  //filter
//   The .filter() method executes a callback function on each element in an array. 
// The callback function for each of the elements must return either true or false. 
// The returned array is a new array with any elements for which the callback function returns true.

  const canDrink= ages.filter(age => age >=18);
  
  console.log(canDrink);
  
  //retail company
  const retailCompanies= companies.filter(company => company.category=== "Retail");
  console.log(retailCompanies);
  
  //80s company
  const oldCompany= companies.filter(company=> (company.start >=1980 && company.start <1990));
  console.log(oldCompany);
  
  // map = and send the data and stores it in array
//   The .map() method executes a callback function on each element in an array. 
// It returns a new array made up of the return values from the callback function

  const agesSquare= ages.map(age=> Math.sqrt(age));
  const agesTimes= ages.map(age=> age*2);
  
  console.log(agesSquare);
  console.log(agesTimes);
  
  //reduce 
//   The .reduce() method iterates through an array and returns a single value.

  const ageSum= ages.reduce((total,age)=> total+age, 0);
  
  console.log(ageSum);
  
  //get total years of all companies
  const totalYears= companies.reduce((total,company)=> total + (company.end - company.start),0);
  
  console.log(totalYears);

  //find
//   returns the first array element which satisfies the condition given in the function.

const adult= ages.find(age=> age>=18);

console.log(adult);