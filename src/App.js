import React, {useState} from 'react';
import TestUseMemo from "./components/TestUseMemo";
import TestUseCallBack from "./components/TestUseCallBack";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(prevState => ++prevState)}>inc1</button>
            {/*<TestUseMemo count={count}/>*/}
            <TestUseCallBack count={count}/>
        </div>
    );
};

export default App;