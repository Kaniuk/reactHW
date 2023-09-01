import React, {useMemo, useState} from 'react';

const TestUseMemo = ({count}) => {
    const [count2, setCount2] = useState(0);

    const someFunk = () => {
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += count;
        }
        return result;
    };
    const res = useMemo(() => someFunk(), [count]);
    return (
        <div>
            <div>res:{res}</div>
            <div>count={count}</div>
            <div>count2={count2}</div>
            <button onClick={() => setCount2(prevState => ++prevState)}>inc2</button>
        </div>
    );
};

export default TestUseMemo;