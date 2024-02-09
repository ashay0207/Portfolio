import React, { useRef } from 'react'
import pokemonApi from '../../Assets/pokemon-api.png'
import RickApi from '../../Assets/1rickandmorty.png'
import CarServing from '../../Assets/carserving.png'
import Fitclub from '../../Assets/fitclub.png'
import smartspace from '../../Assets/smartspace.png'
import './portfolio.css'


const Portfolio = () => {


    return (
        <>
            <section className='portfolio'>
                <div className="aboutTitle">
                    <span>My <span className='color'>Projects</span></span>
                </div>
                <div class="grid-container-portfolio" >
                    <a href="https://ashay0207.github.io/carserving/Carserving" target='_blank'>
                        <div class="card">
                            <img src={CarServing} alt="" />
                            <div class="card-details">
                                <p>
An HTML/CSS webpage showcasing car servicing information and services offered.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://ashay0207.github.io/GymLayout/fitclub" target='_blank'>
                        <div class="card">
                            <img src={Fitclub} alt="" />
                            <div class="card-details">
                                <p>
An HTML/CSS webpage showcasing gym information.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://ashay0207.github.io/smartspace" target='_blank'>
                        <div class="card">
                            <img src={smartspace} alt="" />
                            <div class="card-details">
                                <p>
An HTML/CSS webpage showcasing a realtor website.</p>
                            </div>
                        </div>
                    </a>  
                    <a href="https://pokemon-api-as.netlify.app" target='_blank'>
                        <div class="card">
                            <img src={pokemonApi} alt="" />
                            <div class="card-details">
                                <p>A React app utilizing the Pokémon API to display information and details about Pokémon species, abilities, and more</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://rickmortyapi-a.netlify.app" target='_blank'>
                        <div class="card">
                            <img src={RickApi} alt="" />
                            <div class="card-details">
                                <p>A React app utilizing the Rick and morty API to display information and details about the show characters</p>
                            </div>
                        </div>
                    </a>             
                </div>

            </section>
        </>
    )
}

export default Portfolio