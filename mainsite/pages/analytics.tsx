import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import InfoChart from '../src/components/info/InfoChart'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { BiChevronRightCircle } from "react-icons/bi";
import { TEXTANALYTICS } from '../src/components/conteudos/textAnalytics'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom';

const Analytics: NextPage = ({ props }: any) => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTANALYTICS[router.locale] ? TEXTANALYTICS[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  // console.log(getcontentsubtitulo)
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - Analytics</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div>
        <Nav />
        <div className='solutions-banner-style from-gray-700 via-gray-800 to-gray-800 '>

          <div className='solutions-banner-div'>
            <div className='max-sm:solutions-Title-banner-mobile sm:solutions-Title-banner'>
              Analytics
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
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>{getcontent('bannerTextwhyHiretext')}
                .</div>
            </div>
          </div>
          <a className='service-contract-button' href={"mailto:info@md9i.com?subject=Contratar%20Analytics"}><BiChevronRightCircle className='mr-2 h-8 w-8' /> {getcontentCommon('contratarServiço')}</a>
        </div>
        <section className='solutionsboilerplate max-[396px]:mb-[65rem] 2xl:mt-28 max-sm:mt-[40%] sm:mb-[-22%] 2xl:mb-[-17%] sm:mt-28 max-sm:mb-[85%]'>
          <div className='max-sm:flex-col flex w-full h-full justify-center items-center'>
            <div className='text-left max-sm:w-full max-sm:text-start sm:w-1/2 h-full sm:pl-3 max-sm:solutions-section-text-div-mobile'>
              <div className='text-[#F9D000] max-sm:font-bold max-sm:my-10 sm:text-3xl max-sm:text-xl sm:solutions-section-text max-sm:w-4/5 sm:w-2/3'>{getcontent('firstSectiontittle')}</div>
              <div className='text-black font-extrabold max-sm:w-4/5 sm:w-2/3 py-4 text-3xl 2xl:text-4xl'>{getcontent('firstSectionsubTittle')}</div>
              <div className='text-black text-xs py-10 max-sm:w-4/5 sm:w-2/3 max-sm:text-lg 2xl:text-lg font-tilium'>{getcontent('firstSectiontext')}</div>

            </div>
            <div className='flex items-center justify-center sm:mt-[-10rem] sm:pb-80 2xl:pb-60 2xl:mt-[-20rem]'>
              <div className='max-sm:solutions-section-sub-Image-mobile sm:solutions-section-sub-Image 2xl:h-[45rem] img-analitics img-boilerplate'></div>
              {/* <SolutionsCard text='Development' image='img-developmnent' /> */}
            </div>

          </div>
        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-sm:mt-[49rem]'>
          <div className='max-sm:solutions-infobanner-first-mobile solutions-infobanner-first'>
            <div className='sm:solutions-infobanner-chart-one '>
              <div className='sm:solutions-info-chartone-infochart border-yellow-400 bg-white z-10' >
                <InfoChart
                  titleOne={getcontent('infoChartOnetittleone')}
                  titleTwo={getcontent('infoChartOnetittletwo')}
                  titleThree={getcontent('infoChartOnetittlethree')}
                  textOne={getcontent('infoChartOnetextone')}
                  textTwo={getcontent('infoChartOnetexttwo')}
                  textThree={getcontent('infoChartOnetextthree')} />

              </div>

            </div>
            <div className='flex justify-center items-center'>
              <div className='max-sm:ux-bi-chart-mobile'>
              </div>
            </div>


            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle'>
              <div className=' solutions-text-charts max-sm:px-10  bg-yellow-400 flex items-center'>
                <div className='sm:w-1/2'></div>
                <div className='sm:w-1/2 max-sm:w-full text-left flex flex-col justify-between py-2 2xl:ml-4'>
                  <div className=' solutions-section-text'>{getcontent('infoChartOneextendedcharttittle')}</div>
                  <div className=' py-2 2xl:text-lg pr-[10%] font-tilium'>{getcontent('infoChartOneextendedcharttext')}</div>
                </div>
              </div>
              <div className='max-sm:hidden sm:solutions-text-charts   flex items-center mt-[-4rem]'>
                <div className='w-1/2'></div>
                <div className='w-1/2 text-left flex flex-col justify-center item-center'>
                  <div className='img-boilerplate self-center img-bichart w-96 h-48 2xl:w-[36rem] 2xl:h-72'></div>
                </div>
              </div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className='solutionsboilerplate mb-[-4rem] max-[396px]:mb-[45rem] max-[411px]:mb-[30rem] max-sm:mb-[20rem]'>
          <div className='solutions-infobanner-first'>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle 2xl:gap-y-[12rem] z-0'>
              <div className=' solutions-text-charts max-sm:pr-2 bg-gray-800 flex items-center'>

                <div className='sm:w-1/2 max-sm:w-full text-left flex pl-10 flex-col justify-between'>
                  <div className='text-white solutions-section-text'>{getcontent('infocharttwoextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infocharttwoextendedcharttext')}</div>

                </div>
                <div className='sm:w-1/2'></div>
              </div>
              <div className=' max-sm:hidden sm:solutions-text-charts   flex items-center'>

                <div className='w-1/2 text-left flex flex-col justify-center item-center'>
                  <div className='img-boilerplate self-center img-analytics-card-computer w-[28rem] h-[28rem] 2xl:w-[42rem] 2xl:h-[42rem]'></div>
                </div>
                <div className='sm:w-1/2'></div>
              </div>
            </div>
            <div className='sm:hidden flex flex-col justify-center item-center'>
              <div className='img-boilerplate self-center img-analytics-card-computer w-80 h-80 '></div>
            </div>
            <div className='sm:solutions-infobanner-chart-two'>
              <div className='sm:w-1/2'></div>
              <div className='sm:solutions-info-charttwo-infochart border-gray-800 bg-white z-10 ' >
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
        <section className='max-sm:solutions-extrainfo-chart-section-mobile max-sm:my-60 sm:solutions-extrainfo-chart-section max-sm:py-40'>
          <div>
            <div className='text-left sm:pl-10 max-sm:flex max-sm:flex-col max-sm:my-10 max-sm:pr-5 max-sm:pl-10'>
              <div className='sm:pl-5 font-bold  '>
                <div className='sm:ml-[2%] text-yellow-400 2xl:text-2xl sm:pt-8'>{getcontent('lastsectiontitle')}</div>
                <div className='sm:py-2 flex gap-5'>
                  <div className='py-2 sm:ml-[2%] sm:pr-24 w-1/2 sm:my-4'>
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

                  <div className='max-sm:hidden h-full w-1/2 2xl:ml-40 ml-10  mt-[3%] 2xl:mt-[0%]'>
                    <div className='img-bi-example absolute img-boilerplate w-96 h-72 2xl:w-[50rem] 2xl:h-[28rem]'></div>
                  </div>
                </div>
              </div>
              <div className='sm:bg-white bg-slate-100 sm:h-1/3 w-full flex'>

                <div className='justify-center items-center text-xs sm:w-1/2 sm:p-5 flex max-sm:flex-col w-full'>
                  <div className=' max-sm:hidden flex justify-between pt-2 p-2'>
                    <div className='img-icon-powerbi img-boilerplate h-40 w-40 2xl:h-60 2xl:w-60' >
                    </div>
                  </div>
                  <div className='flex flex-col w-full '>
                    <div className='2xl:text-lg font-tilium  inline'>
                      <div className='font-bold w-full '>
                        {getcontent('lastsectionsubsectiontitleone')}</div> {getcontent('lastsectionsubsectiontextone')}
                    </div>
                    <div className='2xl:text-lg font-tilium inline'>
                      <div className='font-bold w-full'>
                        {getcontent('lastsectionsubsectiontitletwo')}</div>{getcontent('lastsectionsubsectiontexttwo')}
                    </div>
                    <div className='2xl:text-lg font-tilium  align-middle items-baseline'>
                      <div className='font-bold w-full'>
                        {getcontent('lastsectionsubsectiontitlethree')}</div>{getcontent('lastsectionsubsectiontextthree')}
                    </div>
                    <div className='2xl:text-lg font-tilium inline'>
                      <div className='font-bold w-full'>
                        {getcontent('lastsectionsubsectiontitlefour')}</div>{getcontent('lastsectionsubsectiontextfour')}
                    </div>
                    <div className='2xl:text-lg font-tilium inline'>
                      <div className='font-bold w-full'>
                        {getcontent('lastsectionsubsectiontitlefive')}</div>{getcontent('lastsectionsubsectiontextfive')}
                    </div>
                    <div className='2xl:text-lg font-tilium inline'>
                      <div className='font-bold w-full'>
                        {getcontent('lastsectionsubsectiontitlesix')}</div>{getcontent('lastsectionsubsectiontextsix')}
                    </div>
                  </div>

                  <div className='sm:hidden w-full flex justify-center items-center'>

                    {/* <div className='w-1/2'></div> */}
                    <div className='  w-full justify-center flex bg-white  '>
                      <div className='img-icon-powerbi img-boilerplate h-20 w-24' >
                      </div>
                    </div>


                  </div>
                  <div className='sm:hidden h-full w-full ml-[-2%] flex justify-center'>
                    <div className='img-bi-example absolute img-boilerplate w-72 h-48'></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
        <section className='w-screen max-sm:h-full bg-slate-50 h-5/6 py-10'>
          <div className='flex max-sm:flex-col gap-4 justify-center h-full items-center px-4'>
            <div className='w-1/2 max-sm:w-4/5  text-left sm:pl-10 py-2'>
              <div className='font-bold py-2 text-lg 2xl:text-2xl'>
                {getcontentCommon('curtiu')}
              </div>
              <div className='text-sm 2xl:text-lg font-tilium sm:pb-8'>{getcontentCommon('curtiuText')}
              </div>
            </div>
            <div className='text-left sm:w-1/2  sm:pl-8 h-24 max-sm:text-4xl max-sm:py-2 sm:text-7xl  text-transparent font-bold bg-gradient-to-r bg-clip-text to-gray-700 from-yellow-400 2xl:text-8xl 2xl:ml-20'
            >Analytics</div>
          </div>
          <div
            className='bg-gradient-to-r justify-end items-center text-white font-bold pr-6 to-gray-700 from-gray-800 rounded-r-lg flex w-5/6 h-14 2xl:h-20 2xl:rounded-r-xl 2xl:text-xl'
          >
            <a href={"mailto:info@md9i.com?subject=Contratar%20Analytics"} className='flex items-center'>
              <BiChevronRightCircle className='mr-2 h-6 w-6' /> {getcontentCommon('contratarServiço')}
            </a>
          </div>

        </section>
      </div>
      <Footer />
    </div >
  )
}
export async function getStaticProps({ locale }: any) {
  let T = locale === "en-US" ? "en-US" : "en-US"
  return {
    props: { T },
    revalidate: 3600,
  };
}
export default Analytics
// 5&7nSQr5BvB!