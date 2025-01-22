import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Task");
  console.log("3: Exit ");

  rl.question("\nChoose an option:", handleInput);
};

const handleInput = (option) => {
  if (option === '1') {
    rl.question("Enter a Task :", (task) => {
      todos.push(task);
      console.log("\nTask added : ", task);
      showMenu();
    });
  } else if (option === '2') {
    showMenu();
    console.log("\n\n Your Todo Lists");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });

} else if (option === '3') {
    console.log("Good Byee..");
    rl.close();
  } else {
    console.log("Invalid Opation please try again");
    showMenu();
  }
};

showMenu();
