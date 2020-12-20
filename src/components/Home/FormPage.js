import React from 'react'
import { Button, Form, Dropdown, Container } from 'semantic-ui-react'

const vaccinationCenterOptions = [
    {
        key: 'Vaccine Center A',
        text: 'Vaccine Center A',
        value: 'Vaccine Center A'
    },
    {
        key: 'Vaccine Center B',
        text: 'Vaccine Center B',
        value: 'Vaccine Center B'
    },
    {
        key: 'Vaccine Center C',
        text: 'Vaccine Center C',
        value: 'Vaccine Center C'
    },
    {
        key: 'Vaccine Center D',
        text: 'Vaccine Center D',
        value: 'Vaccine Center D'
    },
    {
        key: 'Vaccine Center E',
        text: 'Vaccine Center E',
        value: 'Vaccine Center E'
    },
    {
        key: 'Vaccine Center F',
        text: 'Vaccine Center F',
        value: 'Vaccine Center F'
    },
]

class FormPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          address: "",
          centre: "Vaccine Center A",
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.firebaseProp = this.props.firebaseProp;
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        this.props.firebaseProp.profiles()
        .add(this.state)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            window.location.reload();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Dropdown label="Vaccination Centre" placeholder='Select your vaccination centre'
                                fluid
                                selection
                                name="centre"
                                value = {this.state.centre}
                                onChange = {this.handleInputChange}
                                options={vaccinationCenterOptions} />
                        </Form.Field>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <label>First Name</label>
                                <input 
                                name="firstName"
                                value = {this.state.firstName}
                                onChange = {this.handleInputChange}
                                placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input
                                name="lastName" 
                                value = {this.state.lastName}
                                onChange = {this.handleInputChange}
                                placeholder='Last Name' />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field>
                            <label>Home Address</label>
                            <input 
                            name="address"
                            value = {this.state.address}
                            onChange = {this.handleInputChange}
                            placeholder='Address' />
                        </Form.Field>
                        <Button type='submit' >Submit</Button>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default FormPage;