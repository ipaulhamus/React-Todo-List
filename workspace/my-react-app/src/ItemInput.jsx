//Component for inputting new items to add to the todo list

export default function ItemInput() {
    return <div>
        <h2>Add A New Item</h2>
        <form>
            <input type="text" placeholder="Task Name:" />
            <br />
            <input type="text" placeholder="Task Description:" />
            <br />
            <input type="text" placeholder="Due Date:" />
            <br />
            <button type="submit">Add Item</button>
        </form>
    </div>
}