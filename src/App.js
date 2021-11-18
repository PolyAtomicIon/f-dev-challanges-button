import logo from './logo.svg';
import './App.scss';
import {Button} from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          label="Release"
          startIcon="Alarm"
          size="lg"
        />
      </header>
    </div>
  );
}

export default App;
