import { Routes, Route } from 'react-router-dom'
import { Home, Edit } from '../pages'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
    </Routes>
  )
}
