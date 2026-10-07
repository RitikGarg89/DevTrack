import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import DashBoard from './Pages/DashBoard'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-200">

      {/* Permanent Sidebar */}
      <Sidebar />

      {/* Main Application Area */}
      <main className="min-w-0 flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="mx-auto max-w-[1180px] my-20 px-4">
          <DashBoard />
        </div>

      </main>

    </div>
  )
}

export default App