interface Heroprops {
  points: number
  mode: string
}

const Herobar = ({ points, mode }: Heroprops) => {
  return (
    <header className='border-accent flex w-[980px] justify-between rounded-[18px] border-2 px-4 py-2'>
      <h1 className=' font-bold'>CSMT</h1>
      <p> Score: {points} </p>
      <nav className='inline-flex items-center text-sm'>
        <button
          className={
            mode === 'binary' ? 'text-accent mr-4' : 'text-disabled mr-4'
          }
        >
          Binary
        </button>
        <button
          className={mode === 'hex' ? 'text-accent mr-4' : 'text-disabled mr-4'}
        >
          Hex
        </button>
        <button
          className={mode === 'addition' ? 'text-accent' : 'text-disabled'}
        >
          Addition
        </button>
      </nav>
    </header>
  )
}

export default Herobar
