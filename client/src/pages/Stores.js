import React, { useState, useEffect } from 'react'
import { LilFooter } from '../components/LilFooter'
import { NavBar } from '../components/NavBar'
import axios from 'axios'
import StoreCard from '../components/StoreCard'

export default function Stores() {

    const [dataStore, setDataStore] = useState([])

    useEffect(() => {
        axios.get('api/shop/getshops').then(res => {
            console.log(res.data)  
            setDataStore(res.data)          
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const listaTiendas = dataStore.map(tienda => {
        return(
            <div>
                <StoreCard tienda={tienda} />
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            <br />
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-6 g-3">
                    {listaTiendas}
                </div>
            </div>
            <LilFooter />
        </div>
    )
}
