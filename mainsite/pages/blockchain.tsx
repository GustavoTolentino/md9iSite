import type { NextPage } from 'next'
import Head from 'next/head'
import InfoChart from '../src/components/info/InfoChart'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { TEXTBLOCKCHAIN } from '../src/components/conteudos/textBlockchain'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'
const blockchain: NextPage = () => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTBLOCKCHAIN[router.locale] ? TEXTBLOCKCHAIN[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - BlockChain</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div className='max-sm:bg-slate-50'>
        <Nav colorSpecial='text-black' />
        <div className='solutions-banner-style from-green-300  via-[#8BC600] to-green-700 '>

          <div className='solutions-banner-div'>
            <div className='max-sm:solutions-Title-banner-mobile sm:solutions-Title-banner'>
              Blockchain
            </div>
            <div className='max-sm:hidden sm:solutions-SubTitle-banner font-tilium'>{getcontent('subtitulo')}</div>
          </div>
          <div className='max-sm:solutions-banner-cards-wrapper-mobile sm:solutions-banner-cards-wrapper '>


            <div className='solutions-double-card-title'>
              <div className='solutions-title-both-banner '>{getcontent('bannerTextWhatIstittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium '>{getcontent('bannerTextWhatIstext')}</div>
            </div>
            <div className='solutions-double-card-title'>
              <div className='solutions-title-both-banner '>{getcontent('bannerTextwhyHiretittle')}</div>
              <div className='text-left sm:px-14 2xl:text-xl font-tilium'>{getcontent('bannerTextwhyHiretext')}
              </div>
            </div>
          </div>
          <a className='service-contract-button text-black' href={"mailto:info@md9i.com?subject=Contratar%20BlockChain"}><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontentCommon('contratarServiço')}</a>
        </div>
        <section className=' solutionsboilerplate max-sm:mt-[-12%] max-sm:mb-[-20%]  max-[396px]:mt-[15rem] max-[396px]:mb-[50rem] 2xl:mt-28  sm:mb-[-15%] 2xl:mb-[-9%] sm:mt-28'>
          <div className='max-sm:flex-col flex w-full h-full justify-center items-center max-sm:mt-[70%]'>
            <div className='text-left max-sm:w-full sm:w-1/2 h-full sm:pl-3 max-sm:solutions-section-text-div-mobile'>
              <div className='text-[#88C400] max-sm:font-bold sm:solutions-section-text sm:text-3xl max-sm:mt-10 max-sm:text-xl sm:solutions-section-text max-sm:w-4/5 sm:w-2/3'>{getcontent('firstSectiontittle')}</div>
              <div className='text-black font-extrabold max-sm:w-4/5 sm:w-2/3 py-10 text-3xl 2xl:text-4xl'>{getcontent('firstSectionsubTittle')}</div>
              <div className='text-black text-xs py-10 max-sm:w-4/5 sm:w-2/3 max-sm:text-lg 2xl:text-lg font-tilium'>{getcontent('firstSectiontext')}</div>

            </div>
            <div className='flex items-center justify-center sm:pb-80 2xl:pb-[27rem] max-[396px]:mt-[10rem] max-[396px]:mb-[15rem] max-[411px]:mt-[2.5rem] max-sm:mb-[1rem] '>
              <div className='max-sm:solutions-section-sub-Image-mobile sm:solutions-section-sub-Image 2xl:h-[45rem] img-blockchain img-boilerplate'></div>
            </div>

          </div>
        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-sm:max-mt-[100%] max-sm:mt-[64rem]' >
          <div className='max-sm:solutions-infobanner-first-mobile sm:solutions-infobanner-first'>
            <div className='sm:solutions-infobanner-chart-one  '>
              <div className=' sm:solutions-info-chartone-infochart border-green-300 bg-white z-10 ' >
                <InfoChart
                  titleOne={getcontent(`infoChartOnetittleone`)}
                  titleTwo={getcontent(`infoChartOnetittletwo`)}
                  titleThree={getcontent(`infoChartOnetittlethree`)}
                  textOne={getcontent(`infoChartOnetextone`)}
                  textTwo={getcontent('infoChartOnetexttwo')}
                  textThree={getcontent('infoChartOnetextthree')} />

              </div>

            </div>
            <div className='flex justify-center items-center'>
              <div className='max-sm:ux-blockchaingreen-mobile'>
              </div>
            </div>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle'>
              <div className=' solutions-text-charts max-sm:px-10 bg-green-300 flex items-center'>
                <div className='sm:w-1/2'></div>
                <div className='sm:w-1/2 max-sm:w-full text-left flex flex-col justify-between 2xl:ml-4'>
                  <div className='text-white solutions-section-text'>{getcontent('infoChartOneextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infoChartOneextendedcharttext')}</div>

                </div>
              </div>
              <div className=' max-sm:hidden sm:solutions-text-charts   flex items-center'>
                <div className='w-1/2'></div>
                <div className='w-1/2 text-left flex flex-col justify-center item-center '>
                  <div className='img-boilerplate self-center img-blockchaingreen  w-96 h-56  2xl:w-[36rem] 2xl:h-[21rem] '></div>
                </div>
              </div>
            </div>


            <div>

            </div>
          </div>

        </section>
        <section className='solutionsboilerplate sm:mb-[-4rem] max-[396px]:mb-[30rem] '>
          <div className='solutions-infobanner-first'>
            <div className='max-sm:solutions-info-chartonestyle-mobile sm:solutions-info-chartonestyle'>
              <div className=' solutions-text-charts max-sm:pr-2 bg-[#8BC600]'>

                <div className='sm:w-1/2 max-sm:w-full  h-full text-left flex pl-10 flex-col sm:justify-between'>
                  <div className='text-white solutions-section-text'>{getcontent('infocharttwoextendedcharttittle')}</div>
                  <div className='text-white py-2 2xl:text-lg font-tilium'>{getcontent('infocharttwoextendedcharttext')}</div>

                </div>
                <div className='sm:w-1/2'></div>
              </div>
              <div className=' max-sm:hidden sm:solutions-text-charts'>

                <div className='w-1/2 text-left flex flex-col justify-center item-center 2xl:mt-16'>
                  <div className='img-boilerplate self-center img-Blockchain-cardwoman w-96 h-96 2xl:w-[42rem] 2xl:h-[42rem]'></div>
                </div>
                <div className='sm:w-1/2'></div>
              </div>
            </div>
            <div className='sm:hidden flex flex-col justify-center item-center'>
              <div className='img-boilerplate self-center img-Blockchain-cardwoman w-96 h-96 2xl:w-[42rem] 2xl:h-[42rem]'></div>
            </div>
            <div className='sm:solutions-infobanner-chart-two'>
              <div className='sm:w-1/2'></div>
              <div className='sm:solutions-info-charttwo-infochart border-[#8BC600] bg-white z-10 ' >
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


        <section className=' max-sm:h-full max-sm:solutions-extrainfo-chart-section-mobile sm:solutions-extrainfo-chart-section max-[411px]:mt-[55%] max-sm:mt-[30%]
'>
          <div className='max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col'>
            <div className='text-left sm:pl-10 max-sm:flex max-sm:flex-col max-sm:my-10 max-sm:pr-5 max-sm:pl-10'>
              <div className='sm:pl-5'>
                <div className='font-bold text-[#8BC600] 2xl:text-2xl sm:pt-8'>{getcontent('lastsectiontitle')}</div>
                <div className='sm:py-2 flex gap-5'>
                  <div className='py-2 sm:pr-28 sm:my-4'>
                    <div className='font-bold text-xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitleone')}
                    </div>
                    <div className='font-bold text-xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitletwo')}
                    </div>
                    <div className='font-bold text-xl 2xl:text-3xl'>
                      {getcontent('lastsectionsubtitlethree')}
                    </div>
                  </div>

                  <div className='max-sm:hidden h-full w 1/2  '>
                    <div className='img-blockchain-leaf absolute img-boilerplate w-[27rem] h-72 2xl:w-[27rem] 2xl:h-72'></div>
                  </div>
                </div>
              </div>
              <div className='sm:bg-white sm:h-1/3 w-full flex'>

                <div className='text-xs sm:w-1/2 sm:p-5  '>
                  <div className='2xl:text-lg font-tilium'>
                    {getcontent('lastsectionsubsectiontextone')}
                  </div>
                  <div className='2xl:text-lg font-tilium'>
                    {getcontent('lastsectionsubsectiontexttwo')}
                  </div>
                  <div className='2xl:text-lg font-tilium'>
                    {getcontent('lastsectionsubsectiontextthree')}
                  </div>

                  <div className='2xl:text-lg font-tilium'>
                    {getcontent('lastsectionsubsectiontextfour')}
                  </div>

                </div>
              </div>
              <div className='sm:hidden max-sm:flex max-sm:justify-center h-full w-full mb-20 pt-8  sm:bg-slate-50 max-sm:bg-slate-100'>
                <div className='img-blockchain-leaf absolute img-boilerplate w-72 h-48 2xl:w-[27rem] 2xl:h-72'></div>
              </div>
            </div>
          </div>

        </section>
        <section className='w-screen max-sm:h-full bg-slate-50 h-5/6 py-10'>
          <div className='flex max-sm:flex-col gap-4 justify-center h-full items-center px-4'>
            <div className='w-1/2 max-sm:w-4/5 text-left sm:pl-10 py-2'>
              <div className='font-bold py-2 text-lg 2xl:text-2xl'>
                {getcontentCommon('curtiu')}
              </div>
              <div className='text-sm 2xl:text-lg font-tilium'>{getcontentCommon('curtiuText')}</div>
            </div>
            <div className='text-left sm:w-1/2 sm:pl-8   h-full max-sm:text-4xl max-sm:py-2 sm:text-7xl text-transparent font-bold bg-gradient-to-r bg-clip-text from-green-300 to-green-700 2xl:text-8xl 2xl:ml-20'
            >Blockchain</div>
          </div>
          <div
            className='bg-gradient-to-r justify-end items-center  text-black font-bold pr-6 from-green-300 to-green-700 rounded-r-lg flex w-5/6 h-14 2xl:h-20 2xl:rounded-r-xl 2xl:text-xl'
          >
            <a href={"mailto:info@md9i.com?subject=Contratar%20Blockchain"} className={'flex items-center'}>
              <BiChevronRightCircle className='mr-2 h-6 w-6' />{getcontentCommon('contratarServiço')}
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
export default blockchain