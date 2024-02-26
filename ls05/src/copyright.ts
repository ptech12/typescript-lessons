// const year =  document.getElementById("year");

// const thisYear = new Date().getFullYear();

// year?.setAttribute("datetime", thisYear);
// year.textContent = thisYear

// // 1st variation 
// const year: HTMLElement | null =  document.getElementById("year");

// let thisYear: string 

// thisYear = new Date().getFullYear().toString();
// // type gaurd
// if (year) {   
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear
// }
 
// 2st variation 
const year =  document.getElementById("year") as HTMLSpanElement; // assertions
 
const thisYear: string = new Date().getFullYear().toString();
// type gaurd 

year.setAttribute("datetime", thisYear);
year.textContent = thisYear

 