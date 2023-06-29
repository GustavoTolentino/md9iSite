import type { NextPage } from 'next'
import Head from 'next/head'

import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import InfoChart from '../src/components/info/InfoChart'
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { TEXTOUTSOURCING } from '../src/components/conteudos/textOutSourcing'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'

const outsourcing: NextPage = () => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTOUTSOURCING[router.locale] ? TEXTOUTSOURCING[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - Outsourcing</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div className='max-sm:bg-slate-50'>
        <Nav />
        <div className='solutions-banner-style from-orange-500  via-orange-200 to-orange-200 '>

          <div className='solutions-banner-div'>
            <div className=' max-sm:solutions-Title-banner-mobile sm:solutions-Title-banner'>
              Outsourcing
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
              <div className='solutions-title-both-banner '>{getcontent('bannerTextwhyHiretittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>
                {getcontent('bannerTextwhyHiretext')}
              </div>
            </div>
          </div>
          <a className='service-contract-button' href={"mailto:info@md9i.com?subject=Contratar%20Outsourcing"}><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontentCommon('contratarServiço')}</a>
        </div>
        <section className='solutionsboilerplate 2xl:my-12   2xl:mt-28 sm:mb-[-16%] 2xl:mb-[-10%] max-[396px]:mb-[50rem] max-[396px]:mt-[38rem] max-[411px]:mb-[30rem] max-[411px]:mt-[28rem] max-sm:mt-[22rem]  sm:mt-20
max-sm:mb-[95%]'>
          <div className='max-sm:flex-col flex w-full h-full justify-center items-center'>
            <div className='text-left max-sm:w-full max-sm:text-start sm:w-1/2 h-full sm:pl-3 max-sm:solutions-section-text-div-mobile'>
              <div className='text-orange-200 max-sm:font-bold sm:solutions-secttext-xs pb-10 sm:w-2/3 max-sm:w-4/5 sm:text-3xl font-tiliumion-text max-sm:my-10 max-sm:text-xl sm:solutions-section-text sm:w-2/3 max-sm:w-4/5'>{getcontent('firstSectiontittle')}</div>
              <div className='text-black font-extrabold sm:w-2/3 max-sm:w-4/5 py-5 text-3xl 2xl:text-4xl'> {getcontent('firstSectionsubTittle')}</div>
              <div className='text-black text-xs pb-10 sm:w-2/3 max-sm:w-4/5 2xl:text-lg max-sm:text-lg font-tilium'>{getcontent('firstSectiontext')}</div>

            </div>
            <div className='flex items-center justify-center sm:pb-80 2xl:pb-72 max-sm:mt-[50%] max-[396px]:mb-[5rem] max-[396px]:mt-[18rem] max-[411px]:mb-[1rem] max-[411px]:mt-[12rem] '>
              <div className='max-sm:solutions-section-sub-Image-mobile sm:solutions-section-sub-Image img-outsourcing'></div>
            </div>

          </div>
        </section>
        <section className='solutionsboilerplate sm:mb-[-5rem] max-sm:mt-[36rem]'>
          <div className='max-sm:solutions-infobanner-first-mobile sm:solutions-infobanner-first'>
            <div className='sm:solutions-infobanner-chart-one '>
              <div className='sm:solutions-info-chartone-infochart border-orange-200 bg-white z-10 ' >
                <InfoChart titleOne={getcontent('infoChartOnetittleone')}
                  titleTwo={getcontent('infoChartOnetittletwo')}
                  titleThree={getcontent('infoChartOnetittlethree')}
                  textOne={getcontent('infoChartOnetextone')}
                  textTwo={getcontent('infoChartOnetexttwo')}
                  textThree={getcontent('infoChartOnetextthree')} />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <div className='max-sm:ux-img-img-groupout'>
              </div>
            </div>

            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle'>
              <div className='solutions-text-charts max-sm:px-10 bg-orange-200'>
                <div className='sm:w-1/2'></div>
                <div className='sm:w-1/2 max-sm:w-full text-left flex flex-col justify-between py-2 2xl:ml-4'>
                  <div className='text-white solutions-section-text'>{getcontent('infoChartOneextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infoChartOneextendedcharttext')}</div>

                </div>
              </div>
              <div className='max-sm:hidden sm:solutions-text-charts flex items-center mt-[-4rem]'>
                <div className='w-1/2'></div>
                <div className='w-1/2 text-left flex flex-col justify-center item-center'>
                  <div className='img-boilerplate self-center img-groupout w-96 h-60 2xl:w-[36rem] 2xl:h-96'></div>
                </div>
              </div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className=' solutionsboilerplate sm:mb-[-4rem] max-[396px]:mb-[35rem] max-[411px]:mb-[23rem] max-sm:mb-[-7rem] '>
          <div className='solutions-infobanner-first'>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle 2xl:gap-y-[12rem]'>
              <div className='solutions-text-charts max-sm:pr-2 bg-orange-500'>

                <div className='sm:w-1/2 max-sm:w-full text-left flex pl-10 flex-col justify-between'>
                  <div className='text-white solutions-section-text'>{getcontent('infocharttwoextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infocharttwoextendedcharttext')}</div>

                </div>
                <div className='sm:w-1/2'></div>
              </div>
              <div className='max-sm:hidden solutions-text-charts'>

                <div className='w-1/2 text-left flex flex-col justify-center item-center mt-[-13%]'>
                  <div className='img-boilerplate self-center img-Outsourcing-card-man w-96 h-96 2xl:w-[42rem] 2xl:h-[42rem]'></div>
                </div>
                <div className='w-1/2'></div>
              </div>
            </div>
            <div className='sm:hidden text-left flex flex-col justify-center item-center'>
              <div className='img-boilerplate self-center img-Outsourcing-card-man w-96 h-96'></div>
            </div>
            <div className='sm:solutions-infobanner-chart-two'>
              <div className='sm:w-1/2'></div>
              <div className='sm:solutions-info-charttwo-infochart border-orange-500 bg-white z-10 ' >
                <InfoChart titleOne={getcontent('infocharttwotittleone')}
                  titleTwo={getcontent('infocharttwotittletwo')}
                  titleThree={getcontent('infocharttwotittlethree')}
                  textOne={getcontent('infocharttwotextone')}
                  textTwo={getcontent('infocharttwotexttwo')}
                  textThree={getcontent('infocharttwotextthree')} />
              </div>

            </div>
          </div>

        </section>
        <section className=' sm:bg-slate-50 max-sm:h-full max-sm:solutions-extrainfo-chart-section-mobile sm:solutions-extrainfo-chart-section max-sm:mt-[88%]  '>
          <div>
            <div className='text-left sm:pl-10 max-sm:flex max-sm:flex-col max-sm:my-10 max-sm:pr-5 max-sm:pl-10'>
              <div className='sm:pl-5 '>
                <div className='font-bold text-orange-200 2xl:text-2xl sm:pt-4'>{getcontent('lastsectiontitle')}</div>
                <div className='sm:py-2 flex gap-5'>
                  <div className='py-2 sm:pr-28 sm:my-4'>
                    <div className='font-bold text-2xl  2xl:text-3xl'>
                      {getcontent('lastsectionsubtitleone')}
                    </div>

                  </div>
                  <div className='max-sm:hidden h-full w-1/2 2xl:ml-96 sm:ml-40'>
                    <div className='img-outsourcing-man absolute img-boilerplate  sm:w-[27rem] sm:h-72  2xl:w-[28rem] 2xl:h-[24rem] '></div>
                  </div>
                </div>
              </div>
              <div className='sm:bg-white h-1/3 w-full flex sm:mt-4'>

                <div className='text-xs sm:w-1/2 sm:p-5  '>
                  <div className='flex flex-col'>
                    <div className='2xl:text-lg font-tilium'>
                      {getcontent('lastsectionsubsectiontextfive')}
                    </div>
                    <div className='2xl:text-lg pl-2 font-tilium'>
                      &#x2022; {getcontent('lastsectionsubsectiontextone')}
                    </div>
                    <div className='2xl:text-lg pl-2 font-tilium'>
                      &#x2022; {getcontent('lastsectionsubsectiontexttwo')}
                    </div>
                    <div className='2xl:text-lg pl-2 font-tilium'>
                      &#x2022; {getcontent('lastsectionsubsectiontextthree')}
                    </div>
                    <div className='2xl:text-lg pl-2 font-tilium'>
                      &#x2022; {getcontent('lastsectionsubsectiontextfour')}
                    </div>


                  </div>
                  <div className='sm:hidden w-full py-4 bg-white flex items-center justify-center'>

                  </div>

                </div>
              </div>
              <div className='sm:hidden max-sm:flex max-sm:justify-center h-full w-full mb-20 sm:bg-slate-50 max-sm:bg-slate-100'>
                <div className='img-outsourcing-man absolute img-boilerplate w-72 h-48 2xl:w-[27rem] 2xl:h-72'></div>
              </div>


            </div>
            {/* ------------------------- */}
            <div>
            </div>
          </div>

        </section>
        <section className='w-screen max-sm:h-full bg-slate-100 h-5/6 sm:pt-[8%] py-10'>
          <div className='flex max-sm:flex-col gap-4 justify-center h-full items-center px-4 sm:py-10'>
            <div className='w-1/2 max-sm:w-4/5 text-left sm:pl-10 py-2'>
              <div className='font-bold py-2 text-lg 2xl:text-2xl'>
                {getcontentCommon('curtiu')}
              </div>
              <div className='text-sm 2xl:text-lg font-tilium'>{getcontentCommon('curtiuText')}</div>

            </div>
            <div className='text-left sm:w-1/2 sm:pl-8 h-full max-sm:text-4xl max-sm:py-2 sm:text-7xl text-transparent font-bold bg-gradient-to-r bg-clip-text from-orange-500 to-orange-200 2xl:text-8xl 2xl:ml-20'
            >Outsourcing</div>
          </div>
          <div
            className='bg-gradient-to-r justify-end items-center text-white font-bold pr-6 from-orange-500 to-orange-200 rounded-r-3xl flex w-5/6 h-14 2xl:h-20 2xl:rounded-r-xl 2xl:text-xl'
          >
            <a href={"mailto:info@md9i.com?subject=Contratar%20Outsourcing"} className='flex items-center'>
              <BiChevronRightCircle className='mr-2 h-6 w-6' /> {getcontentCommon('contratarServiço')}
            </a>
          </div>

        </section>
      </div>
      <Footer />
    </div >
  )
}

export default outsourcing