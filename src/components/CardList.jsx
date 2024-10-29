// import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    if (robots.length === 0) {
        return (<h1 className="tc">No matches</h1>)
    } else {
        return (
        <div>
            {robots.map((user) => {
                return (
                    <Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email}
                    />
                );})
            }
        </div>
    );}
}

export default CardList;