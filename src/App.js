import './App.css';
import ChartHeading from './components/ChartHeading/ChartHeading';
import ChartBody from './components/ChartBody/ChartBody';

function App() {
  return (
    <div className="card">
      <ChartHeading></ChartHeading>
      <br />
      <br />
      <ChartBody></ChartBody>
    </div>
  );
}

export default App;
