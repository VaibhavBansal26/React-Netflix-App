import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../request'
import Row from '../Row'
import Footer from '../footer'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            {/* <Row
                title='My List'
                fetchURL={requests.fetchTrending}
                
            /> */}
            <Row
                title='Netflix Originals'
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='Trending Now'
                fetchURL={requests.fetchTrending}
                
            />
            <Row
                title='Top Rated'
                fetchURL={requests.fetchTopRated}
                
            />
            <Row
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
                
            />
            <Row
                title='Horror'
                fetchURL={requests.fetchHorrorMovies}
                
            />
            <Row
                title='Romantic Movies'
                fetchURL={requests.fetchRomanticMovies}
                
            />
            <Row
                title='Documentaries'
                fetchURL={requests.fetchDocumentaried}
                
            />
            <Footer/>
            
        </div>
    )
}

export default HomeScreen
