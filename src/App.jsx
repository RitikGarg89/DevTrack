import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1'>
        <Navbar />
        <DashBoard />
      </main>
    </div>
  )
}

export default App;