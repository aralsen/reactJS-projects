// React Hook => Special function that allows functional components
//                  to use React features without writing class components (React v16.8)
//              useState => React Hook that allows you to have state variables in functional components
//              useEffect => React Hook that runs code after the component is rendered
//              useContext => React Hook that allows you to use context in functional components
//              useReducer => React Hook that allows you to use the reducer function
//              useRef => React Hook that allows you to refer to DOM nodes in functional components
//              useMemo => React Hook that allows you to memoize the result of a function
//              useCallback => React Hook that allows you to memoize the callback function

// useState = A React hook that allows creation of a stateful variable
//            AND a setter function to update its value in the Virtual DOM
//            [name, setName] = useState('') => name = '', setName = function to update name

import MyComponent from "./MyComponent";
import Counter from "./Counter";

function App() {
  return(<Counter />)
}

export default App;
