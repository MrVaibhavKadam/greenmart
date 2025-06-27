import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstances";
import "../../styles/CustomerProfilePage.css";

const CustomerProfilePage = () => {
  const [preview, setPreview] = useState("");
  const [customer, setCustomer] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pinCode: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/customers/profile")
      .then((res) => {
        setCustomer(res.data);
        setPreview(res.data.image || "");

        setFormData({
          name: res.data.name,
          phone: res.data.phone,
          address: res.data.address,
          pinCode: res.data.pinCode,
        });
      })
      .catch((err) => console.error("Failed to fetch profile:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axiosInstance
      .put("/customers/profile", formData)
      .then((res) => {
        setCustomer(res.data);
        setEditMode(false);
        alert("Profile updated successfully!");
      })
      .catch(() => alert("Failed to update profile."));
  };

  if (!customer) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>

      <div className="profile-card">
        {editMode ? (
          <>
            <label>
              Name:{" "}
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:{" "}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:{" "}
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>

            <label>
              Upload Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData({ ...formData, image: reader.result });
                    setPreview(reader.result);
                  };
                  if (file) reader.readAsDataURL(file);
                }}
              />
            </label>
            {preview && (
              <img src={preview} alt="Profile" className="profile-img" />
            )}

            <label>
              Pin Code:{" "}
              <input
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </label>

            <button className="profile-btn" onClick={handleSave}>
              Save
            </button>
            <button
              className="profile-btn cancel"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {customer.name}
            </p>
            <p>
              <strong>Email:</strong> {customer.email}
            </p>
            <p>
              <strong>Phone:</strong> {customer.phone}
            </p>
            <p>
              <strong>Address:</strong> {customer.address}
            </p>
            <p>
              <strong>Pin Code:</strong> {customer.pinCode}
            </p>

            <button className="profile-btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerProfilePage;
