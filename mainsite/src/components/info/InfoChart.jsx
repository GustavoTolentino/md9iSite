import React from 'react'

const InfoChart = ({ titleOne, titleTwo, titleThree, textOne, textTwo, textThree }) => {
  return (
    <div className='py-2 px-8 flex flex-col text-xs text-left '>

      {textTwo === undefined ?
        <div className='px-2 '>
          <div className='text-sm font-bold pt-4 2xl:text-2xl '>{titleOne}</div>
          <div className='px-2 2xl:text-lg font-tilium sm:py-4 max-sm:text-lg'>
            {textOne}
          </div>
        </div>
        : <div className='px-2 border-b'>
          <div className='text-sm font-bold py-2 2xl:text-2xl '>{titleOne}</div>
          <div className='px-2 2xl:text-lg font-tilium sm:py-4 max-sm:text-lg'>
            {textOne}
          </div>
        </div>
      }

      {textTwo ? <div className='px-2 border-b'>
        <div className='text-sm font-bold pt-4 2xl:text-2xl'>{titleTwo}</div>
        <div className='px-2 2xl:text-lg font-tilium sm:py-4 max-sm:text-lg'>
          {textTwo}
        </div>
      </div> : ''}
      {textThree ? <div className='px-2 '>
        <div className='text-sm font-bold pt-4 2xl:text-2xl'>{titleThree}</div>
        <div className='px-2 2xl:text-lg font-tilium sm:py-4 max-sm:text-lg'>
          {textThree}
        </div>
      </div> : ''}

    </div>
  )
}
InfoChart.defaultProps = {
  titleOne: undefined,
  titleTwo: undefined,
  titleThree: undefined,
  textOne: undefined,
  textTwo: undefined,
  textThree: undefined

}
export default InfoChart