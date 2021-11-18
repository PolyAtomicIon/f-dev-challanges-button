import logo from './logo.svg';
import './App.scss';
import {Button} from './components/Button'
import {Input} from './components/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Input
          label="Release"
          placeholder="Checking"
          startIcon="Alarm"
          size="md"
        />

        <Input
          label="Release"
          placeholder="Checking"
          startIcon="Alarm"
          size="md"
          error
        />

        <Button
          label="Release"
          startIcon="Alarm"
          size="lg"
        />

        <Button
          label="Release"
          endIcon="Alarm"
          color="danger"
          size="md"
        />

        <Button
          label="Release"
          startIcon="Alarm"
          size="lg"
          color="primary"
          variant="outline"
        /> 
        <Button
          label="Release"
          startIcon="Alarm"
          size="lg"
          disabeShadow
          variant="text"
        />
        <Button
          label="Release"
          startIcon="Alarm"
          disabled
          size="lg"
          variant="outline"
        />
      </header>
    </div>
  );
}

export default App;
