import './App.css';
import Dashboard from './components/Dashboard';
import WebsocketClient from './components/mini-components/websocketClient';
/* import Login from './components/Login'; */
import ChatSection from './components/mini-components/chatSection';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Login />; */}
        <chatSection />
        <Dashboard />;
        <WebsocketClient />
        <ChatSection />
      </div>
    </div>
  );
}

export default App;
