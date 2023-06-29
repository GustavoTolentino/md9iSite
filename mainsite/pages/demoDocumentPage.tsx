import type { NextPage } from 'next'
import Head from 'next/head'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import React, { useState } from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import HTMLFlipBook from 'react-pageflip';


// const Page = React.forwardRef(({ props, ref }: any) => {
//   return (
//     <div className="demoPage" ref={ref}>
//             /* ref required */
//       <h1>Page Header</h1>
//       <p>{props.children}</p>
//       <p>Page number: {props.number}</p>
//     </div>
//   );
// });

const demoDocumentPage: NextPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };
  return (
    <div className="app-wrapper">
      <Head>
        <title>Md9i - DemoDoc</title>
        <link rel="icon" href="/md9i.ico" />
      </Head>
      <div>
        <Nav />
        <div className='homepage-mobile-wrapper max-sm:h-[60vh] max-2xl:sm:bg-[length:1920px_720px] max-2xl:sm:bg-[60%] 2xl:h-[68vh] sm:homepage-wrapper sm:pl-14 sm:items-start img-ecossistema'>
          {/* <Image className="" src={"/banner345.png"} fill /> */}
          <div className='font-extrabold text-6xl 2xl:text-[5rem] text-white'>
            DemoDoc
          </div>
        </div>
        <section className='ecossystem-subtitle-section-mobile max-sm:mt-[-5%] sm:ecossystem-subtitle-section'>
          <div className='max-sm:ecossystem-subtitle-text-mobile sm:w-[100%] font-tilium'>
            Mergulhamos nos negócios de nossos clientes para que possamos compreender verdadeiramente como eles funcionam, o que os motiva, quais problemas enfrentam e quais são suas expectativas. Isso nos permite desenvolver e implementar estratégias e soluções tecnológicas que os ajudem a efetuar mudanças reais e a obter um retorno muito maior sobre o investimento. Como resultado, podemos entender seus desafios únicos e aconselhar sobre as melhores práticas para atender às suas necessidades, tanto comercialmente como tecnicamente.
          </div>
          <div className='py-10 overflow-hidden'>
            <HTMLFlipBook width={500} height={280} startPage={1} className={''} style={{ background: '#fff' }} size={'fixed'} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={false} flippingTime={10} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0} showCover={false} mobileScrollSupport={false} clickEventForward={true} useMouseEvents={true} swipeDistance={2} showPageCorners={false} disableFlipByClick={false}>
              <div className="demoPage">
                <Document file="./boasvindas.pdf"
                  options={options}
                  onLoadError={(error) => console.log(error)}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={1} width={500} scale={1.0} />
                </Document>
              </div>
              <div className="demoPage">
                <Document file="./boasvindas.pdf"
                  options={options}
                  onLoadError={(error) => console.log(error)}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={2} width={500} scale={1.0} />
                </Document>
              </div>
              <div className="demoPage">
                <Document file="./boasvindas.pdf"
                  options={options}
                  onLoadError={(error) => console.log(error)}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={3} width={500} scale={1.0} />
                </Document>
              </div>
              <div className="demoPage">
                <Document file="./boasvindas.pdf"
                  options={options}
                  onLoadError={(error) => console.log(error)}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={4} width={500} scale={1.0} />
                </Document>
              </div>
              <div className="demoPage">
                <Document file="./boasvindas.pdf"
                  options={options}
                  onLoadError={(error) => console.log(error)}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={5} width={500} scale={1.0} />
                </Document>
              </div>


            </HTMLFlipBook>
          </div>

        </section>

        <Footer />
      </div>
    </div>
  )
}

export default demoDocumentPage