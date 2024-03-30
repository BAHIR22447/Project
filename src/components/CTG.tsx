import React, { useState } from "react";
import Button from "./Button";
import "./CTG.css";
import { FaFire, FaTimes } from "react-icons/fa";
import { followers_list } from "./maduls";
import { Game } from "./maduls";
import { Link } from "react-router-dom";
import "./button.css";

const Section_2: React.FC<{ showAll?: boolean }> = ({ showAll = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  let filteredList: Game[] = followers_list;

  if (!showAll) {
    filteredList = followers_list
      .slice() // Create a copy of the array to avoid mutating the original array
      .sort((a, b) => b.followersNumber - a.followersNumber) // Sort by followers in descending order
      .slice(0, 4); // Take the top 4 games
  }

  const togglePanel = (game: Game) => {
    setSelectedGame(game);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="game_details_overlay" onClick={() => setIsOpen(false)}>
          <div className="game_details" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn close_button_section_2"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            {selectedGame && (
              <>
                <img src={selectedGame.imgLink} alt="Game" />
                <h3>{selectedGame.title}</h3>
                <h5>Synopsis</h5>
                <p>{selectedGame.ditails}</p>
                <p>Followers: {selectedGame.followersNumber}</p>
                <p>Year: {selectedGame.year}</p>
              </>
            )}
          </div>
        </div>
      )}
      {}
      <div className="section_2">
        <div className="container-1">
          <div className="text_button">
            <h2 className="upper_div_text">Currently Trending Games</h2>
            <Link to="./trinding">
              {" "}
              <Button
                className="upper_div_button button_2"
                backgroundColor="rgb(37, 30, 30)"
                color="white"
                borderRadius="8px"
                backgroundColorH=" rgb(17, 16, 16)"
                colorH="whtie"
                transition="background-color 0.3s ease"
              >
                SEE ALL
              </Button>
            </Link>
          </div>
          <div className="cards_container">
            {filteredList.map((item, index) => (
              <div key={index} className="section_2_card">
                <img
                  id={item.cssId || ""}
                  className="section_2_images"
                  style={item.style || {}}
                  src={item.imgLink}
                  alt=""
                  onClick={() => togglePanel(item)}
                />
                <div className="card_text">
                  <h4>
                    {" "}
                    <FaFire /> {item.followersNumber} Followers{" "}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="lower_container">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_2;
