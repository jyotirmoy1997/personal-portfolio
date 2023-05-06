import { Routes, Route } from 'react-router'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import ContactPage from './routes/contact/contact-page.component'
import Certifications from './routes/certifications/certifications.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/certifications' element={<Certifications/>}/>
      </Route>
    </Routes>
  )
}

export default App
