import { useState } from 'react'

interface tableprop {
  headrow: Array<JSX.Element>
  bottomrow: Array<JSX.Element>
}

const HexMode = () => {
  // TODO : generate question based on the state

  // There are two different modes in binary (Dec -> Bin && Bin -> Dec)
  // This state is for that
  const [randomMode, setRandomMode] = useState(Math.round(Math.random()))

  // Return a content based on the current mode
  return (
    <>
      <p>Question is this a dummy text?</p>
      {randomMode == 0 ? <HexToBinary /> : <BinaryToHex />}
    </>
  )
}

export default HexMode

// Question field Dec -> Bin ===============================================================================================
const HexToBinary = () => {
  // Data for the top and bottom row
  const top = []
  const bottom = []

  for (let i = 0; i < 2; i++) {
    top.push(
      <th colSpan={4} className='h-12 border-2 border-black'>
        A
      </th>,
    )
  }

  // Push some data and Bits to be fliped
  for (let i = 0; i < 8; i++) {
    bottom.push(
      <td className='h-12 w-16 border-2 border-black p-0'>
        <Bit />
      </td>,
    )
  }
  return <Maketable headrow={top} bottomrow={bottom} />
}

// Question field Bin -> Dec ===============================================================================================
const BinaryToHex = () => {
  // Data for the top and bottom row
  const top = []
  const bottom = []

  // TODO : generate the question and push that data to the array
  for (let i = 0; i < 8; i++) {
    top.push(<th className='h-12 w-16 border-2 border-black'>{i}</th>)
  }

  for (let i = 0; i < 2; i++) {
    bottom.push(
      <td
        colSpan={4}
        className='h-12  border-2 border-black'
      >
        <input type='text' className='border-2 border-black' maxLength={3} />
      </td>,
    )
  }

  // Render the array and the input answer field
  return (
    <div className='flex'>
      <Maketable headrow={top} bottomrow={bottom} />
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
