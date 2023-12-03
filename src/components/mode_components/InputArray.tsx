// TODO : make the values in the inputs parse together

interface Inputprops {
  len: number
  text: boolean
}

const Inputarray = ({ len, text }: Inputprops) => {
  const inputs = []

  // Make as inputs on demand
  for (let i = 0; i < len; i++) {
    if (text) {
      // Text Input <----------
      inputs.push(
        <td colSpan={4} className='border-accent h-12 w-16 border-2'>
          <span className='flex justify-center'>
            <input
              className='border-accent w-20 border-b-2 bg-transparent'
              type='text'
              maxLength={1}
            />
          </span>
        </td>,
      )
    } else {
      // Click Input <----------
      inputs.push(
        <td className='border-accent h-12 w-16 border-2'>
          <Bit key={i} />
        </td>,
      )
    }
  }

  return <>{inputs}</>
}

const Bit = () => {
  const state = -1

  // TODO: make state switch
  return (
    <button className='bg-primary h-full w-full'>{state > -1 && state}</button>
  )
}

export default Inputarray
