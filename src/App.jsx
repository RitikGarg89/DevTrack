import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1'>
        <Navbar />
      </main>
    </div>
  )
}

export default App;