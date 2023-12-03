import BinaryMode from './modes/BinaryMode'
import { HexMode } from './modes/HexMode'

interface Modeprop {
  mode: string
}

const Mode = ({ mode }: Modeprop) => {
  let currentMode = <></>

  // Refactor : find a better way to do this i.e a scaleabale way
  switch (mode) {
    case 'binary':
      currentMode = <BinaryMode />
      break
    case 'hex':
      currentMode = <HexMode />
      break
    case 'addition':
      // TODO : make this before launching
      break
  }

  return <div className='mt-32 grid justify-center'>{currentMode}</div>
}

export default Mode
