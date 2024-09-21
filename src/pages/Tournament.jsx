import Constants from './Constants.jsx';
import { useState } from 'react';
import "./Card.css"
const Tournament = () => {
  const [input,setInput]=useState("");

  const search = () => {
    const foundItem = Constants.filter((match) =>
    match.matchDescription.toLowerCase().includes(input.toLowerCase())||
    match.matchDate.toLowerCase().includes(input.toLowerCase())||
    match.matchFormat.toLowerCase().includes(input.toLowerCase())
    );
    if (foundItem) {
      console.log("Item found:", foundItem);
      return foundItem; // You can return this or use it further in your logic
    } else {
      console.log("No items found");
      return null; // Return null if no match is found
    }
  }
  const handleSearch=(e)=>{
    setInput(e.target.value);
      }
  return (
    <>
        <input
    type="text"
    placeholder="Search..."
    value={input}
    onChange={handleSearch} // Event listener for input change
    className='search'
  />
  
        <div className="match-card-container" >
 
 {search().map((match) => (
       
        <div key={match.matchDescription} className="match-card">
        <div className="disp">
        <img src ={match.img} className='image' />
          <h2 className='desc' >{match.matchDescription}</h2>
          <p  className='format'><span>Format:</span> {match.matchFormat}</p>
          <p className='date'><span>Date:</span> {match.matchDate}</p>
        
          <p className="venue-info">
            <span>Venue:</span> {match.venueInfo.venueName}, {match.venueInfo.city}, {match.venueInfo.country}
          </p>
          </div>
          
          <p><span>Team 1:</span> {match.matchTeamInfo.team1}</p>
          <p><span>Team 2:</span> {match.matchTeamInfo.team2}</p>
        
         
          <p className="umpires">
            <span>Umpires:</span> {match.umpire1}, {match.umpire2}, {match.umpire3}
          </p>
        </div>
      
      ))}
    </div>
    </>
  );
};

export default Tournament;