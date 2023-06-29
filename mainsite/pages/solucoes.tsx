import type { NextPage } from 'next'
import Head from 'next/head'
import InfoChart from '../src/components/info/InfoChart'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import SolutionsCard from '../src/components/solutionsCard/SolutionsCard'
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { TEXTDEVELOPMENT } from '../src/components/conteudos/textDevelopment'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'
const solucoes: NextPage = () => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTDEVELOPMENT[router.locale] ? TEXTDEVELOPMENT[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - Development</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div className='max-sm:bg-slate-50'>
        <Nav />
        <div className='solutions-banner-style from-blue-500 to-blue-100 '>

          <div className='solutions-banner-div'>
            <div className='max-sm:solutions-Title-banner-mobile sm:solutions-Title-banner'>
              Development
            </div>
            <div className='max-sm:hidden sm:solutions-SubTitle-banner font-tilium'>
              {getcontent('subtitulo')}
            </div>
          </div>
          <div className='max-sm:solutions-banner-cards-wrapper-mobile sm:solutions-banner-cards-wrapper'>
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
          <a className='service-contract-button' href={"mailto:info@md9i.com?subject=Contratar%20Development"}><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontentCommon('contratarServiço')}</a>
        </div>

        <section className='solutionsboilerplate 2xl:my-32 2xl:mb-[-17%] max-[396px]:mt-[22rem] max-[396px]:mb-[34rem] max-[411px]:mt-[7rem] max-[411px]:mb-[17rem] max-sm:mb-[-20%] sm:mb-[-8%]  sm:mt-24 '>
          <div className='max-sm:flex-col flex w-full h-full justify-center items-center'>
            <div className='text-left max-sm:w-full max-sm:text-start sm:w-1/2 h-full sm:pl-3 max-sm:solutions-section-text-div-mobile'>
              <div className='text-blue-100 max-sm:font-bold sm:text-3xl sm:solutions-section-text max-sm:my-10 max-sm:text-xl sm:solutions-section-text sm:w-2/3 max-sm:w-4/5'>{getcontent('firstSectiontittle')}</div>
              <div className='text-black font-extrabold sm:w-2/3 max-sm:w-4/5 py-10 text-3xl 2xl:text-4xl'>{getcontent('firstSectionsubTittle')}</div>
              <div className='text-blacktext-xs pb-10 sm:w-2/3 max-sm:w-4/5 max-sm:text-lg 2xl:text-lg font-tilium'>{getcontent('firstSectiontext')}</div>

            </div>
            <div className='flex items-center justify-center 2xl:mt-[-24rem] sm:pb-[14rem] 2xl:pb-52 max-[396px]:mb-[20rem]'>
              <div className='max-sm:solutions-section-sub-Image-mobile sm:solutions-section-sub-Image img-developmnent'></div>
            </div>

          </div>
        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-sm:mt-[47rem]'>
          <div className='max-sm:solutions-infobanner-first-mobile sm:solutions-infobanner-first'>
            <div className='sm:solutions-infobanner-chart-one '>
              <div className='sm:solutions-info-chartone-infochart border-blue-100 bg-white z-10 ' >
                <InfoChart titleOne={getcontent('infoChartOnetittleone')}
                  titleTwo={getcontent('infoChartOnetittletwo')} titleThree={getcontent('infoChartOnetittlethree')}
                  textOne={getcontent('infoChartOnetextone')}
                  textTwo={getcontent('infoChartOnetexttwo')}
                  textThree={getcontent('infoChartOnetextthree')} />

              </div>

            </div>
            <div className='flex justify-center items-center'>
              <div className='max-sm:ux-ui-mobile'>
              </div>
            </div>

            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle'>
              <div className='solutions-text-charts max-sm:px-10  bg-blue-100'>
                <div className='sm:w-1/2'></div>
                <div className='sm:w-1/2 max-sm:w-full text-left flex flex-col justify-between  2xl:ml-4'>
                  <div className='text-white solutions-section-text'>{getcontent('infoChartOneextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infoChartOneextendedcharttext')}</div>

                </div>
              </div>
              <div className='max-sm:hidden sm:solutions-text-charts flex items-center'>
                <div className='w-1/2'></div>
                <div className='w-1/2 text-left flex flex-col justify-center item-center'>
                  <div className='img-boilerplate self-center img-uxui w-80 h-80 2xl:w-[40rem] 2xl:h-[40rem]'></div>
                </div>
              </div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-[396px]:mb-[23rem] max-[411px]:mb-[10rem] max-sm:mb-[1rem]'>
          <div className='solutions-infobanner-first'>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle 2xl:gap-y-[12rem]'>
              <div className='solutions-text-charts max-sm:pr-2 bg-blue-500'>

                <div className='sm:w-1/2 max-sm:w-full text-left flex pl-10 flex-col justify-between'>
                  <div className='text-white font-bold text-lg'>{getcontent('infocharttwoextendedcharttittle')}</div>
                  <div className='text-white py-2 font-tilium'>{getcontent('infocharttwoextendedcharttext')}</div>

                </div>
                <div className='sm:w-1/2'></div>
              </div>
              <div className='max-sm:hidden sm:solutions-text-charts  '>

                <div className='w-1/2 text-left flex flex-col justify-center item-center'>
                  <div className='img-boilerplate self-center img-computacao-persuasiva w-96 h-96 mt-6 2xl:w-[48rem] 2xl:h-[48rem]'></div>
                </div>
                <div className='sm:w-1/2'></div>
              </div>
            </div>

            <div className='sm:hidden flex flex-col justify-center item-center'>
              <div className='img-boilerplate self-center img-computacao-persuasiva w-80 h-80 '></div>
            </div>

            <div className='sm:solutions-infobanner-chart-two'>
              <div className='sm:w-1/2'></div>
              <div className='sm:solutions-info-charttwo-infochart border-blue-500 bg-white z-10 ' >
                <InfoChart titleOne={getcontent('infocharttwotittleone')}
                  textOne={getcontent('infocharttwotextone')}
                />

              </div>

            </div>

          </div>

        </section>
        <section className='max-sm:solutions-extrainfo-chart-section-mobile sm:solutions-extrainfo-chart-section '>
          <div >
            <div className='text-left sm:pl-10 max-sm:flex max-sm:flex-col max-sm:my-10 max-sm:pr-5 max-sm:pl-10'>
              <div className='sm:pl-5'>
                <div className='font-bold text-blue-100 2xl:text-2xl sm:pt-8'>{getcontent('lastsectiontitle')}</div>
                <div className='sm:py-2 flex gap-5'>
                  <div className='py-2 sm:pr-28 sm:my-6'>
                    <div className='font-bold text-2xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitleone')}
                    </div>
                    <div className='font-bold text-2xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitletwo')}
                    </div>
                  </div>

                  <div className='max-sm:hidden h-full w 1/2  2xl:ml-60 ml-10'>
                    <div className='img-programing absolute img-boilerplate w-96 h-60 2xl:w-[27rem] 2xl:h-72'></div>
                  </div>
                </div>
              </div>
              <div className='sm:bg-white  sm:h-1/3 w-full flex'>

                <div className='text-xs sm:w-1/2 sm:p-5  '>
                  <div className='2xl:text-lg font-tilium'>
                    {getcontent('lastsectionsubsectiontextone')}
                  </div>
                  <div className='flex justify-between pt-2 max-sm:hidden ' >
                    <div className='java img-boilerplate h-20 w-20 2xl:h-32 2xl:w-32' >
                    </div>
                    <div className='dotnet img-boilerplate h-20 w-20 2xl:h-32 2xl:w-32'>
                    </div>
                    <div className='angular img-boilerplate h-20 w-20 2xl:h-32 2xl:w-32'>
                    </div>
                    <div className='react img-boilerplate h-20 w-20 2xl:h-32 2xl:w-32'>
                    </div>
                  </div>
                  <div className='sm:hidden w-full py-4 bg-white flex items-center justify-center'>


                    <div className='w-full flex gap-4 flex-col items-center justify-center px-10 self-end r-0'>
                      <div className='flex gap-2 bg-white'>
                        <div className='java img-boilerplate h-20 w-[6rem] 2xl:h-32 2xl:w-32' >
                        </div>
                        <div className='dotnet img-boilerplate h-20 w-[6rem] 2xl:h-32 2xl:w-32'>
                        </div>
                      </div>
                      <div className='flex gap-2 bg-white'>
                        <div className='angular img-boilerplate h-20 w-[6rem] 2xl:h-32 2xl:w-32'>
                        </div>
                        <div className='react img-boilerplate h-20 w-[6rem] 2xl:h-32 2xl:w-32'>
                        </div>
                      </div>
                    </div>


                  </div>





                </div>
              </div>
              <div className='sm:hidden max-sm:flex max-sm:justify-center h-full w-full mb-20  sm:bg-slate-50 max-sm:bg-slate-100'>
                <div className='img-programing absolute img-boilerplate w-72 h-48 2xl:w-[27rem] 2xl:h-72'></div>
              </div>
            </div>
          </div>

        </section>
        <section className='w-screen max-sm:h-full bg-slate-100 h-5/6 my-10'>
          <div className='flex max-sm:flex-col gap-4 justify-center h-full items-center px-4 sm:py-2'>
            <div className='w-1/2 max-sm:w-4/5 text-left sm:pl-10 py-2'>
              <div className='font-bold py-2 text-lg 2xl:text-2xl'>
                {getcontentCommon('curtiu')}
              </div>
              <div className='text-sm 2xl:text-lg font-tilium'>{getcontentCommon('curtiuText')}</div>
            </div>
            <div className='text-left sm:w-1/2 sm:pl-8 h-full max-sm:text-4xl max-sm:py-2 sm:text-7xl text-transparent font-bold bg-gradient-to-r bg-clip-text from-blue-500 to-blue-100 2xl:text-8xl 2xl:ml-8'
            >Development</div>
          </div>
          <div
            className='bg-gradient-to-r justify-end items-center pr-6  text-white font-bold from-blue-500 to-blue-100 rounded-r-3xl flex w-[87%] h-14 2xl:h-20 2xl:rounded-r-3xl 2xl:text-xl'
          >
            <a href={"mailto:info@md9i.com?subject=Contratar%20Development"} className='flex items-center'>
              <BiChevronRightCircle className='mr-2 h-6 w-6' /> {getcontentCommon('contratarServiço')}
            </a>
          </div>

        </section>
      </div>
      <Footer />
    </div >
  )
}

export default solucoes