import val from "../assets/Images/Mask group-5.png";
import terrace from "../assets/Images/Mask group-2.png";
import cafe from "../assets/Images/Mask group-3.png";
import bridge from "../assets/Images/Mask group.png";
import tunnel from "../assets/Images/Mask group-1.png";
import mountain from "../assets/Images/Mask group-4.png";

export const initialValue = {
  username: "Bessie Coleman",
  profession: "Civil Aviator",
  image: null,
  imagePreview: null,
};

export const initialPostValue = {
  title: "",
  image: null,
};

export const cardsData = [
  {
    image: val,
    title: "Val Thorens",
    liked: false,
  },
  {
    image: terrace,
    title: "Restaurant-terrace",
    liked: false,
  },
  {
    image: cafe,
    title: "An outdoor cafe",
    liked: false,
  },
  {
    image: bridge,
    title: "A very long bridge over the forest...",
    liked: false,
  },
  {
    image: tunnel,
    title: "Tunnel with morning light",
    liked: false,
  },
  {
    image: mountain,
    title: "Mountain house",
    liked: false,
  },
];
