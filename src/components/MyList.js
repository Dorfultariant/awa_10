function MyList(header, items) {
    return (
        <div>
            <h2>{header}</h2>
            <ol>
                {items.map((item) => {
                    <li key={item.id}> {item.text}</li>
                })}
            </ol>
        </div >
    );
}


export default MyList;
