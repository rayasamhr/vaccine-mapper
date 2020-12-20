import React from 'react'

class MapPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.read = this.read.bind(this);
    }

    read() {
        this.props.firebaseProp.profiles()
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }

    render() {
        return(
            <React.Component>
                {this.read()}
            </React.Component>
        )
    }

}

export default MapPage;