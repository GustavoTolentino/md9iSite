import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blockchain from '../../../pages'
type Props = {
  image: string,
  text: string,

}
const SolutionsCard = ({ text, image }: Props) => {

  return (

    <Link href={`/${text}`} className='h-full w-full justify-center items-center'>
      <div className='solutions-normal-styles 2xl:solutions-xl-styles' >
        <div className={`flex w-full h-full ${image} img-boilerplate  items-center justify-center`}>
          {/* <Image className="" src={`/banner345.png`} fill /> */}
          <div className='text-2xl w-full h-full align-middle self-center justify-center items-center text-transparent font-bold'>

          </div>

        </div>
      </div>
    </Link>
  )
}

export default SolutionsCard