import React from 'react';
import {
    withGoogleMap,
    GoogleMap
} from "react-google-maps";
import Geocode from "react-geocode";
import * as d3 from 'd3';

Geocode.setApiKey("AIzaSyAlSsRMiiAZ_zghHBuYAgBwh1EHP_Ry86s")
const csv = require('csv-parser')
const NodeGeoCoder = require('node-geocoder')

const options = NodeGeoCoder({
    provider: 'google',
    fetch: customFetchImplementation,
    apiKey: 'AIzaSyAlSsRMiiAZ_zghHBuYAgBwh1EHP_Ry86s',
    formatter: null
})

const geocoder = NodeGeoCoder(options);

class App extends React.Component {


    //what we ought to do here is feed the municipal data
    locations = [
        {
            name: "District 1",
            location: {
                lat: 1.377516037369714,
                lng: 103.6911776482776
            },
            population: 100,
        },
        {
            name: "District 2",
            location: {
                lat: 1.3869141413246406,
                lng: 103.8486809126089
            },
            population: 200,
        },
        {
            name: "District 3",
            location: {
                lat: 1.3331135992073928, 
                lng: 103.93673562425536
            },
            population: 400,
        },
        {
            name: "District 4",
            location: {
                lat: 1.3146729574530578,
                lng: 103.87199653959685
            },
            population: 800,
        },
        {
            name: "District 5",
            location: {
                lat: 1.3035365069116478,
                lng: 103.7830446242555
            },
            population: 700,
        },
        {
            name: "District 6",
            location: {
                lat: 1.311685889417541,
                lng: 103.66504491260909
            },
            population: 100,
        }
    ]

    // input = ''
    // output = ''
    // updateVacData(address) {
    //     const coords = await geocoder.geocode(address)
    //     for (item in locations) {
            
    //     }


    // }
    // input.forEach(updateVacData)

    // }

    // ]

    // }




    render() {
        return ()
    }
}
