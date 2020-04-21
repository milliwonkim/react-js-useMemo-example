import React, { useState, useMemo } from 'react';

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        // check with toggling comments of while loop
        while(i < 2000000000) i++
        return counterOne % 2 === 0;
    }, [counterOne])

    // const isEven = () => {
    //     /**everytime the state updates,
    //      * the component re-renders
    //      * when component re-renders,
    //      * the 'isEven()' method is called again
    //      * the function is slow 
    //      * and hence when we update counterTwo,
    //      * the UI update is slow
    //      */
    //     let i = 0;
    //     /**'i++' loop doen't affect a return value
    //      * but it does slow down the rate
    //      * at which we compute whether the counter is odd or even
    //      * 
    //      * so we need 'useMemo()'
    //      */
    //     while(i < 2000000000) i++
    //     return counterOne % 2 === 0;
    // }

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{ isEven ? ' Even' : ' Odd' }</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter;