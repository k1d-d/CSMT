import { useState } from 'react'

interface tableprop {
  headrow: Array<JSX.Element>
  bottomrow: Array<JSX.Element>
}

const BinaryMode = () => {
  // TODO : generate question based on the state

  // There are two different modes in binary (Dec -> Bin && Bin -> Dec)
  // This state is for that
  const [randomMode, setRandomMode] = useState(Math.round(Math.random()))

  // Return a content based on the current mode
  return (
    <>
      <p>Question is this a dummy text?</p>
      {randomMode == 0 ? <DecimalToBinary /> : <BinaryToDecimal />}
    </>
  )
}

export default BinaryMode

// Question field Dec -> Bin ===============================================================================================
const DecimalToBinary = () => {
  // Data for the top and bottom row
  const top = []
  const bottom = []

  // Push some data and Bits to be fliped
  for (let i = 0; i < 8; i++) {
    top.push(<th className='h-12 w-16 border-2 border-black'>{i}</th>)
    bottom.push(
      <td className='h-12 w-16 border-2 border-black p-0'>
        <Bit />
      </td>,
    )
  }
  return <Maketable headrow={top} bottomrow={bottom} />
}

// Question field Bin -> Dec ===============================================================================================
const BinaryToDecimal = () => {
  // Data for the top and bottom row
  const top = []
  const bottom = []

  // TODO : generate the question and push that data to the array
  for (let i = 0; i < 8; i++) {
    top.push(<th className='h-12 w-16 border-2 border-black'>{i}</th>)
    bottom.push(
      <td className='h-12 w-16 border-2 border-black text-center'>
        {Math.round(Math.random())}
      </td>,
    )
  }

  // Render the array and the input answer field
  return (
    <div className='flex'>
      <Maketable headrow={top} bottomrow={bottom} />
      <div className='w-12'></div>
      <Inputfield />
    </div>
  )
}

// =========================================================================================================================
const Maketable = ({ headrow, bottomrow }: tableprop) => {
  return (
    <table className='border-2 border-black'>
      <thead>
        <tr>{headrow}</tr>
      </thead>
      <tbody>
        <tr>{bottomrow}</tr>
      </tbody>
    </table>
  )
}

const Bit = () => {
  // The current pos of the bit
  const [pos, setPos] = useState(-1)

  // Flip the bit on pressing it
  const flip = () => {
    if (pos == -1) setPos(0)
    else setPos((pos + 1) % 2)
  }

  return (
    <button className='h-12 w-16' onClick={flip}>
      {pos > -1 && pos}
    </button>
  )
}

const Inputfield = () => {
  return (
    <div className=' grid'>
      <div className='inline-grid h-12 items-center bg-black text-center text-white'>
        Answer
      </div>
      <input
        className='h-12 border-2 border-black text-center'
        type='text'
        maxLength={3}
      />
    </div>
  )
}
