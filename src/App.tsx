import { useState } from 'react'
import Herobar from './components/Herobar'
import Mode from './components/Mode'

function App() {
  // States <----------
  const [points, setPoints] = useState(0)
  const [mode, setMode] = useState('binary')
  const [shown, setShown] = useState(false)

  return (
    <div className='grid justify-center p-20'>
      <Herobar points={points} mode={mode} />
      <Mode mode={mode} />
      <CallToActions shown={shown} />
    </div>
  )
}

interface Actionprops {
  shown: boolean
}

const CallToActions = ({ shown }: Actionprops) => {
  return (
    <div className='mt-20 flex justify-center'>
      {!shown ? (
        <>
          <button
            className='bg-accent text-secondary mr-8 rounded-full px-4 py-2 font-bold
          hover:bg-white'
          >
            Submit
          </button>
          <button className='border-accent rounded-full border-2 px-4 py-2 font-bold hover:border-red-500 hover:text-red-500'>
            Show
          </button>
        </>
      ) : (
        <button className='border-accent rounded-full border-2 px-4 py-2 font-bold hover:border-green-500 hover:text-green-500'>
          Next
        </button>
      )}
    </div>
  )
}

export default App
