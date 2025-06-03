import { useState } from "react";
import profileImage from "../assets/Images/Avatar.png";

function ProfileForm({ formValue, setFormValue, onSave }) {
  const [localPreview, setLocalPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLocalPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formValue,
      imagePreview: localPreview,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ep-overlayBody">
        <div className="ep-form-group">
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="userName"
            name="username"
            value={formValue.username}
            onChange={handleInputChange}
            placeholder="Input full name"
            minLength="8"
            maxLength="54"
            required
            autoFocus
          />
        </div>
        <div className="ep-form-group">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            id="professionInput"
            name="profession"
            value={formValue.profession}
            onChange={handleInputChange}
            placeholder="Input profession"
            minLength="8"
            maxLength="100"
            required
          />
        </div>
        <div className="ep-form-group">
          <label htmlFor="profileImage">Upload Image</label>
          <input
            type="file"
            id="imageInput"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Image Preview */}
        <div className="ep-form-group">
          <label htmlFor="preview">Image Preview</label>
          <img
            src={localPreview || formValue.imagePreview || profileImage}
            style={{
              maxWidth: "80px",
              marginTop: "10px",
              display: "block",
            }}
            alt="Preview"
          />
        </div>

        <div className="ep-overlayButton">
          <button type="submit" className="save-changes-btn">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
