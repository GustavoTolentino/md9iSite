import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { BiChevronRightCircle } from 'react-icons/bi';
import { TEXTINSTITUTIONAL } from '../src/components/conteudos/textInstitucional'
import { useRouter } from 'next/router'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'

const institucional: NextPage = () => {
  const router = useRouter()
  console.log(router.locale)
  const getcontent = (key: string) => {
    return router.locale && TEXTINSTITUTIONAL[router.locale] ? TEXTINSTITUTIONAL[router.locale][`${key}`] : null
  }

  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>MD9i - Institucional</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div>
        <Nav />
        <div className='
max-sm:institucional-image-mobile
 sm:institucional-wrapper  sm:bg-[length:100%_100%] sm:h-[100vh] img-institucional-banner'>
          <div className='sm:col-span-1'> </div>
          <div className='sm:col-span-2'>
            <div className='solutions-Title-banner-mobile sm:solutions-Title-banner'>
              {getcontent('titulo')}
            </div>
            <div className='text-white font-light text-lg sm:text-xl 2xl:text-2xl'>{getcontent('subtitulo')}</div>
          </div>
        </div>
        <section className='institucional-section-mobile sm:institucional-section max-sm:mt-[-4%]  sm:bg-slate-100'>
          <div className='img-institucional-grupo img-boilerplate h-[30rem] w-[30rem] sm:institucional-img-womam col-span-1'>
          </div>
          <div className='section-title-text-section-mobile col-span-2 sm:section-title-text-section sm:pr-[20%]'>
            <div className='breakline-institucional-title'>{getcontent('firstSectiontittle')}</div>
            <div className='pt-4 font-tilium'>
              <div className='text-break '>{getcontent('firstSectiontextone')}
              </div>
              <div className='text-break'>
                {getcontent('firstSectiontexttwo')}
              </div>
              <div className='text-break'>
                {getcontent('firstSectiontextthree')}
              </div>
              <div className='text-break'>
                {getcontent('firstSectiontextfour')}
              </div>
            </div>
          </div>
        </section>
        <section className='sm:bg-slate-100 institucional-section-mobile max-sm:mt-[-10%] sm:mt-[-10%] sm:institucional-section px-40 justify-center align-middle items-center '>
          <div className='sectionBird sm:hidden'></div>
          <div className='right-0 text-left  self-center justify-center items-center w-[26rem] 2xl:w-[39rem] pt-10 2xl:pt-5 text-sm pl-10 2xl:pl-14'>
            <div className='breakline-institucional-title'>{getcontent('infoChartOnetittleone')}</div>
            <div className='pt-4 max-sm:pr-6 text-break font-tilium'>{getcontent('infoChartOnetextone')}</div>
            <div className='breakline-institucional-title '>{getcontent('infoChartOnetittletwo')}</div>
            <div className='pt-4 max-sm:pr-6 text-break font-tilium'>{getcontent('infoChartOnetexttwo')}</div>
            <div className='breakline-institucional-title '>{getcontent('infoChartOnetittlethree')}</div>
            <div className='pt-4 max-sm:pr-6 text-break font-tilium'>{getcontent('infoChartOnetextthree')}</div>
          </div>
          <div className='sm:sectionBird'>
          </div>
        </section>
        <section className='max-sm:pt-4 institucional-section-mobile sm:vemser-section sm:flex-row flex-col'>
          <div
            className=' max-sm:vem-ser-text-section-mobile
                        sm:vem-ser-text-section'
          >
            <div className='font-bold text-4xl 2xl:text-6xl py-2 font-tilium'>
              {getcontentCommon('vemSerTittle')}
            </div>
            <div className='py-2 sm:vemser-text 2xl:vemser-text-xl font-tilium'>{getcontentCommon('vemSerTextOne')}</div>
            <div className='sm:vemser-text 2xl:vemser-text-xl font-tilium'>{getcontentCommon('vemSerTextTwo')}</div>

            <a className='text-orange-200 text-lg py-2 font-bold font-tilium sm:text-xl 2xl:text-3xl flex items-center' href={"mailto:info@md9i.com?subject=Candidatura"}><BiChevronRightCircle className='mr-2 h-10 w-10' />{getcontentCommon('candidate')}</a>


          </div>
          <div className=' vemser-img-mobile sm:vemser-img 2xl:vemser-img-xl '>

          </div>
        </section>

        <section className='institucional-section-mobile sm:institucional-section justify-center items-center'>
          <div className=' flex pr-10 col-span-1  self-center align-middle  justify-end '>
            <div className='img-classsection img-boilerplate img-cursos-class-Section-mobile sm:img-cursos-class-Section'></div>
          </div>
          <div className='self-center section-title-text-section-mobile sm:section-title-text-section sm:pr-[16%]'>
            <div className='max-sm:breakline-institucional-title-mobile sm:breakline-institucional-title'>{getcontent('lastsectiontitle')}</div>
            <div className='text-break pt-4'>

              {getcontent('lastsectionsubsectiontextone')}
            </div>

          </div>
        </section>

        <section className='flex flex-col justify-center items-center max-sm:mb-[-7%]'>
          <div className={`max-sm:hidden ${
              router.locale &&
              router.locale === 'pt-BR' ? 'img-tecnico' : router.locale === 'en-US' ? 'img-tecnico-en' : 'img-tecnico-es'
            } img-boilerplate sm:institucional-section-banners-examples`}></div>
          <div className={`sm:hidden ${
              router.locale && 
              router.locale === 'pt-BR' ? 'img-tecnico-mobile' : router.locale === 'en-US' ? 'img-tecnico-mobile-en' : 'img-tecnico-mobile-es'
            } img-boilerplate h-[48rem] w-96`}></div>
        </section>
        <section className='  flex flex-col justify-center items-center'>
          <div className={`max-sm:hidden ${
              router.locale && 
              router.locale === 'pt-BR' ? 'img-business' : router.locale === 'en-US' ? 'img-business-en' : 'img-business-es'
            } img-boilerplate sm:institucional-section-banners-examples`}></div>
          <div className={`sm:hidden ${
              router.locale && 
              router.locale === 'pt-BR' ? 'img-business-mobile' : router.locale === 'en-US' ? 'img-business-mobile-en' : 'img-business-mobile-es'
            } img-boilerplate h-[48rem] w-96`}></div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default institucional