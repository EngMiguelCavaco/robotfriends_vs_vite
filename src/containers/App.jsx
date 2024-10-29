import /*React,*/ {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
//  import { robots } from './robots';
import "./App.css";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    
    const fetchData = async () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => setRobots(users));
        } catch(error) {
            console.log("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);  
    } 

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase()
            .includes(searchfield.toLocaleLowerCase());
    });

    if (robots.length === 0) {
        return <h1 className="tc">Loading</h1>
    } else {
        return (
            <div className = "tc pa2" style={{paddingBottom:"60px"}}> 
                <h1 className="f2">Robot Friends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        )
    }
} 

export default App;