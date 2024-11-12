import { Routes, Route } from 'react-router-dom';
import Notifications from './components/notifications'
import Notification from './components/notification'
import Input from './components/input_field'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Input />} />
      <Route path = "/notifications/:id" element={<Notification />} />
    </Routes>
  );
}

export default App;