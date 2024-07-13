import { React } from "react";

function MyList({ header, items, updateItem }) {


    return (
        // I guess its important to use () instead of {} ........
        <div>
            <h2>{header}</h2>
            <ol>
                {items.map((item) => (
                    <li key={item.id} onClick={() => updateItem(item.id)} style={{ textDecoration: item.clicked ? "line-through" : "none" }}> {item.text}</li>
                ))}
            </ol>
        </div >
    );
}


export default MyList;
