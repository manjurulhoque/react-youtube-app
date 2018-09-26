import React, {Component} from 'react'

export default class Header extends Component {

    state = {
        value: ''
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.onInputChange(this.state.value)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <a className="navbar-brand" href="#">React Youtube</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input
                                className="form-control"
                                style={{width: 500}}
                                type="text"
                                onChange={(event) => this.setState({value : event.target.value})}
                                placeholder="Search"/>
                            <button onClick={this.onClick} className="btn btn-default" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
