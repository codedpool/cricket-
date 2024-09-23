import Constants from './Constants.jsx';
import { useState } from 'react';
import "./Card.css"

const Tournament = () => {
  const [input, setInput] = useState("");

  const search = () => {
    const foundItem = Constants.filter((match) =>
      match.matchDescription.toLowerCase().includes(input.toLowerCase()) ||
      match.matchDate.toLowerCase().includes(input.toLowerCase()) ||
      match.matchFormat.toLowerCase().includes(input.toLowerCase())
    );
    if (foundItem.length > 0) {
      console.log("Item found:", foundItem);
      return foundItem;
    } else {
      console.log("No items found");
      return [];
    }
  };

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f0] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111811]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em]">Cricket Calendar</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Upcoming Events</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Series</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Countries</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Teams</a>
            </div>
            <div className="flex gap-2">
             
           
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/def10d76-fe3a-41c1-b5bf-de10451d39f2.png")' }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111811] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Upcoming Cricket Matches</p>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={handleSearch}
              className='search'
            />
            {search().length > 0 ? search().map((match) => (
              <div key={match.matchDescription} className="match-card">
                <img src={match.img}/>
                <h3>{match.matchDescription}</h3>
                <p>{match.matchDate}</p>
                <p>{match.matchFormat}</p>
              </div>
            )) : <p>No items found</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;

