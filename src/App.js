import React, {useState} from 'react';
import TestUseMemo from "./components/TestUseMemo";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(prevState => ++prevState)}>inc1</button>
            <TestUseMemo count={count}/>
        </div>
    );
};

export default App;