import './App.css';
import ConnectWallet from './components/ConnectWallet';
import AccessDenied from './components/AccessDenied';
import VideoContent from './components/VideoContent'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ConnectWallet/>} />
      <Route path="/accessdenied" element={<AccessDenied/>} />
      <Route path="/accessgranted" element={<VideoContent/>} />
    </Routes>
  );
}

export default App;
