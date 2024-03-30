import styles from "./trending_games_page.module.css";
import { useState } from "react";
import { FaFire, FaTimes } from "react-icons/fa";
import { followers_list } from "./maduls";
import { Game } from "./maduls";

const Trending_games_page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const togglePanel = (game: Game) => {
    setSelectedGame(game);
    setIsOpen(!isOpen);
  };

  followers_list.sort((a, b) => b.followersNumber - a.followersNumber);
  return (
    <>
      {isOpen && (
        <div className={styles.game_details_overlay} onClick={() => setIsOpen(false)}>
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
      <div className={styles.trinding_games_body}>
        <div className={styles.list_container}>
          <div className={styles.cards_container}>
            {followers_list.map((item, index) => (
              <div key={index} className={styles.section_2_card}>
                <img
                  id={item.cssId || ""}
                  className={styles.section_2_images}
                  style={item.style || {}}
                  src={item.imgLink}
                  alt=""
                  onClick={() => togglePanel(item)}
                />
                <div className={styles.card_text}>
                  <h4>
                    {" "}
                    <FaFire /> {item.followersNumber} Followers{" "}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending_games_page;
