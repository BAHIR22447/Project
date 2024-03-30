import game_photo_1 from "../assets/Rectangle 23.png";
import game_photo_2 from "../assets/Rectangle 24.png";
import game_photo_3 from "../assets/Rectangle 25 (5).png";
import game_photo_4 from "../assets/Rectangle 26.png";
import { useState } from "react";

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
    followersNumber: 48,
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
    followersNumber: 52,
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





export type { Game };
export { followers_list };
