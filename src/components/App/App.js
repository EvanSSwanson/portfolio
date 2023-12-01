import './App.css';
import background from '../../resources/vaporwave-body.png'

function App() {
  
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "300vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
};

  return (
    <div className="App" style={myStyle}>
    </div>
  );
}

export default App;
