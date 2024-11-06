import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SliderList.css";
import { Modal, Button, Table, Form } from "react-bootstrap";

function SliderList() {
  const [advertisements, setAdvertisements] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAds, setSelectedAds] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAd, setNewAd] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/advertisements"
      );
      setAdvertisements(response.data);
    } catch (error) {
      console.error("Error fetching advertisements:", error.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectAd = (id) => {
    setSelectedAds((prev) =>
      prev.includes(id) ? prev.filter((ad) => ad !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedAds(
      selectedAds.length === advertisements.length
        ? []
        : advertisements.map((ad) => ad._id)
    );
  };

  const handleDeleteSelected = async () => {
    try {
      await axios.delete("http://localhost:5000/api/advertisements", {
        data: { ids: selectedAds },
      });
      alert("Selected advertisements deleted successfully!");
      fetchAdvertisements();
      setSelectedAds([]);
    } catch (error) {
      console.error("Error deleting advertisements:", error.message);
    }
  };

  const handleDeleteSingle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/advertisements/${id}`);
      alert("Advertisement deleted successfully!");
      fetchAdvertisements();
    } catch (error) {
      console.error("Error deleting advertisement:", error.message);
    }
  };

  const handleAddNewAdvertisement = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewAd({ title: "", description: "", image: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAd((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewAd((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSaveNewAd = async () => {
    const formData = new FormData();
    formData.append("title", newAd.title);
    formData.append("description", newAd.description);
    if (newAd.image) formData.append("image", newAd.image);

    try {
      await axios.post("http://localhost:5000/api/advertisements", formData);
      alert("New advertisement added successfully!");
      fetchAdvertisements();
      handleCloseAddModal();
    } catch (error) {
      console.error("Error adding advertisement:", error.message);
    }
  };

  const filteredAds = advertisements.filter((ad) =>
    ad.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="slider-list">
        <h2>Slider List</h2>
        <div className="d-flex justify-content-center mb-3">
          <input
            type="text"
            placeholder="Enter your search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control me-2 search-bar"
          />
          <Button className="btn btn-primary" onClick={handleSelectAll}>
            {selectedAds.length === advertisements.length
              ? "Deselect All"
              : "Select All"}
          </Button>
          <Button
            className="btn btn-danger ms-2"
            onClick={handleDeleteSelected}
            disabled={!selectedAds.length}
          >
            Delete Selected
          </Button>
          <Button
            className="btn btn-success ms-2"
            onClick={handleAddNewAdvertisement}
          >
            Add New
          </Button>
        </div>

        <div className="table-container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Heading</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {filteredAds.map((ad, index) => (
              <tr key={ad._id}>
                <td>{index + 1}</td>
                <td>{ad.title}</td>
                <td>{ad.description}</td>
                <td>
                  {ad.image ? (
                    <img src={ad.image} alt={ad.title} className="ad-image" />
                  ) : (
                    "No image"
                  )}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteSingle(ad._id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedAds.includes(ad._id)}
                    onChange={() => handleSelectAd(ad._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>

        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Advertisement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formAdTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={newAd.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                />
              </Form.Group>
              <Form.Group controlId="formAdDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={newAd.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group controlId="formAdImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveNewAd}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default SliderList;
