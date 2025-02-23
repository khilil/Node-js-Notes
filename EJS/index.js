import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

//? In Express.js, a template engine is a tool that lets you embed dynamic content into HTML files and render them on the server before sending them to the client. It allows you to create reusable templates, making it easier to generate dynamic web pages with minimal code.

app.get("/report", (req, res) => {
  const students = [
    { id: 1, name: "Alice Johnson", age: 20, grade: "A", city: "New York" },
    { id: 2, name: "Bob Smith", age: 22, grade: "B", city: "Los Angeles" },
    { id: 3, name: "Charlie Brown", age: 21, grade: "A", city: "Chicago" },
    { id: 4, name: "David White", age: 23, grade: "C", city: "Houston" },
    { id: 5, name: "Ella Green", age: 20, grade: "B", city: "Phoenix" },
    { id: 6, name: "Frank Black", age: 24, grade: "A", city: "Philadelphia" },
    { id: 7, name: "Grace Adams", age: 22, grade: "B", city: "San Antonio" },
    { id: 8, name: "Henry Clark", age: 21, grade: "C", city: "San Diego" },
    { id: 9, name: "Ivy Wilson", age: 23, grade: "A", city: "Dallas" },
    { id: 10, name: "Jack Turner", age: 20, grade: "B", city: "San Jose" },
  ];
  return res.render("report", { students });
});

// app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
