import './App.css';
import Section from './components/Section';
import Sectiontwo from './components/Sectiontwo';

function App() {
  const name = "mohamed";
  return (
    <div className="App">
      <p>hello {name}</p>
      <Section />
      <Sectiontwo />
    </div>
  );
}
export default App;
