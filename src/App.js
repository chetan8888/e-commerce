import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home-component'
import SignIn from './components/signin/signin.component';

const App = () => { 
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
