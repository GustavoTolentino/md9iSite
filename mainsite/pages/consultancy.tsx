import type { NextPage } from 'next'
import Head from 'next/head'
import InfoChart from '../src/components/info/InfoChart'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { TEXTCONSULTANCY } from '../src/components/conteudos/textConsultancy'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'

const Consultancy: NextPage = () => {

  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTCONSULTANCY[router.locale] ? TEXTCONSULTANCY[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - Consultancy</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div className='max-sm:bg-slate-50'>
        <Nav />
        <div className='solutions-banner-style from-[#9E02FD] via-[#9E02FD] to-blue-600 '>

          <div className='solutions-banner-div'>
            <div className='max-sm:solutions-Title-banner-mobile sm:solutions-Title-banner'>
              Consultancy
            </div>
            <div className='max-sm:hidden sm:solutions-SubTitle-banner font-tilium'>{getcontent('subtitulo')}</div>
          </div>
          <div className='max-sm:solutions-banner-cards-wrapper-mobile sm:solutions-banner-cards-wrapper '>


            <div className='solutions-double-card-title'>
              <div className='solutions-title-both-banner '>{getcontent('bannerTextWhatIstittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>{getcontent('bannerTextWhatIstext')}
              </div>
            </div>
            <div className='solutions-double-card-title'>
              <div className='solutions-title-both-banner '>{getcontent('bannerTextwhyHiretittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>{getcontent('bannerTextwhyHiretext')}</div>
            </div>
          </div>
          <a className='service-contract-button' href={"mailto:info@md9i.com?subject=Contratar%20Consultancy"}><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontentCommon('contratarServiço')}</a>
        </div>
        <section className=' solutionsboilerplate 2xl:my-20 2xl:mt-28  sm:mt-28 max-[396px]:mt-[22rem] max-[396px]:mb-[34rem] max-[411px]:mt-[5rem] max-[411px]:mb-[17rem] max-sm:mb-[-20%]  sm:mb-[-20%] 2xl:mb-[-17%]  '>
          <div className='max-sm:flex-col flex w-full h-full justify-center items-center'>
            <div className='text-left max-sm:w-full max-sm:text-start sm:w-1/2 h-full sm:pl-3 max-sm:solutions-section-text-div-mobile'>
              <div className='text-blue-600 max-sm:font-bold sm:solutions-section-text sm:text-3xl max-sm:my-10 max-sm:text-xl sm:solutions-section-text max-sm:w-4/5  sm:w-2/3'>{getcontent('firstSectiontittle')}</div>
              <div className='text-black font-extrabold py-4 sm:w-2/3 max-sm:w-4/5 text-3xl 2xl:text-4xl'>{getcontent('firstSectionsubTittle')}</div>
              <div className='text-black text-xs pb-10 sm:w-2/3 max-sm:text-lg max-sm:w-4/5 2xl:text-lg font-tilium'>{getcontent('firstSectiontext')}</div>

            </div>
            <div className='flex items-center justify-center max-[411px]:my-[6rem] 2xl:mt-[-20rem] sm:pb-96 2xl:pb-72'>
              <div className='max-sm:solutions-section-sub-Image-mobile  sm:solutions-section-sub-Image 2xl:h-[45rem] img-consultancy img-boilerplate'></div>
            </div>

          </div>
        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-sm:mt-[20rem]  '>
          <div className='max-sm:solutions-infobanner-first-mobile sm:solutions-infobanner-first'>
            <div className='sm:solutions-infobanner-chart-one '>
              <div className='sm:solutions-info-chartone-infochart z-10 border-[#9E02FD] bg-white' >
                <InfoChart titleOne={getcontent('infoChartOnetittleone')}
                  titleTwo={getcontent('infoChartOnetittletwo')} titleThree={getcontent('infoChartOnetittlethree')}
                  textOne={getcontent('infoChartOnetextone')}
                  textTwo={getcontent('infoChartOnetexttwo')}
                  textThree={getcontent('infoChartOnetextthree')} />

              </div>

            </div>
            <div className='sm:hidden mt-[-8rem] z-10 flex justify-center items-center pt-5'>
              <div className='max-sm:ux-img-three-plants-mobile'>
              </div>
            </div>

            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle'>
              <div className=' solutions-text-charts max-sm:h-full max-sm:px-10  bg-[#9E02FD] flex items-center'>
                <div className='sm:w-1/2'></div>
                <div className='sm:w-1/2 max-sm:w-full text-left flex flex-col justify-between text-white py-2 2xl:ml-4'>
                  <div className=' solutions-section-text'>{getcontent('infoChartOneextendedcharttittle')}</div>
                  <div className=' py-2 2xl:text-lg font-tilium'>{getcontent('infoChartOneextendedcharttext')}</div>

                </div>
              </div>
              <div className=' max-sm:hidden sm:solutions-text-charts mt-[-8rem] mb-[14rem] 2xl:mt-[-6rem]  flex items-center'>
                <div className='w-1/2'></div>
                <div className='w-1/2 text-left flex flex-col pt-[-14rem] justify-center item-center'>
                  <div className='img-boilerplate self-center img-three-plants pt-[-14rem] w-96 h-80 2xl:w-[72rem] 2xl:h-[30rem]'></div>
                </div>
              </div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className=' solutionsboilerplate sm:mb-[-8rem] max-[396px]:mb-[27rem] max-[411px]:mb-[14rem]'>
          <div className='solutions-infobanner-first'>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle 2xl:gap-y-[12rem]'>
              <div className=' solutions-text-charts max-sm:pr-2 bg-blue-600 flex items-center'>

                <div className='sm:w-1/2 max-sm:w-full text-left flex pl-10 flex-col justify-between sm:py-4'>
                  <div className='text-white solutions-section-text'>{getcontent('infocharttwoextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infocharttwoextendedcharttext')}</div>

                </div>
                <div className='sm:w-1/2'></div>
              </div>
              <div className='max-sm:hidden  sm:solutions-text-charts'>

                <div className='w-1/2 text-left flex flex-col justify-center item-center sm:mt-[-5rem] 2xl:mt-[-11rem]'>
                  <div className='img-boilerplate self-center img-Consultancy-card-hands w-96 h-96 2xl:w-[38rem] 2xl:h-[38rem]'></div>
                </div>
                <div className='sm:w-1/2'></div>
              </div>
            </div>
            <div className='sm:hidden flex flex-col justify-center item-center'>
              <div className='img-boilerplate self-center img-Consultancy-card-hands w-96 h-96 2xl:w-[42rem] 2xl:h-[42rem]'></div>
            </div>
            <div className='sm:solutions-infobanner-chart-two'>
              <div className='sm:w-1/2'></div>
              <div className='sm:solutions-info-charttwo-infochart border-blue-600 bg-white z-10 ' >
                <InfoChart
                  titleOne={getcontent('infocharttwotittleone')}
                  titleTwo={getcontent('infocharttwotittletwo')}
                  titleThree={getcontent('infocharttwotittlethree')}
                  textOne={getcontent('infocharttwotextone')}
                  textTwo={getcontent('infocharttwotexttwo')}
                  textThree={getcontent('infocharttwotextthree')} />

              </div>

            </div>



            <div>

            </div>
          </div>
        </section>
        <section className='w-screen max-sm:h-full bg-slate-100 h-5/6 py-10 max-sm:mt-32'>
          <div className='flex max-sm:flex-col gap-4 justify-center h-full items-center px-4'>
            <div className='w-1/2 max-sm:w-4/5 text-left sm:pl-10 py-2'>
              <div className='font-bold py-2 text-lg 2xl:text-2xl'>
                {getcontentCommon('curtiu')}
              </div>
              <div className='text-sm 2xl:text-lg font-tilium'>
                {getcontentCommon('curtiuText')}
              </div>
            </div>
            <div className='text-left sm:w-1/2 sm:pl-8 h-full max-sm:text-4xl max-sm:py-2 sm:text-7xl text-transparent font-bold bg-gradient-to-r bg-clip-text to-blue-600 from-[#9E02FD]  2xl:text-8xl 2xl:ml-20'
            >Consultancy</div>
          </div>
          <div
            className='bg-gradient-to-r justify-end items-center text-white font-bold pr-6 from-[#9E02FD] to-blue-600 rounded-r-full flex w-5/6 h-14 2xl:h-20 2xl:rounded-r-xl 2xl:text-xl'
          >
            <a href={"mailto:info@md9i.com?subject=Contratar%20Consultancy"} className='flex items-center'>
              <BiChevronRightCircle className='mr-2 h-6 w-6' />{getcontentCommon('contratarServiço')}
            </a>
          </div>

        </section>
      </div>
      <Footer />
    </div >
  )
}

export default Consultancy