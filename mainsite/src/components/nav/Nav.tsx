import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';
import { TEXTNAV } from './../conteudos/textNav';
import { idiomaSelecionado } from '../conteudos/language';

interface NavProps {
  colorSpecial?: string;
  search?: boolean;
}

const Nav: React.FC<NavProps> = ({ colorSpecial, search }) => {
  const [navBg, setNavBg] = useState(false);
  const [openMenu, setOpenMenu] = useState(false)
  const [mobilemenuOptionsOpen, setMobilemenuOptionsOpen] = useState(false)
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);
  const router = useRouter();

  useEffect(() => {
    setNavBg(search || false);
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  const handleLinkClick = () => {
    if (menuVisible)
      setMenuVisible(false);
  };
  const getcontent = (key: string) => {
    return router.locale && TEXTNAV[router.locale] ? TEXTNAV[router.locale][`${key}`] : null
  }
  const thisStates = () => {
    setOpenMenu(!openMenu)
    console.log(openMenu)
  }
  const changeNavBg = () => {
    if(!search)
      window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  }

  return (
    <div className='w-full'>
      <div className={cn('hidden sm:navBar-Big 2xl:navBar-2xl navSize',
        {['sm:bg-white sm:text-black sm:hover:bg-opacity-100 sm:hover:bg-white 2xl:bg-white 2xl:text-black 2xl:hover:bg-white 2xl:hover:bg-opacity-100']: !!navBg,})}
      >
        <div>
          <Link href="/">
            <Image className='self-center pb-0.5' src={navBg ? "/logo_oficial.png" : "/Logo-md9i.png"} width='200' height={200} alt='Logo MD9i'/>
          </Link>
        </div>
        <div className='flex'>
          <div className={`menuItens ${colorSpecial}`}><Link href="/institucional">{getcontent('navMenuOne')}</Link> </div>
          <div className='flex flex-col group tohover w-full h-full solutionsItem'>
            <button className={cn(`solutionsMenuStyle ${colorSpecial}`,
                {
                  ['text-black']: !!navBg
                }
              )}
            >{getcontent('navMenuTwo')}</button>
            <div className='menuhovered'>
              <Link href="/analytics" className='hoverMenuItens '>Analytics</Link>
              <Link href="/blockchain" className='hoverMenuItens'>BlockChain</Link>
              <Link href="/consultancy" className='hoverMenuItens'>Consultancy</Link>
              <Link href="/solucoes" className='hoverMenuItens'>Development</Link>
              <Link href="/neurotechnology" className='hoverMenuItens'>Neurotechnology</Link>
              <Link href="/outsourcing" className='hoverMenuItens'>Outsourcing</Link>
            </div>
          </div>
          <div className={`menuItens ${colorSpecial}`}><Link href="/ecossistema">{getcontent('navMenuThree')}</Link></div>
          <div className={`menuItens ${colorSpecial}`}><Link className='contatoButton' href="/contato">{getcontent('navMenuFour')}</Link></div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link href='/search'>
              <BiSearch style={{fontSize: '30px'}}/>
            </Link>
          </div>
          <div className='flagsDiv menuItens flex flex-col group tohover'>
            <button style={{fontSize: '1.4rem !important'}}  className={cn(`solutionsMenuStyle ${colorSpecial}`,
              {
                ['text-black']: !!navBg
              }
            )}>
              <div className={`flag ${idiomaSelecionado.idioma}-Flag`} />
            </button>
            <ul className='menuhovered mt-[10.5rem] ml-12'>
              {locales?.reverse().map((local, k) => (
                <li key={k} className='hoverMenuItens '>
                  <Link
                    href={`${local == defaultLocale ? "/" : `/${local}`}`}
                    locale={false}
                    onClick={handleLinkClick}
                    className='h-5'
                  >
                    <div onClick={() => idiomaSelecionado.idioma = (local.split('-')[0])} className={`flag ${(local.split('-')[0])}-Flag`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={cn(`menuMobile ${colorSpecial}`, {
        ['text-black bg-white']: !!navBg
      })}>
        <div>
          <Link href="/">
            <Image className='self-center' src={navBg ? "/logo_oficial.png" : "/Logo-md9i.png"} width='200' height={200} alt='Logo MD9i'/>
          </Link>
        </div>
        <Hamburger toggled={openMenu} toggle={thisStates} />
      </div>
      <div className={cn('mobileMenuShowed',
        {
          ['hidden']: !openMenu
        }
      )}>
        <div className={`mobileMenuitem`}><Link href="/institucional">Institucional</Link> </div>
        <div className={`mobileMenuitem`} onClick={() => setMobilemenuOptionsOpen(!mobilemenuOptionsOpen)}>
          Soluções
        </div>
        <div className={cn('block',{ ['hidden']: !mobilemenuOptionsOpen })}>
          <div className={`mobileMenuitem`}><Link href="/analytics" className='font-light'>Analytics</Link></div>
          <div className={`mobileMenuitem`}><Link href="/blockchain" className='font-light'>BlockChain</Link></div>
          <div className={`mobileMenuitem`}><Link href="/consultancy" className='font-light'>Consultancy</Link></div>
          <div className={`mobileMenuitem`}><Link href="/solucoes" className='font-light'>Development</Link></div>
          <div className={`mobileMenuitem`}><Link href="/neurotechnology" className='font-light'>Neurotechnology</Link></div>
          <div className={`mobileMenuitem`}><Link href="/outsourcing" className='font-light'>Outsourcing</Link></div>
        </div>
        <div className={`mobileMenuitem`}><Link href="/ecossistema">Ecossistema</Link></div>
        <div className={`mobileMenuitem`}><Link href="/contato">Contato</Link></div>
        <div className='flagsDiv mobileMenuitem'>
          {locales?.reverse().map((local, k) => (
            <React.Fragment key={k}>
              <Link
                href={`${local == defaultLocale ? "/" : `/${local}`}`}
                locale={false}
                onClick={handleLinkClick}
                className='h-5'
              >
                <div className={`flag ${local.split('-')[0]}-Flag`} />
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div >
  )
};

Nav.defaultProps = {
  colorSpecial: '',
  search: false,
};

export default Nav