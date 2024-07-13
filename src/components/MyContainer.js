import { React, useState } from "react";

import MyList from "./MyList.js";


const MyContainer = () => {
    const header = "Giving me a headache...";
    const defaults = [
        {
            id: "1",
            text: "item 1",
            clicked: false
        }, {
            id: "2",
            text: "item 2",
            clicked: false
        }
    ]
    const [items, set_items] = useState(defaults);
    const [new_item, set_new_item] = useState("");

    const add_item = () => {
        const n_item = {
            id: (items.length + 1).toString(),
            text: new_item,
            clicked: false
        };

        // Yet again javascript shenanigans
        set_items([...items, n_item]);
        // Empty textarea
        set_new_item("");
    }

    const toggle = (id) => {
        // I guess {} should not be used
        set_items(items.map((item) => (
            item.id === id ? { ...item, clicked: !item.clicked } : item
        )));
    };

    return (
        <div>
            <h1>Kontti</h1>
            <textarea value={new_item} onChange={(event) => set_new_item(event.target.value)}></textarea>
            <button onClick={add_item}>Add Item</button>
            <MyList header={header} items={items} updateItem={toggle} />
        </div>
    );
}

export default MyContainer;
