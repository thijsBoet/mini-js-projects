
import './App.css';
import ReactPlayer from "react-player/youtube";

function App() {
  return (
    <div className="container">
      <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />;
    </div>
  );
}

export default App;
