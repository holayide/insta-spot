import { useState, createContext } from "react";
import { cardsData } from "../data";

const PostContext = createContext();

function PostProvider({ children }) {
  const [cards, setCards] = useState(cardsData);
  const [postModalOpen, setPostModalOpen] = useState(false);

  const onUpload = (newPost) => {
    setCards((prevCards) => [...prevCards, newPost]);
    setPostModalOpen(false);
  };

  const onClose = () => {
    setPostModalOpen(false);
  };

  return (
    <PostContext.Provider
      value={{ cards, postModalOpen, setPostModalOpen, onClose, onUpload }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
