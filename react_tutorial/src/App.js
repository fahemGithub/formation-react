import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Contact-form";

function App() {
    const name = "mohamed";
    return (
        <div className='App'>
            <Form />
        </div>
    );
}
export default App;

/**
 * 
 * import Section from "./components/Section";
import Sectiontwo from "./components/Sectiontwo";
import About from "./components/About";
import Football from "./components/Football";
            <Counter />

      <p>hello {name}</p>
      <Section name = {name}/>
      <Sectiontwo nameTwo = {name} />
      <About firstName = {name}/>

      <Football nameF = {name}/>
 */
