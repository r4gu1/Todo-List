import { useState } from "react";

function List() {
    const [li, setLi] = useState([
        { id: 1, activity: "apple" },
        { id: 2, activity: "orange" }
    ]);

    const [newItem, setNewItem] = useState("");

    // Function to handle deletion of items
    const handleDelete = (idToRemove) => {
        setLi(li.filter(item => item.id !== idToRemove));
    };

    // Function to handle addition of new items
    const handleAdd = () => {
        if (newItem.trim() !== "") {
            setLi([...li, { id: li.length + 1, activity: newItem }]);
            setNewItem(""); // Clear input field after adding
        }
    };

    // Function to handle input changes
    const handleChange = (e) => {
        setNewItem(e.target.value);
    };

    return (
        <>
            {/* Video Background */}
            <video className="video-background" autoPlay loop muted>
                <source src="your-video-url-here.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h1 className="title">b</h1>
            <div className="input-container">
                <input
                    className="todo-input"
                    placeholder="Enter the item to add"
                    onChange={handleChange}
                    value={newItem}
                />
                <button className="add-btn" onClick={handleAdd}>Add</button>
            </div>
            <ul className="todo-list">
                {li.map(item => (
                    <li key={item.id} className="todo-item">
                        {item.activity}
                        <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List;
