import React, { useState } from "react";

function DragAndDropList() {
    // State to hold the list of items
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

    // State to track the index of the item being dragged
    const [draggingItem, setDraggingItem] = useState(null);

    // Function to handle the start of dragging
    const handleDragStart = (index) => {
        setDraggingItem(index);
    };

    // Function to handle the end of dragging
    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    // Function to handle item drop
    const handleDrop = (index) => {
        const newItems = [...items];
        const draggedItem = newItems[draggingItem];

        // Remove the dragged item from its original position
        newItems.splice(draggingItem, 1);

        // Insert the dragged item at the new position
        newItems.splice(index, 0, draggedItem);

        setItems(newItems);
        setDraggingItem(null);
    };

    return (
        <div>
            <h2>Drag and Drop List</h2>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragEnd={handleDragEnd}
                        onDrop={() => handleDrop(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DragAndDropList;
