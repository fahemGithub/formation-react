import "./App.css";
import Section from "./components/Section";
import Sectiontwo from "./components/Sectiontwo";
import About from "./components/About";
import Football from "./components/Football";
import Counter from "./components/Counter";

function App() {
    const name = "mohamed";
    return (
        <div className='App'>
            <Counter />
        </div>
    );
}
export default App;

/**
 * 
      <p>hello {name}</p>
      <Section name = {name}/>
      <Sectiontwo nameTwo = {name} />
      <About firstName = {name}/>

      <Football nameF = {name}/>
 */
