import React, {useCallback, useMemo, useState} from 'react';
import TestUseCallBackChild from "./TestUseCallBackChild";

const TestUseCallBack = ({count}) => {
    const [count2, setCount2] = useState(0);

    const someFunk = useCallback(() => {
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += count;
        }
        return result;
    }, [count]);

    return (
        <div>
            <TestUseCallBackChild someFunk={someFunk}/>
            <div>count={count}</div>
            <div>count2={count2}</div>
            <button onClick={() => setCount2(prevState => ++prevState)}>inc2</button>
        </div>
    );
};

export default TestUseCallBack;