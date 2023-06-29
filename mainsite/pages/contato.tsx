import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiChevronRightCircle } from 'react-icons/bi';
import { useForm } from 'react-hook-form'
import { TEXTCONTACT } from '../src/components/conteudos/textContact'
import { useRouter } from 'next/router'
import { TEXTCOMMON } from '../src/components/conteudos/textCommom'


const contato: NextPage = () => {
  const router = useRouter()
  const getcontent = (key: string) => {
    return router.locale && TEXTCONTACT[router.locale] ? TEXTCONTACT[router.locale][`${key}`] : null
  }
  const getcontentCommon = (key: string) => {
    return router.locale && TEXTCOMMON[router.locale] ? TEXTCOMMON[router.locale][`${key}`] : null
  }
  const { handleSubmit, register } = useForm()
  const submitFunctionMailer = (e: any) => {
    console.log(e)

  }
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>

      <div >
        <Nav />
        <div className=' max-sm:h-[80vh] max-sm:w-screen
max-sm:institucional-wrapper-mobile max-sm:bg-cover max-sm:bg-[50%]
sm:institucional-wrapper sm:bg-cover bg-[40%] contato-md9i-banner-img '>
          <div className='sm:col-span-1'>
            <div className='font-extrabold text-6xl 2xl:text-[5rem] text-white'>
              {getcontent('titulo')}
            </div>
          </div>
          <div className='max-sm:hidden  sm:col-span-2'>
            <div className='text-white text-5xl 2xl:text-[4.5rem] font-light'>{getcontent('subtitulo')}</div>
            <div className='text-white text-5xl 2xl:text-[4.5rem] font-light'>{getcontent('subtituloTwo')}</div>
          </div>
        </div>
      </div>
      <section className='bg-white w-full h-full max-sm:mt-[-7%]'>
        <form onSubmit={handleSubmit(submitFunctionMailer)} className='py-10 px-10 flex flex-col justify-center items-start w-full h-full'>

          <div className='py-2 text-4xl 2xl:text-[3.5rem] font-bold'>Whatsapp</div>
          <div className='max-sm:text-left max-sm:text-lg 2xl:text-xl font-tilium'>{getcontent('whatsappSubtittle')}</div>
          <div className='py-2 w-full h-full'>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=11977161300" className='flex bg-[#25D366] gap-2 text-white  h-2/3 p-2 font-tilium  max-sm:w-2/3 w-1/4 justify-start  items-center rounded-md 2xl:text-xl'>
              <IoLogoWhatsapp fill='white' className='max-sm:h-[4rem] max-sm:w-[4rem] h-[2rem] w-[2rem] pl-2 2xl:h-[3rem] 2xl:w-[3rem]' /> {getcontent('whatsapptext')}</a>
          </div>
          <div className='mx-sm:w-screen max-sm:font-semibold msx-sm:h-full h-2/3 sm:w-2/5 sm:text-left font-light pt-10 pb-3 2xl:text-xl max-sm:text-left font-tilium'>{getcontent('text')}</div>
          <div className='border border-gray-100 w-full'></div>

          <div className='max-sm:hidden py-10 flex gap-2 h-full w-2/3 font-tilium'>
            <div className='flex flex-col gap-4 w-full justify-start items-start pr-10'>
              <input {...register('Email')} type="text" placeholder='Email' width={'100%'} className='w-full h-1/2 rounded-md p-2 bg-[#F6FAFD] font-semibold text-[#B0B3B8] 2xl:text-2xl' />
              <input {...register('Empresa')} type="text" placeholder={getcontent('company')} className='w-full h-1/2 rounded-md p-2 bg-[#F6FAFD] font-semibold text-[#B0B3B8] 2xl:text-2xl' />
            </div>
            <div className='flex w-full h-full justify-start items-start'>
              <textarea {...register('Mensagem')} placeholder={getcontent('message')} rows={5} style={{ resize: 'none' }} className='w-full h-full rounded-md p-2 bg-[#F6FAFD] font-semibold 2xl:text-2xl text-[#B0B3B8]' />

            </div>

          </div>
          <div className='sm:hidden py-4 flex flex-col gap-y-3 px-1 w-full font-tilium '>
            <input {...register('Email')} type="text" placeholder='Email' width={'100%'} className='w-full h-1/2 rounded-md p-2 bg-[#F6FAFD] font-semibold text-[#B0B3B8] 2xl:text-2xl' />
            <input {...register('Empresa')} type="text" placeholder={getcontent('company')} className='w-full h-1/2 rounded-md p-2 bg-[#F6FAFD] font-semibold text-[#B0B3B8] 2xl:text-2xl' />
            <textarea {...register('Mensagem')} placeholder={getcontent('message')} rows={5} style={{ resize: 'none' }} className='w-full h-full rounded-md p-2 bg-[#F6FAFD] font-semibold 2xl:text-2xl text-[#B0B3B8]' />
            <button className='bg-none text-black flex items-center font-semibold right-0 justify-end'><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontent('send')}</button>
          </div>
          <div className='max-sm:hidden w-2/3 flex justify-end'>
            <button className='bg-none text-black flex items-center font-semibold self-end right-0 justify-end'><BiChevronRightCircle className='mr-2 h-8 w-8' />{getcontent('send')}</button>
          </div>

        </form>

      </section>
      <Footer />

    </div>
  )
}

export default contato