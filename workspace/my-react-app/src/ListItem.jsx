//Componetns in react look like functions

//These components can have properties that are passed through them

//These properties can be simply denoted as "props" or below we are using 'destructing' to access them directly ex: { taskName, taskDescription }

//The "return" of these functions is the HTML we display in the virtual DOM

//"Export default" is how we export our list item to be used elsewhere

//Because "details" is an object, we need to use curly braces to destructure it

export default function ListItem({ details }) {
    return <div>
        <h3>{details.name}</h3>
        <h4>{details.description}</h4>
        <p>Complete By: {details.dueDate}</p>
    </div>
}
