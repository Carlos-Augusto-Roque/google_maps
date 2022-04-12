import {GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import './MapPage.css'

const MapPage = () => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDGXbplwnlqSrj7t-lA659HTKGhw5885sQ'
    })
    
    return   (  
        <>
        <div className='map'>
            {isLoaded ? (
                    <GoogleMap
                         mapContainerStyle={{with:'50%', height:'50%'}}                  
                         center={{
                            lat: -23.536171905285894,
                            lng: -46.646192873098286
                    }}
                    zoom={15}            
                    ></GoogleMap>
                ) : (
                <></>
                )}
        </div>
        
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.890583351029!2d-46.648392285070976!3d-23.53643748469522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5843deb99025%3A0xb23619858bc7e63e!2sEscola%20SENAI%20de%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1649781593360!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default MapPage