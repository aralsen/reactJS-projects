import List from './List.jsx';

function App() {
    const fruits =
        [{id: 1, name: "apple", calories: 95},
            {id: 2, name: "banana", calories: 105},
            {id: 3, name: "coconut", calories: 134},
            {id: 4, name: "cherry", calories: 282},
            {id: 5, name: "elderberry", calories: 73}];

    const vegatables =
        [{id: 1, name: "asparagus", calories: 20},
            {id: 2, name: "broccoli", calories: 50},
            {id: 3, name: "carrot", calories: 41},
            {id: 4, name: "daikon", calories: 18},
            {id: 5, name: "endive", calories: 17}];

    return (
        <>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegatables.length > 0 ? <List items={vegatables} category="Vegatables"/> : null}
        </>);
}

export default App;
