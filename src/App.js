import './App.css';
import Dashboard from './components/Dashboard';
import ChatSection from './components/mini-components/ChatSection';
import WebsocketClient from './components/WebsocketClient';

/* import Login from './components/Login'; */



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
