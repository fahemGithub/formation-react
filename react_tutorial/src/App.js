import './App.css';
import Section from './components/Section';
import Sectiontwo from './components/Sectiontwo';
import About from './components/About'
import Football from './components/Football';

function App() {
  const name = "Salim";
  return (
    <div className="App">
      <p>hello {name}</p>
      <Section name = {name}/>
      <Sectiontwo nameTwo = {name} />
      <About firstName = {name}/>

      <Football nameF = {name}/>
    </div>
  );
}
export default App;
