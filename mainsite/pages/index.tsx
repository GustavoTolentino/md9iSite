import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from './../src/components/nav/Nav'
import SolutionsCard from '../src/components/solutionsCard/SolutionsCard';
import Footer from './../src/components/footer/Footer'
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { TEXTINDEX } from '../src/components/conteudos/textIndex'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'

const Home: NextPage = () => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTINDEX[router.locale] ? TEXTINDEX[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>MD9i</title>
        <link rel="icon" href="/md9i.ico" />

      </Head>

      <div >
        <Nav />
        <div className='homepage-mobile-wrapper sm:homepage-wrapper custom-img'>
          {/* <Image className="" src={"/banner345.png"} fill /> */}
          <div className="hidden sm:homepage-banner-text-style">
            CONNECTIONS FOR LIFE
          </div>
          <div className="homepage-banner-text-style-mobile sm:hidden">
            CONNECTIONS
          </div>
          <div className="homepage-banner-text-style-mobile sm:hidden">
            FOR LIFE
          </div>
        </div>
        <section className='homepage-subtitle-mobile-wrapper-style sm:homepage-subtitle-wrapper-style'>
          <div className="text-4xl sm:text-5xl 2xl:text-[4rem] font-bold pb-2 ">{getcontent('titulo')}</div>
          <div className="text-sm sm:hidden sm:text-lg 2xl:text-3xl font-tilium">{getcontent('textDesktop')}</div>

          <div className="text-sm max-sm:hidden sm:text-lg 2xl:text-3xl font-tilium">{getcontent('textWebOne')}</div>
          <div className="text-sm max-sm:hidden sm:text-lg 2xl:text-3xl font-tilium">{getcontent('textWebTwo')}</div>

          <div className='sm:index-cards'>
            <SolutionsCard text='blockchain' image='img-blockchain' />
            <SolutionsCard text='solucoes' image='img-developmnent' />
            <SolutionsCard text='neurotechnology' image='img-neurotechnology' />
          </div>
          <div className='sm:index-cards'>
            <SolutionsCard text='analytics' image='img-analitics' />
            <SolutionsCard text='consultancy' image='img-consultancy' />
            <SolutionsCard text='outsourcing' image='img-outsourcing' />
          </div>
        </section>
        <section className=''>

          <div className='sm:vemser-section sm:gap-x-8 xl:gap-x-12 2xl:gap-x-[17rem] sm:flex justify-center'>
            <div className='max-sm:hidden img-boilerplate img-vemser-left  h-[30rem] w-[30rem] '></div>
            <div className='vemser-section sm:flex-row flex-col'>
              <div className='align-top sm:text-start text-left px-4 sm:px-0  self-center sm:pr-2'>
                <div className='font-bold text-4xl 2xl:text-6xl py-2 font-tilium '>
                  {getcontentCommon('vemSerTittle')}
                </div>
                <div className='max-sm:py-2 sm:vemser-text 2xl:vemser-text-xl font-tilium'>{getcontentCommon('vemSerTextOne')}</div>
                <div className='sm:vemser-text 2xl:vemser-text-xl font-tilium'>{getcontentCommon('vemSerTextTwo')}</div>

                <a className='text-orange-200 font-tilium text-lg py-2 font-bold sm:text-xl 2xl:text-3xl flex items-center' href={"mailto:info@md9i.com?subject=Candidatura"}><BiChevronRightCircle className='mr-2 h-10 w-10' />{getcontentCommon('candidate')}</a>


              </div>
              <div className=' vemser-img-mobile sm:vemser-img 2xl:vemser-img-xl  '>

              </div>
            </div>
            <div className='max-sm:hidden img-boilerplate img-vemser-rigth h-[30rem] w-[30rem] right-0'></div>
          </div>

        </section>
        <section className='p-10 px-12 2xl:px-16 2xl:py-14 justify-between items-center align-middle content-center w-screen flex flex-col gap-y-16 sm:gap-y-0 sm:flex-row'>
          <div className='img-wnf img-boilerplate h-16 w-52 2xl:w-72 2xl:h-24 self-center'></div>
          <div className='img-neuroetica img-boilerplate h-16 w-52 2xl:w-72 2xl:h-24'></div>
          <div className='img-microsoft img-boilerplate h-11 w-52 2xl:w-72 2xl:h-16'></div>
          <div className='img-suse img-boilerplate h-10 w-[13.5rem] 2xl:h-14 2xl:w-[20.25rem]'></div>
          <div className='img-cisco img-boilerplate h-14 w-24 2xl:h-20 2xl:w-36'></div>
          <div className='img-r3 img-boilerplate h-16 w-28 2xl:h-24 2xl:w-32'></div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Home
