import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personStyle = {
    border: '3px solid tomato',
    margin: '10px',
    borderRadius: '50px',
    padding: '15px'
  }
  return (
    <div style= {personStyle}>
      <h1>Hello Every One</h1>
      <h3>This is my first react application</h3>
    </div>
  )
}

export default App;
