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

    // Function is called everytime increment button is clicked
    const increment = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }

    // Function is called everytime decrement button is clicked
    const decrement = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }

    function usePause() {
        // Pause Counter
        // TODO display buttons increment and decrement onClick usePause
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

            {/*TODO don't show buttons when de counter is running auto*/}
            {/*TODO display buttons increment and decrement onClick usePause*/}
            <div className="buttons">
                <button style={{
                            fontSize: '60%',
                            position: 'relative',
                            top: '20vh',
                            marginRight: '5px',
                            backgroundColor: 'green',
                            borderRadius: '8%',
                            color: 'white',
                        }}
                        onClick={increment}>Increment</button>
                <button style={{
                            fontSize: '60%',
                            position: 'relative',
                            top: '20vh',
                            marginLeft: '5px',
                            backgroundColor: 'red',
                            borderRadius: '8%',
                            color: 'white',
                        }}
                        onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}

export default Counter
