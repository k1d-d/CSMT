import Inputarray from '../mode_components/InputArray'

// TODO : make other variant of binary mode
// TODO : make the questoin gen and checking features

const BinaryMode = () => {
  const hed = [128, 64, 32, 16, 8, 4, 2, 1]

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
          <Inputarray len={8} text={false} />
        </tbody>
      </table>
    </>
  )
}

export default BinaryMode
