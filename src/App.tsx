const Herobar = () => {
  return (
    <div className='flex w-fit rounded-2xl border-2 border-black px-4 py-2'>
      <h1 className='pr-96'>CSMT</h1>
      <p>score 0</p>
      <ul className='pl-96'>
        <button className='pr-2 text-sm'>Binary</button>
        <button className='pr-2 text-sm'>Decimal</button>
        <button className='pr-2 text-sm'>Hex</button>
      </ul>
    </div>
  )
}

const TrainingPage = () => {
  return (
    <div className='grid items-center justify-center p-24'>
      <Herobar />
    </div>
  )
}

function App() {
  return <TrainingPage />
}

export default App
