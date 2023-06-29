import { NextPage } from 'next'
import Link from 'next/link'
import React, { HTMLProps } from 'react'
import { useRouter } from 'next/router';
import { TEXTFOOTER } from './../conteudos/textFooter';

const Footer: NextPage<HTMLProps<HTMLDivElement>> = () => {
  const router = useRouter();
  const getcontent = (key: string) => {
    return router.locale && TEXTFOOTER[router.locale] ? TEXTFOOTER[router.locale][`${key}`] : null
  }
  return (
    <footer className='footer-wrapper-mobile sm:footer-wrapper'>
      <div className='flex flex-col w-[96%] justify-center items-center'>
        <div className='py-4 px-10 flex justify-between w-full items-center'>
          <div className='footer-logo-mobile sm:footer-logo img-boilerplate img-icon-negative'></div>
          <div className='hidden sm:footer-text'>
            <div><Link href='/institucional'>{getcontent('footerOne')}</Link></div>
            <div><Link href='/ecossistema'>{getcontent('footerTwo')}</Link></div>
            <div><Link href='/contato'>{getcontent('footerThree')}</Link></div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link target='_blank' href={'https://www.linkedin.com/company/md9i/mycompany/?viewAsMember=true'}>
              <div className='img-boilerplate img-linkedin-negative w-6 h-6 2xl:w-12 2xl:h-12 hover:cursor-pointer'></div>
            </Link>
            <Link target='_blank' href={'https://www.facebook.com/md9i.oficial'}>
              <div className='img-boilerplate img-facebook-negative  w-6 h-6 2xl:w-12 2xl:h-12 hover:cursor-pointer'></div>
            </Link>
            <Link target='_blank' href={'https://www.instagram.com/md9i_oficial/'}>
              <div className='img-boilerplate img-instagram-negative w-6 h-6 2xl:w-12 2xl:h-12 hover:cursor-pointer'></div>
            </Link>
          </div>
        </div>
        <div className='border-[0.1px] w-full'></div>
        <div className='text-md sm:text-xs sm:pt-2 self-end'>© 2023 MD9i. All Rights Reserved</div>
      </div>
    </footer>
  )
}
export default Footer