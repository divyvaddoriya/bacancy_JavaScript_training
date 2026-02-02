// question - 1
// input 


const transactions = [
  { userId: 1, category: "food",    type: "debit",  amount: 200 },
  { userId: 1, category: "food",    type: "debit",  amount: 150 },
  { userId: 1, category: "salary",  type: "credit", amount: 1000 },
  { userId: 2, category: "food",    type: "debit",  amount: 300 },
  { userId: 2, category: "shopping",type: "debit",  amount: 400 },
  { userId: 2, category: "salary",  type: "credit", amount: 1200 },
  { userId: 1, category: "shopping",type: "debit",  amount: 500 },
];

// output
// {
//   1: {
//     food:     { total: 350, count: 2 },
//     salary:   { total: 1000, count: 1 },
//     shopping: { total: 500, count: 1 }
//   },
//   2: {
//     food:     { total: 300, count: 1 },
//     shopping: { total: 400, count: 1 },
//     salary:   { total: 1200, count: 1 }
//   }
// }

let a = transactions.reduce((acc , {userId , category , type, amount}) => {
    
    if(!acc[userId]) {
        acc[userId] = {}
    }

    if(!acc[userId][category]){
        acc[userId][category] = {
            total : 0,
            count : 0
        }
    }

    let money = (type === "debit" ? -amount : amount)
    acc[userId][category].total += money;
 acc[userId][category].count += 1; 
    
    return acc
} , {})

console.log(a);

// excersice - 2


const sales = [
  { product: "Laptop",   region: "India",  amount: 80000, status: "completed" },
  { product: "Laptop",   region: "USA",    amount: 90000, status: "returned" },
  { product: "Phone",    region: "India",  amount: 30000, status: "completed" },
  { product: "Laptop",   region: "India",  amount: 85000, status: "completed" },
  { product: "Phone",    region: "USA",    amount: 35000, status: "completed" },
  { product: "Phone",    region: "India",  amount: 28000, status: "returned" },
  { product: "Tablet",   region: "India",  amount: 40000, status: "completed" },
];

// convert this into this
// {
//   Laptop: {
//     India: { completed: 165000, returned: 0 },
//     USA:   { completed: 0,      returned: 90000 }
//   },
//   Phone: {
//     India: { completed: 30000,  returned: 28000 },
//     USA:   { completed: 35000,  returned: 0 }
//   },
//   Tablet: {
//     India: { completed: 40000, returned: 0 }
//   }
// }

let b = sales.reduce((acc , obj) => {

    // acc[product] ??= {};
    if(!acc[obj.product]){
        acc[obj.product] = {}
    }

    if(!acc[obj.product][obj.region]){
        acc[obj.product][obj.region] = {
            completed: 0,
            returned: 0
        }
    }

    acc[obj.product][obj.region][obj.status] += obj.amount;
    return acc;
}, {} )
console.log(b);


// excersice - 3 Flattening + Enrichment + Ranking
const companies = [
  {
    name: "TechCorp",
    employees: [
      { id: 1, name: "A", salary: 60000, skills: ["JS", "React"] },
      { id: 2, name: "B", salary: 90000, skills: ["Node", "AWS"] }
    ]
  },
  {
    name: "InnoSoft",
    employees: [
      { id: 3, name: "C", salary: 75000, skills: ["JS", "Node"] },
      { id: 4, name: "D", salary: 120000, skills: ["Python", "AI"] }
    ]
  }
];

// expected output
// [
//   {
//     id: 4,
//     name: 'D',
//     salary: 120000,
//     skills: [ 'Python', 'AI' ],
//     company: 'InnoSoft',
//     rank: 1
//   },
//   {
//     id: 2,
//     name: 'B',
//     salary: 90000,
//     skills: [ 'Node', 'AWS' ],
//     company: 'TechCorp',
//     rank: 2
//   },
//   {
//     id: 3,
//     name: 'C',
//     salary: 75000,
//     skills: [ 'JS', 'Node' ],
//     company: 'InnoSoft',
//     rank: 3
//   },
//   {
//     id: 1,
//     name: 'A',
//     salary: 60000,
//     skills: [ 'JS', 'React' ],
//     company: 'TechCorp',
//     rank: 4
//   }
// ] 

let c = companies.reduce((acc , obj) => {
    
    obj.employees.map((e) => acc.push({
        id: e.id , 
        name : e.name , 
        salary : e.salary ,
        skills : e.skills,
        company: obj.name,

    }))

    return acc
} , [])
.sort((a,b) =>  b.salary - a.salary)
.map((a , idx) => ({...a , rank : idx+ 1}))

console.log(c);


// excersice - 4 Object inversion + frequency + top-K

const projects = [
  { name: "Alpha",  tech: ["React", "Node", "Mongo"] },
  { name: "Beta",   tech: ["Node", "Postgres"] },
  { name: "Gamma",  tech: ["React", "Node"] },
  { name: "Delta",  tech: ["Python", "AI"] },
  { name: "Omega",  tech: ["React", "Mongo"] }
];

// convert this into 

// {
//   React:   { count: 3, projects: ["Alpha","Gamma","Omega"] },
//   Node:    { count: 3, projects: ["Alpha","Beta","Gamma"] },
//   Mongo:   { count: 2, projects: ["Alpha","Omega"] },
//   Postgres:{ count: 1, projects: ["Beta"] },
//   Python:  { count: 1, projects: ["Delta"] },
//   AI:      { count: 1, projects: ["Delta"] }
// }

// then into this

// [
//   { tech: "React", count: 3 },
//   { tech: "Node", count: 3 }
// ]


let d = projects
.reduce((acc , obj) => {
    obj.tech.forEach((m) => {
        
        if(!acc[m]){
            acc[m] = {
                count : 0,
                projects : []
            }
        }

        acc[m].count += 1;
       
       let x = acc[m].projects.find((x) => x === obj.name)
        if(!x) acc[m].projects.push(obj.name) 
    })
    return acc;
} , {})
// .reduce((acc , obj) => {
//     if(obj[])
// }  , {})

// console.log(d);


const logs = [
  { user: "A", action: "login",  time: 1 },
  { user: "A", action: "click",  time: 3 },
  { user: "A", action: "click",  time: 4 },
  { user: "B", action: "login",  time: 2 },
  { user: "A", action: "logout", time: 8 },
  { user: "B", action: "click",  time: 5 },
  { user: "B", action: "logout", time: 7 },
  { user: "C", action: "login",  time: 4 },
  { user: "C", action: "logout", time: 23 }
];

logs.reduce((acc , val) => {
    if(!acc[val.user]) acc[val.user] = {
        "user" : val.user,
          
    }


}, {})