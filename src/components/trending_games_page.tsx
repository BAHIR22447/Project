import styles from "./trending_games_page.module.css";
import React, { useState } from "react";
import { FaFire, FaTimes } from "react-icons/fa";
import game_photo_1 from "../assets/Rectangle 23.png";
import game_photo_2 from "../assets/Rectangle 24.png";
import game_photo_3 from "../assets/Rectangle 25 (5).png";
import game_photo_4 from "../assets/Rectangle 26.png";
import { Link } from "react-router-dom";

interface Game {
  followersNumber: number;
  imgLink: string;
  cssId?: string;
  style?: React.CSSProperties;
  year?: number;
  onClick?: void;
  isArchived?: boolean;
  title?: string;
  ditails?: string;
}

const Trending_games_page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const togglePanel = (game: Game) => {
    setSelectedGame(game);
    setIsOpen(!isOpen);
  };
  const followers_list: Game[] = [
    {
      followersNumber: 40,
      imgLink: game_photo_1,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "FOR HONOR",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_2,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "LEAGUE OF LEGENDS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 39,
      imgLink: game_photo_3,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "CRYSIS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 90,
      imgLink: game_photo_4,
      year: 1999,
      cssId: "",
      style: {
        display: "flex",
      },
      title: "STRAY",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_1,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "FOR HONOR",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_2,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "LEAGUE OF LEGENDS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_3,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "CRYSIS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_4,
      year: 1999,
      cssId: "",
      style: {
        display: "flex",
      },
      title: "STRAY",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_1,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "FOR HONOR",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_2,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "LEAGUE OF LEGENDS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_3,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "CRYSIS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_4,
      year: 1999,
      cssId: "",
      style: {
        display: "flex",
      },
      title: "STRAY",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_1,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "FOR HONOR",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_2,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "LEAGUE OF LEGENDS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_3,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "CRYSIS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_4,
      year: 1999,
      cssId: "",
      style: {
        display: "flex",
      },
      title: "STRAY",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_1,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "FOR HONOR",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_2,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "LEAGUE OF LEGENDS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",
      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_3,
      cssId: "",
      year: 1999,
      style: {
        display: "flex",
      },
      title: "CRYSIS",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
    {
      followersNumber: 40,
      imgLink: game_photo_4,
      year: 1999,
      cssId: "",
      style: {
        display: "flex",
      },
      title: "STRAY",
      ditails:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt veritatis quisquam neque atque repudiandaepraesentium, suscipit, voluptatem sed delectus similiqueperferendis facilis velit esse? Quaerat iusto facereasperiores nesciunt magni. Iure doloribus sint officia eamolestiae animi? Fuga commodi optio assumenda nesciunt quaenulla recusandae ducimus praesentium harum reiciendis doloremdolorum ipsa repellendus culpa pariatur dignissimos, molestiassoluta! Adipisci, explicabo.",

      isArchived: false,
    },
  ];
  followers_list.sort((a, b) => b.followersNumber - a.followersNumber);
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
