const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
  ];
  const output = users.filter((user)=>user.age<30).map((user)=>user.firstName)
  console.log(output);

  //using reduce
  const ans = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc;
  },[])
  console.log(ans)