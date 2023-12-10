import { SidebarLink } from "@/types";
export const themes = [
   {
      value: "light",
      label: "Light",
      icon: "/assets/icons/sun.svg",
   },
   {
      value: "dark",
      label: "Dark",
      icon: "/assets/icons/moon.svg",
   },
   {
      value: "system",
      label: "System",
      icon: "/assets/icons/computer.svg",
   },
];
export const sidebarLinks: SidebarLink[] = [
   {
      imgURL: "/assets/icons/home.svg",
      route: "/",
      label: "Home",
   },
   {
      imgURL: "/assets/icons/users.svg",
      route: "/community",
      label: "Community",
   },
   {
      imgURL: "/assets/icons/star.svg",
      route: "/collection",
      label: "Collections",
   },
   {
      imgURL: "/assets/icons/suitcase.svg",
      route: "/jobs",
      label: "Find Jobs",
   },
   {
      imgURL: "/assets/icons/tag.svg",
      route: "/tags",
      label: "Tags",
   },
   {
      imgURL: "/assets/icons/user.svg",
      route: "/profile",
      label: "Profile",
   },
   {
      imgURL: "/assets/icons/question.svg",
      route: "/ask-question",
      label: "Ask a question",
   },
];
export const BADGE_CRITERIA = {
   QUESTION_COUNT: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
   },
   ANSWER_COUNT: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
   },
   QUESTION_UPVOTES: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
   },
   ANSWER_UPVOTES: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
   },
   TOTAL_VIEWS: {
      BRONZE: 1000,
      SILVER: 10000,
      GOLD: 100000,
   },
};

export const RsbDummyQuestions = [
   {
      text: "agsdgasdfgsdvasgasgadsvbcx dfdbcfzbzdfb arbadfgadfg dfb adfbadfb",
      _id: "1",
   },
   {
      text: "adfgadfgadfbadf adfgadfgadf gdfag adfghajgfjvh bjmcghkyhkdghjhgmnchvjmcguy ",
      _id: "2",
   },
   { text: "sfghsfghsfghsfgh", _id: "3" },
   {
      text: "fshfghfgjhtsykj jty kyuklyukjstyj sjhst tyjkdtyjstfn syjdikytshjsthnftgns  tysjsrthfghsfhjts ",
      _id: "4",
   },
   {
      text: "tshsrthergearrhgehaehrhaeraehraerh e earh ht rs jtjsrsjrjsrhaehr aeh reraree a",
      _id: "5",
   },
];

export const RsbDummyTags = [
   { text: "NextJs", quantity: 500, _id: "1" },
   { text: "NextJs", quantity: 500, _id: "2" },
   { text: "NextJs", quantity: 500, _id: "3" },
   { text: "NextJs", quantity: 500, _id: "4" },
   { text: "NextJs", quantity: 500, _id: "5" },
   { text: "NextJs", quantity: 500, _id: "6" },
   { text: "NextJs", quantity: 500, _id: "7" },
   { text: "NextJs", quantity: 500, _id: "8" },
];
