import { Routes, Route } from 'react-router-dom';
import Notifications from './components/notifications'
import Notification from './components/notification'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Notifications />} />
      <Route path = "/posts/:id" element={<Notification />} />
    </Routes>
  );
}

export default App;