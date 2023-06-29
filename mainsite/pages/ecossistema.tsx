import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { BiChevronRightCircle } from "react-icons/bi";
import { TEXTECOSSISTEM } from '../src/components/conteudos/textEcossistem'
import { useRouter } from 'next/router'




const ecossistema: NextPage = () => {
  const router = useRouter()
  console.log(router.locale)
  const getcontent = (key: string) => {
    return router.locale && TEXTECOSSISTEM[router.locale] ? TEXTECOSSISTEM[router.locale][`${key}`] : null
  }

  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - Ecossistema</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>
      <div>
        <Nav />
        <div className='homepage-mobile-wrapper max-sm:h-[60vh] max-2xl:sm:bg-[length:1920px_720px] max-2xl:sm:bg-[60%] 2xl:h-[68vh] sm:homepage-wrapper sm:pl-14 sm:items-start img-ecossistema'>
          {/* <Image className="" src={"/banner345.png"} fill /> */}
          <div className='font-extrabold text-6xl 2xl:text-[5rem] text-white'>
            {getcontent(`subtitulo`)}
          </div>
        </div>
        <section className='ecossystem-subtitle-section-mobile max-sm:mt-[-5%] sm:ecossystem-subtitle-section ecoSection'>
          <div className='max-sm:ecossystem-subtitle-text-mobile sm:ecossystem-subtitle-text font-tilium'>
            {getcontent('text')}
          </div>
        </section>
        <section className='ecossystem-text-section max-sm:mt-[-4%] '>

          <div className='sm:ecossystem-text-div'>
            <div className='ecossystem-titles'>
              <div>
                {getcontent('whoknows')}
              </div>

            </div>
            <div className='sm:ecossystem-lines sm:border-b-blue-400 sm:w-[40rem] sm:2xl:w-[60rem]'></div>
            <div className='ecossystem-texts font-tilium'>
              <div>
                {getcontent('whoknowsText')}
              </div>

            </div>
            <div className='max-sm:ecossystem-business-image-mobile'></div>
            <div className='ecossystem-titles'>
              <div>
                {getcontent('partners')}
              </div>

            </div>
            <div className='sm:ecossystem-lines sm:border-b-blue-100 sm:w-[46rem] sm:2xl:w-[69rem]'>
            </div>
            <div className='ecossystem-texts font-tilium'>
              <div>
                {getcontent('partnersText')}
              </div>

            </div>


          </div>
          <div className='sm:ecossystem-business-image 2xl:my-20'>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { locale },
    revalidate: 3600,
  };
}

export default ecossistema