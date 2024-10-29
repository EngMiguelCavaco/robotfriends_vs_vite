import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
//  import { robots } from './robots';
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});  
    } 

    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase()
                .includes(searchfield.toLocaleLowerCase());
        });

        if (robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            return (
                <div className = "tc pa2">
                    <h1 className="f2">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                    <footer className="tc ma3">By Miguel</footer>
                </div>
            )
        }  
    }
}

export default App;