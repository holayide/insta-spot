import { useState } from "react";

import Modal from "./modal";
import ProfileForm from "./profileForm";
import NewPostForm from "./newPostForm";
import { initialValue } from "./data";

import add from "../assets/Icons/Icon_add.svg";
import HeroProfile from "./heroProfile";
import { usePosts } from "./context/usePosts";

function Hero() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { postModalOpen, setPostModalOpen } = usePosts();

  const [formValue, setFormValue] = useState(initialValue);

  const handleSave = (newValues) => {
    setFormValue(newValues);
    setEditModalOpen(false);
  };

  return (
    <section className="hero-section">
      {/* new post button */}
      <HeroProfile setEditModalOpen={setEditModalOpen} formValue={formValue} />

      <button
        onClick={() => setPostModalOpen((prev) => !prev)}
        className="newPostBtn"
      >
        <span>
          <img src={add} alt="add" />
        </span>
        <span>New Post</span>
      </button>

      {/* Edit Profile Modal */}
      <Modal
        title="Edit Profile"
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
      >
        <ProfileForm
          formValue={formValue}
          setFormValue={setFormValue}
          onSave={handleSave}
        />
      </Modal>

      {/* New Post Modal */}
      <Modal
        title="New post"
        open={postModalOpen}
        onClose={() => setPostModalOpen(false)}
      >
        <NewPostForm />
      </Modal>
    </section>
  );
}

export default Hero;
