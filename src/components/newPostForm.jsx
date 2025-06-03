import { useState } from "react";
import { initialPostValue } from "./data";
import { usePosts } from "./context/usePosts";

function NewPostForm() {
  const [postValue, setPostValue] = useState(initialPostValue);
  const [errors, setErrors] = useState({});
  const { onUpload } = usePosts();

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setPostValue((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // setPostValue((prev) => ({ ...prev, image: file }));
        setPostValue((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.title || values.title.trim().length < 8) {
      errors.title =
        "Post title is required and must be at least 8 characters long";
    }

    if (!values.image) {
      errors.image = "An image is required";
    }

    return errors;
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(postValue);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onUpload(postValue);
    }
  };

  return (
    <form onSubmit={handlePostSubmit}>
      <div className="overlayBody">
        <div className="form-group">
          <label htmlFor="postTitle">Post title</label>
          <input
            type="text"
            id="postTitle"
            name="title"
            value={postValue.title}
            onChange={handlePostChange}
            placeholder="Input title"
            minLength="8"
            maxLength="20"
            // required
            autoFocus
          />
          {errors.title && <div className="error-message">{errors.title}</div>}
        </div>
        <div className="form-group" style={{ marginTop: "16px" }}>
          <label htmlFor="uploadImage">Upload Image</label>
          <input
            type="file"
            id="uploadImage"
            name=""
            accept="image/*"
            onChange={handlePostImageChange}
          />
        </div>
        {errors.image && <div className="error-message">{errors.image}</div>}

        <div className="overlayButton" style={{ marginTop: "16px" }}>
          <button className="upload-btn" type="submit">
            Upload post
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewPostForm;
