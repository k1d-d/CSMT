interface props {
  shown: boolean
}

const AnswerFunctions = ({ shown }: props) => {
  // TODO: Refactor

  return (
    <div className='pt-'>
      {!shown ? (
        // Submit and Show -> Buttons ======================================================================================
        <div className='pt-10'>
          <button className='rounded-3xl border-2 border-black px-4 py-2'>
            Submit
          </button>
          <button className='rounded-3xl border-2 border-black px-4 py-2'>
            Show
          </button>
        </div>
      ) : (
        // Next -> Button ==================================================================================================
        <button className='rounded-3xl border-2 border-black px-4 py-2'>
          Next
        </button>
      )}
    </div>
  )
}

export default AnswerFunctions
