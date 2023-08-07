import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import ThemeContextProvider from './context/themeContext'
import Register from './views/Register'
import Login from './views/Login'
import Profile from './views/Profile'
import ListingDetail from './views/ListingDetail'
import Success from './views/Register/success'
import NewItemForm from './views/Items/NewItemForm'
import EditItemForm from './views/Items/EditItemForm'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register/success" element={<Success/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound />} />
            {/* Item routes */}
            <Route path="/item" element={<NewItemForm/>}/>
            <Route path="/item/:itemId" element={<EditItemForm/>}/>
            <Route path="/listing/:id" element={<ListingDetail/>}/>
            {/* Item routes */}
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
