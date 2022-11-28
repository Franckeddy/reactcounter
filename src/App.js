import './App.css';
import Counter from "./Counter";
import {CounterClass} from "./CounterClass";
import {ClassCompteur} from "./ClassCompteur";

function App() {
    return (
        <div>
            <section style={{backgroundColor: "red", width: "100%"}}>
                <CounterClass/>
            </section>
            <section style={{backgroundColor: "green", width: "100%"}}>
                <h1>Test ClassCounter</h1>
                <ClassCompteur/>
            </section>
            <section className="App">
                <header className="App-header">
                    <div>
                        <Counter/>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default App;
