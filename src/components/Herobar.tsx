interface props {
  points: number
  mode: string
}

const Herobar = ({ points, mode }: props) => {
  return (
    <div className='flex w-fit rounded-2xl border-2 border-black px-4 py-2'>
      {/* Title  */}
      <h1 className='pr-96'>CSMT</h1>

      {/* Score of the test  */}
      <p>score {points}</p>

      {/* Modes  */}
      <ul className='pl-96'>
        <button
          className={
            mode === 'binary'
              ? 'pr-2 text-sm text-red-800'
              : 'pr-2 text-sm text-neutral-600'
          }
        >
          Binary
        </button>
        <button
          className={
            mode === 'hex'
              ? 'pr-2 text-sm text-red-800'
              : 'pr-2 text-sm text-neutral-600'
          }
        >
          Hex
        </button>
        <button
          className={
            mode === 'addition'
              ? 'pr-2 text-sm text-red-800'
              : 'pr-2 text-sm text-neutral-600'
          }
        >
          Addition
        </button>
      </ul>
    </div>
  )
}

export default Herobar
