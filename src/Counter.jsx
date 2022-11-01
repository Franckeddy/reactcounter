import {useEffect, useState} from "react";

export function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // setCounter every 1000
        const timeout = setTimeout(() => {
            setCounter(counter + 1);
        }, 1000);

        // return clear
        return () => {
            clearTimeout(timeout);
        };
    }, [counter]);

    function useReset() {
        setCounter(0)
    }

    function usePause() {
        // Pause Counter
    }

    function useSart() {
        // reStart Counter
    }

    return (
        <>
            <button>Counter: {counter}</button>
            <div>
                <button onClick={useReset}>Reset</button>
            </div>
            <div>
                <button>Pause</button>
                <button>Start</button>
            </div>
        </>
    )
}

export default Counter
