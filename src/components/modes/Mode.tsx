import BinaryMode from './BinaryMode'

interface props {
  mode: string
}

const Mode = ({ mode }: props) => {
  // TODO: make all the other modes

  // Current content
  let content = <></>

  // Set the current content to the mode and render it to the DOM
  switch (mode) {
    case 'binary':
      content = <BinaryMode />
      break
    case 'hex':
      break
    case 'decimal':
      break
  }

  return <div className='justify-self-center pt-24'>{content}</div>
}

export default Mode
