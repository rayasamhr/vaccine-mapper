import React from 'react';
import {
    withGoogleMap,
    GoogleMap
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAlSsRMiiAZ_zghHBuYAgBwh1EHP_Ry86s")
const csv = require('csv-parser')

class App extends React.Component {

    locations = [
        {
            name: "District 1",
            location: {
                lat: 1.38,
                lng: 103.70
            },
            population: 100,
            vaccinated: 0,
        },
        {
            name: "District 2",
            location: {
                lat: 1.38,
                lng: 103.80
            },
            population: 200,
            vaccinated: 0,
        },
        {
            name: "District 3",
            location: {
                lat: 1.38,
                lng: 103.90
            },
            population: 400,
            vaccinated: 0,
        },
        {
            name: "District 4",
            location: {
                lat: 1.30,
                lng: 103.70
            },
            population: 100,
            vaccinated: 0,
        },
        {
            name: "District 5",
            location: {
                lat: 1.30,
                lng: 103.80
            },
            population: 700,
            vaccinated: 0,
        },
        {
            name: "District 6",
            location: {
                lat: 1.30,
                lng: 103.90
            },
            population: 500,
            vaccinated: 0,
        }
    ]

    input = ''
    output = ''
    updateVacData(address) {
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location; 

                const a, b;
                a = (lng - 1.30) > 0.04 ? 1 : 4

                const rounded = Math.round((lat + Number.EPSILON) * 10 / 10)
                if (rounded - 103 == 0.8) {
                    b = a + 1
                } else if (rounded - 103 <= 0.7) {
                    b = a
                } else {
                    b = a + 2
                }

                locations[b - 1].vaccinated++
            }

          );
            
        }

    render() {
        return ()
    }
}
