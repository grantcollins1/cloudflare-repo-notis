import { Routes, Route } from 'react-router-dom';
import Notifications from './components/notifications'
import Notification from './components/notification'
import Input from './components/input_field'
import Dashboard from './components/dashboard'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Dashboard />} />
    </Routes>
  );
}

export default App;