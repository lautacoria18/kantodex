import React from 'react'
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';

import './Home.css';
export default function Home() {
  return (
    <div className='home'>

<p className='homeP'>Bienvenido a kantodex, la web oficial de la región pokemon mas linda del mundo!
    
    Aquí podras encontrar toda la información, historia, pokemones y cultura sobre nosotros!
    <br/>
    Kanto (Kanto en inglés, カントー Kantō en japonés) es una región del mundo Pokémon situada al este de Johto y al sur de Sinnoh.
     Su paisaje está inspirado en la zona de Japón del mismo nombre, la región de Kantō.
</p>
<div className='slideDiv'>
<ImageSlider slides={SliderData} />
</div>
<p className='homeP'>
Kanto pertenece al mismo continente que Johto. El lazo que une ambas regiones viene dado por las Cataratas Tohjo, si bien también está la ruta 27, que sirve de cruce con la Cueva Plateada, integrada en Johto pero separada de los demás lugares.
Una de las formas más rápidas de viajar de una región a otra es tomando el Magnetotrén
, un tren de alta velocidad que realiza el trayecto Ciudad Azafrán-Ciudad Trigal, además del barco que hace el trayecto Ciudad Olivo-Ciudad Carmín, aunque solo salga de Ciudad Olivo los lunes y viernes; y de Ciudad Carmín los miércoles y domingos.
</p>
    </div>
    
  )
}
