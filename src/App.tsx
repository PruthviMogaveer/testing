import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchAssistant from './pages/SearchAssistant';
import Sidebar from './components/Sidebar';
import LaunchPage from './components/LaunchPage';

function App() {
  return (
    <Router>
      <div className=" w-full">
        {/* <Sidebar /> */}
        {/* <div className="flex-1 md:mx-8 max-md:relative max-md:top-1">  */}
          <Routes>
            <Route path="/" element={<LaunchPage />} />
          </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;