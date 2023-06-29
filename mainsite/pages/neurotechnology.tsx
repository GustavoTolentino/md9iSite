import type { NextPage } from 'next'
import Head from 'next/head'

import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import InfoChart from '../src/components/info/InfoChart'
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { TEXTNEUROTECH } from '../src/components/conteudos/textNeurotech'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'


const Neurotechnology: NextPage = () => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTNEUROTECH[router.locale] ? TEXTNEUROTECH[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - Neurotechnology</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div className='max-sm:bg-slate-50'>
        <Nav />
        <div className='solutions-banner-style  from-[#031C56] via-[#031C56] to-[#8511E8] '>

          <div className='solutions-banner-div'>
            <div className='max-sm:solutions-Title-banner-mobile sm:solutions-Title-banner'>
              Neurotechnology
            </div>
            <div className='max-sm:hidden sm:solutions-SubTitle-banner font-tilium'>
              {getcontent('subtitulo')}</div>
          </div>
          <div className='max-sm:solutions-banner-cards-wrapper-mobile sm:solutions-banner-cards-wrapper'>


            <div className='solutions-double-card-title'>
              <div className='solutions-title-both-banner '>{getcontent('bannerTextWhatIstittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>
                {getcontent('bannerTextWhatIstext')}
              </div>
            </div>
            <div className='solutions-double-card-title'>
              <div className='solutions-title-both-banner '>
                {getcontent('bannerTextwhyHiretittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>
                {getcontent('bannerTextwhyHiretext')}
                .</div>
            </div>
          </div>
          <a className='service-contract-button' href={"mailto:info@md9i.com?subject=Contratar%20Neurotechnology"}><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontentCommon('contratarServiço')}</a>
        </div>
        <section className=' solutionsboilerplate 2xl:my-22 2xl:mt-24 sm:mb-[-12%] 2xl:mb-[-6%] max-[396px]:mb-[65rem] max-[396px]:mt-[46rem] max-[411px]:mb-[30rem] max-[411px]:mt-[28rem] max-sm:mt-[22rem] sm:mt-24' >
          <div className='max-sm:flex-col flex w-full h-full justify-center items-center'>
            <div className='text-left max-sm:w-full max-sm:text-start sm:w-1/2 h-full sm:pl-3 max-sm:solutions-section-text-div-mobile'>
              <div className='text-[#1778FE] max-sm:font-bold sm:solutions-section-text sm:text-3xl max-sm:my-10 max-sm:text-xl sm:solutions-section-text max-sm:w-4/5 sm:w-2/3'>
                {getcontent('firstSectiontittle')}</div>
              <div className='text-black font-extrabold py-4 w-4/5 sm:w-2/3 text-4xl 2xl:text-5xl'>
                {getcontent('firstSectionsubTittle')}</div>
              <div className='text-black text-xs py-10 w-4/5 sm:w-2/3 2xl:text-lg font-tilium max-sm:text-lg'>
                {getcontent('firstSectiontext')}</div>

            </div>
            <div className='flex items-end justify-center max-sm:mt-[35%] sm:mt-[-10rem] 2xl:mt-[-20rem] max-[396px]:mb-[26rem] max-[396px]:mt-[15rem] max-[411px]:mb-[6rem] max-[411px]:mt-[10rem]'>
              <div className='max-sm:solutions-section-sub-Image-mobile sm:solutions-section-sub-Image img-neurotechnology'></div>
            </div>

          </div>
        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-sm:mt-[60rem]  '>
          <div className='max-sm:solutions-infobanner-first-mobile sm:solutions-infobanner-first'>
            <div className='sm:solutions-infobanner-chart-one  '>
              <div className='sm:solutions-info-chartone-infochart  2xl:p-[-1rem] 2xl:h-4/5 border-[#031C56] bg-white z-10 ' >
                <InfoChart
                  titleOne={getcontent('infoChartOnetittleone')}
                  titleTwo={getcontent('infoChartOnetittletwo')}
                  titleThree={getcontent('infoChartOnetittlethree')}
                  textOne={getcontent('infoChartOnetextone')}
                  textTwo={getcontent('infoChartOnetexttwo')}
                  textThree={getcontent('infoChartOnetextthree')}
                />

              </div>

            </div>
            <div className='sm:hidden flex justify-center items-center'>
              <div className='max-sm:ux-img-img-brainstock'>
              </div>
            </div>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle max-[396px]:h-2/4
'>
              <div className=' solutions-text-charts max-sm:px-10 bg-[#031C56] flex items-center ' >
                <div className='sm:w-1/2'></div>
                <div className='sm:w-1/2 max-sm:w-full text-left flex flex-col justify-between text-white py-2 2xl:ml-4'>
                  <div className=' solutions-section-text'>
                    {getcontent('infoChartOneextendedcharttittle')}
                  </div>
                  <div className=' py-2 2xl:text-lg font-tilium'>
                    {getcontent('infoChartOneextendedcharttext')}
                  </div>

                </div>
              </div>
              <div className='max-sm:hidden sm:solutions-text-charts 2xl:mt-[4rem]'>
                <div className='w-1/2'></div>
                <div className='w-1/2 text-left flex flex-col justify-center item-center '>
                  <div className='img-boilerplate self-center img-brainstock w-[30rem] h-[30rem] 2xl:w-[50rem] 2xl:h-[30rem]'></div>
                </div>
              </div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-[396px]:mt-[20rem]
max-[411px]:mt-[13rem]
max-sm:mt-[6rem] '>
          <div className='solutions-infobanner-first max-sm:justify-center max-sm:items-center'>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle 2xl:gap-y-[12rem]'>
              <div className=' solutions-text-charts max-sm:pr-2 bg-[#8511E8]'>

                <div className='sm:w-1/2 max-sm:w-full text-left flex pl-10 flex-col justify-between'>
                  <div className='text-white solutions-section-text'>
                    {getcontent('infocharttwoextendedcharttittle')}
                  </div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>
                    {getcontent('infocharttwoextendedcharttext')}
                  </div>

                </div>
                <div className='sm:w-1/2'></div>
              </div>
            </div>


            <div className='sm:hidden flex flex-col justify-center item-center '>
              <div className='img-boilerplate self-center  img-circuit-neuro-card w-96 h-96 2xl:w-[36rem] 2xl:h-[36rem]'></div>
            </div>

            <div className='sm:solutions-infobanner-chart-two'>
              <div className='sm:w-1/2'></div>
              <div className='sm:solutions-info-charttwo-infochart  border-[#8511E8] bg-white z-10 ' >
                <InfoChart
                  titleOne={getcontent('infocharttwotittleone')}
                  titleTwo={getcontent('infocharttwotittletwo')}
                  titleThree={getcontent('infocharttwotittlethree')}
                  textOne={getcontent('infocharttwotextone')}
                  textTwo={getcontent('infocharttwotexttwo')}
                  textThree={getcontent('infocharttwotextthree')} />
              </div>

            </div>
            <div className=' max-sm:hidden sm:solutions-text-charts sm:mb-[10%] sm:mt-[-3%]'>

              <div className='w-1/2 text-left flex flex-col justify-center item-center 2xl:pb-32'>
                <div className='img-boilerplate self-center img-circuit-neuro-card w-96 h-96 2xl:w-[36rem] 2xl:h-[36rem]'></div>
              </div>
              <div className='w-1/2'></div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className='max-sm:solutions-extrainfo-chart-section-mobile sm:solutions-extrainfo-chart-section 
max-sm:py-60'>
          <div>
            <div className='text-left sm:pl-10 max-sm:flex max-sm:flex-col max-sm:my-10 max-sm:pr-5 max-sm:pl-10'>
              <div className='sm:pl-5 font-bold justify-center max-sm:items-center flex flex-col max-sm:text-left '>
                <div className='text-[#031C56] self-start 2xl:text-2xl sm:pt-4'>
                  {getcontent('lastsectiontitle')}</div>
                <div className=' w-full sm:py-2 flex gap-5'>
                  <div className='w-2/3 py-2 sm:pr-28 sm:py-6'>

                    <div className='font-bold text-2xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitleone')}
                    </div>
                    <div className='font-bold text-2xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitletwo')}
                    </div>
                    <div className='font-bold text-2xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitlethree')}
                    </div>
                  </div>

                  <div className='max-sm:hidden h-full w-1/2 2xl:ml-1 ml-10'>
                    <div className='img-neurotecimage absolute img-boilerplate w-96 h-72 2xl:w-[36rem] 2xl:h-[27rem]'></div>
                  </div>
                </div>
              </div>
              <div className='bg-white h-1/3 w-full flex'>

                <div className='text-xs sm:w-1/2 sm:p-5   '>
                  <div className='flex justify-between pt-2 p-2'>
                  </div>
                  <div className='2xl:text-lg font-tilium'>
                    <div className='flex flex-col w-full'>
                      <div className='2xl:text-lg font-tilium  inline'>
                        <div className='font-bold w-full '>
                          {getcontent('lastsectionsubsectiontitleone')}
                        </div>
                        {getcontent('lastsectionsubsectiontextone')}
                      </div>
                      <div className='2xl:text-lg font-tilium inline'>
                        <div className='font-bold w-full'>
                          {getcontent('lastsectionsubsectiontitletwo')}</div>
                        {getcontent('lastsectionsubsectiontexttwo')}
                      </div>
                      <div className='2xl:text-lg font-tilium  align-middle items-baseline'>
                        <div className='font-bold w-full'>
                          {getcontent('lastsectionsubsectiontitlethree')}</div>
                        {getcontent('lastsectionsubsectiontextthree')}
                      </div>
                      <div className='2xl:text-lg font-tilium inline'>
                        <div className='font-bold w-full'>
                          {getcontent('lastsectionsubsectiontitlefour')} </div>
                        {getcontent('lastsectionsubsectiontextfour')}
                      </div>

                      <div className='2xl:text-lg font-tilium inline'>
                        <div className='font-bold w-full'>
                          {getcontent('lastsectionsubsectiontitlefive')}</div>
                        {getcontent('lastsectionsubsectiontextfive')}
                      </div>
                    </div>
                  </div>

                </div>




              </div>


              <div className='sm:hidden h-full  mb-20 mt-2  sm:bg-slate-50 max-sm:bg-slate-100'>
                <div className='img-neurotecimage absolute img-boilerplate w-80 h-72 '></div>
              </div>
            </div>

          </div>

        </section>
        <section className='w-screen max-sm:h-full bg-slate-100 h-5/6 py-10'>
          <div className='flex max-sm:flex-col gap-4 justify-center h-full items-center px-4 sm:my-4'>
            <div className='w-1/2 max-sm:w-4/5 text-left sm:pl-10 py-2'>
              <div className='font-bold py-2 text-lg 2xl:text-2xl'>
                {getcontentCommon('curtiu')}
              </div>
              <div className='text-sm 2xl:text-lg font-tilium sm:pb-10'>{getcontentCommon('curtiuText')}
              </div>
            </div>
            <div className='text-left sm:w-1/2  h-[8rem] max-sm:text-4xl max-sm:py-2 sm:text-7xl text-transparent font-bold bg-gradient-to-r bg-clip-text to-[#8511E8] from-[#031C56] 2xl:text-8xl '
            >Neurotechnology</div>
          </div>
          <div
            className='bg-gradient-to-r justify-end items-center text-white font-bold pr-6 from-[#031C56] to-[#8511E8] rounded-r-full flex w-[93%] h-14 2xl:h-20 2xl:rounded-r-xl 2xl:text-xl'
          >
            <a href={"mailto:info@md9i.com?subject=Contratar%20Neurotechnology"} className='flex items-center'>
              <BiChevronRightCircle className='mr-2 h-6 w-6' />{getcontentCommon('contratarServiço')}
            </a>
          </div>

        </section>
      </div>
      <Footer />
    </div >
  )
}

export default Neurotechnology