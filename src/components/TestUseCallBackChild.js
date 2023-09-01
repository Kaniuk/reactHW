import React, {memo} from 'react';

const TestUseCallBackChild = memo(({someFunk}) => {
    const res = someFunk();
    return (
        <div>
            res:{res}
        </div>
    );
});

export default TestUseCallBackChild;