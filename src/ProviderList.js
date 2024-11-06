import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ProviderList extends Component {

    constructor(props) {
        super(props);
        this.state = {providers: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/providers')
            .then(response => response.json())
            .then(data => this.setState({providers: data}));
    }
}
export default ProviderList;