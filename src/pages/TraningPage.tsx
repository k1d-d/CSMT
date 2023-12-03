import Herobar from '../components/Herobar'
import Mode from '../components/modes/Mode'
import AnswerFunctions from '../components/AnswerFunctions'

const TrainingPage = () => {
  return (
    <div className='grid justify-center justify-items-center p-24'>
      <Herobar points={0} mode='hex' />
      <Mode mode='hex' />
      <AnswerFunctions shown={false} />
    </div>
  )
}

export default TrainingPage
