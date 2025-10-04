import Chatarea from "./components/Chatarea"
import Inputbox from "./components/Inputbox"

const App = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen text-white flex flex-col justify-center gap-5">
      <Chatarea/>
      <Inputbox/>
    </div>
  )
}

export default App
