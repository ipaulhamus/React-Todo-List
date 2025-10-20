import ListItem from "./ListItem";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <br />
      <ListItem details={{name: "Wash Dishes", description: "Clean all of the dishes, put the ones used for meat in the dishwasher.", dueDate: "10/10/2023"}} />
      <br />
      <ListItem details={{name: "Do Laundry", description: "Wash, dry, and fold all laundry.", dueDate: "10/11/2023"}} />
    </div>
  );
}
//Not using the self closing syntax to redner components without children can lead to errors!
export default App;