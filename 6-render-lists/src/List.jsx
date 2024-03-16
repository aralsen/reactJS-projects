import PropTypes from "prop-types";

function List(props) {
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
    // sort reverse alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories - b.calories); // sort by calories (ascending)
    // fruits.sort((a, b) => b.calories - a.calories); // sort by calories (descending

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b></li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Fruits",
    items: []
}
export default List