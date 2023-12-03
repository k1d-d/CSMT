import Inputarray from '../mode_components/InputArray'

// TODO : make the other hex variant
// TODO : make the questoin gen and checking features

export const HexMode = () => {
  const hed = [1, 0, 1, 1, 0, 1, 0, 1]

  return (
    <>
      <p className='mb-4 text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit?
      </p>
      <table className='border-accent border-collapse border-2'>
        <thead className=' bg-accent text-secondary'>
          {hed.map((val) => (
            <th className='border-l-secondary h-12 w-16 border-l-2'>{val}</th>
          ))}
        </thead>
        <tbody>
          <Inputarray len={2} text />
        </tbody>
      </table>
    </>
  )
}
