import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../src/components/footer/Footer'
import Nav from '../src/components/nav/Nav'
import Link from 'next/link'
import index from '../src/processors/searchIndex'

const Search: NextPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Array<{ id: number; title: string; description: string; content: string; category: string; url: string; }>>([]);
    const [visibleSearchResults, setVisibleSearchResults] = useState(false);
    const frequentlySearches = [
        {id: '1', title: 'Como o Blockchain funciona', url: '/blockchain'},
        {id: '2', title: 'O que o consultancy abrange', url: '/consultancy'},
        {id: '3', title: 'Outsourcing duvidas frequentes', url: '/outsourcing'},
        {id: '4', title: 'Missao e valores da MD9i', url: '/institucional'},
        {id: '5', title: 'Quem sao nossos parceiros', url: '/ecossistema'},
        {id: '6', title: 'Nosso contato', url: '/contato'},
    ]
    function handleInputChange(event: { target: { value: any } }) {
        const query = event.target.value;
        setQuery(query);
    
        if (query.length > 2) { // mínimo de caracteres para iniciar a busca
            const searchResults = index.search(query).map(result => result.item);
            setResults(searchResults);
            setVisibleSearchResults(true);
        } else {
          setResults([]);
          setVisibleSearchResults(false);
        }
      }
    return (
        <div className='app-wrapper'>
            <Head>
                <title>Md9i - Search</title>
                <link rel='icon' href='/md9i.ico'></link>
            </Head>
            <div className='searchPageWrapper'>
                <Nav search={true}/>
                <div className='searchWrapper'>
                    <input
                        type="text" 
                        value={query} 
                        onChange={handleInputChange} 
                        placeholder='Escreva para pesquisar'
                        className='searchBarStyle'
                    />
                </div>
                <div className='resultsArea'>
                    {!visibleSearchResults ? (
                        <h1>Perguntas Frequentes</h1>
                    ): (
                        <div>
                            <h1>Resultados para "{query}"</h1>
                            <div className='lengthResults'>
                                <h2>TODOS OS RESULTADOS</h2>
                                <p>Mostrar 1-{results.length} dos {results.length} resultados</p>
                            </div>
                            <hr/>
                        </div>
                    )}
                    <ul className='ulSearchBar'>
                        {visibleSearchResults && results.map((result) => (
                            <a className='searchLink' key={result.id} href={result.url} style={{color: "#333", textDecoration: "none"}}>
                                <li style={{border: "none", marginTop: result.id > 1 ? '10px' : '0', padding: "10px"}}>
                                    <h3>{result.title}</h3>
                                    <p>{result.description}</p>
                                </li>
                                <hr/>
                            </a>
                            
                        ))}
                        {!visibleSearchResults && frequentlySearches.map((e) =>
                            <a key={e.id} href={e.url}>
                                <h3 style={{fontSize: '18px !important'}}>{e.title}</h3>
                            </a>
                        )}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Search 