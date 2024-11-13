import React, { useState } from "react";
import axios from "axios";
import "../styles/ServiceList.css";
import { Modal, Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ServiceList({ services, fetchServices }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [serviceToUpdate, setServiceToUpdate] = useState(null);
  
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.filter((service) => service !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedServices(
      selectedServices.length === services.length
        ? []
        : services.map((service) => service._id)
    );
  };

  const handleAddNewService = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewService({ title: "", description: "", image: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewService((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSaveNewService = async () => {
    const formData = new FormData();
    formData.append("title", newService.title);
    formData.append("description", newService.description);
    if (newService.image) formData.append("image", newService.image);

    try {
      await axios.post("http://localhost:5000/api/services", formData);
      alert("New service added successfully!");
      fetchServices();
      handleCloseAddModal();
    } catch (error) {
      console.error("Error adding service:", error.message);
    }
  };

  const handleUpdateService = (service) => {
    setServiceToUpdate(service);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setServiceToUpdate(null);
  };

  const handleSaveUpdateService = async () => {
    const formData = new FormData();
    formData.append("title", serviceToUpdate.title);
    formData.append("description", serviceToUpdate.description);
    if (serviceToUpdate.image) formData.append("image", serviceToUpdate.image);

    try {
      await axios.put(
        `http://localhost:5000/api/services/${serviceToUpdate._id}`,
        formData
      );
      alert("Service updated successfully!");
      fetchServices();
      handleCloseUpdateModal();
    } catch (error) {
      console.error("Error updating service:", error.message);
    }
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleContentClick = (serviceTitle) => {
    navigate(`/service/${serviceTitle}`); // Redirect to the dynamic service page
  };

  return (
    <div className="container">
      <div className="service-list">
        <h2>Service List</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
          <input
            type="text"
            placeholder="Enter your search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control search-bar mb-2 mb-md-0"
          />
          <div className="btn-group">
            <Button className="btn btn-primary" onClick={handleSelectAll}>
              {selectedServices.length === services.length
                ? "Deselect All"
                : "Select All"}
            </Button>
            <Button
              className="btn btn-success ms-2"
              onClick={handleAddNewService}
            >
              Add New
            </Button>
          </div>
        </div>

        <div className="table-container">
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1}</td>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                  <td>
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-image"
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <Button
                        variant="warning"
                        onClick={() => handleUpdateService(service)}
                        className="me-2"
                      >
                        Update
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => handleContentClick(service.title)}
                        className="me-2"
                      >
                        Content
                      </Button>
                    </div>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service._id)}
                      onChange={() => handleSelectService(service._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Modal for Add New Service */}
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formServiceTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={newService.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                />
              </Form.Group>
              <Form.Group controlId="formServiceDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group controlId="formServiceImage">
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
            <Button variant="primary" onClick={handleSaveNewService}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for Update Service */}
        <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formServiceTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={serviceToUpdate?.title || ""}
                  onChange={(e) =>
                    setServiceToUpdate({
                      ...serviceToUpdate,
                      title: e.target.value,
                    })
                  }
                  placeholder="Title"
                />
              </Form.Group>
              <Form.Group controlId="formServiceDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={serviceToUpdate?.description || ""}
                  onChange={(e) =>
                    setServiceToUpdate({
                      ...serviceToUpdate,
                      description: e.target.value,
                    })
                  }
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group controlId="formServiceImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setServiceToUpdate({
                      ...serviceToUpdate,
                      image: e.target.files[0],
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseUpdateModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveUpdateService}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ServiceList;
