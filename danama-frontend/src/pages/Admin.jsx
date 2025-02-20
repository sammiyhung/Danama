import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Dropdown, Table } from "react-bootstrap";
import { Client, Databases, Storage, Account } from "appwrite";
import "../styles/Admin.css";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6781bb7b00100ec5b3a0"); // Replace with your project ID

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    organizer: "",
    category: "",
    targetAudience: "",
    registrationLink: "",
    status: "Scheduled",
    sponsors: "",
    banner: null,
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // success or error

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const sessionExpiry = localStorage.getItem("sessionExpiry");
        if (!sessionExpiry || Date.now() > sessionExpiry) {
          throw new Error("Session expired");
        }

        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.error("User is not logged in:", error);
        localStorage.removeItem("sessionExpiry");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsResponse = await databases.listDocuments(
          "6799f629001083c7f54b", // Replace with your database ID
          "6799f644000e7bcf9307" // Replace with your collection ID
        );
        setEvents(eventsResponse.documents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      localStorage.removeItem("sessionExpiry");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, banner: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await account.get().catch(() => null);
      if (!user) {
        alert("You must be logged in to post an event.");
        return;
      }

      const userId = user.$id;
      let bannerUrl = null;

      if (formData.banner) {
        const uploadResponse = await storage.createFile(
          "6799fb0e002ad29056eb", // Replace with your bucket ID
          "unique()", // Unique file ID
          formData.banner
        );

        bannerUrl = storage.getFileView("6799fb0e002ad29056eb", uploadResponse.$id);
      }

      await databases.createDocument(
        "6799f629001083c7f54b", // Replace with your database ID
        "6799f644000e7bcf9307", // Replace with your collection ID
        "unique()", // Generate unique document ID
        {
          title: formData.title,
          description: formData.description,
          date: formData.date,
          time: formData.time,
          location: formData.location,
          organizer: formData.organizer,
          category: formData.category,
          targetAudience: formData.targetAudience,
          registrationLink: formData.registrationLink,
          status: formData.status,
          sponsors: formData.sponsors,
          banner: bannerUrl,
          createdBy: userId,
        }
      );

      setStatusMessage("Event created successfully!");
      setStatusType("success");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000); // Hide status message after 3 seconds

      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        organizer: "",
        category: "",
        targetAudience: "",
        registrationLink: "",
        status: "Scheduled",
        sponsors: "",
        banner: null,
      });
    } catch (error) {
      console.error(error);
      setStatusMessage("Event creation failed. Please try again.");
      setStatusType("error");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
  };

  const handleEventDelete = async (eventId) => {
    try {
      await databases.deleteDocument("6799f629001083c7f54b", "6799f644000e7bcf9307", eventId);
      setEvents(events.filter(event => event.$id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container className="admin-container">
      <h1>Admin - Post New Event</h1>
      <p>Logged in as: {user?.email}</p>
      <Button variant="danger" onClick={handleLogout} className="logout-button">
        Sign Out
      </Button>

      {/* Status Message Overlay */}
      {statusMessage && (
        <div className={`status-overlay ${statusType}`}>
          <p>{statusMessage}</p>
        </div>
      )}

      {/* Event Form */}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formOrganizer">
              <Form.Label>Organizer</Form.Label>
              <Form.Control
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Event Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Webinar">Webinar</option>
                <option value="Seminar">Seminar</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>Event Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Canceled">Canceled</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBanner">
              <Form.Label>Event Banner</Form.Label>
              <Form.Control
                type="file"
                name="banner"
                onChange={handleFileChange}
              />
            </Form.Group>

            <Form.Group controlId="formTargetAudience">
              <Form.Label>Target Audience</Form.Label>
              <Form.Control
                type="text"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formRegistrationLink">
              <Form.Label>Registration Link</Form.Label>
              <Form.Control
                type="url"
                name="registrationLink"
                value={formData.registrationLink}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formSponsors">
              <Form.Label>Sponsors</Form.Label>
              <Form.Control
                type="text"
                name="sponsors"
                value={formData.sponsors}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Post Event
        </Button>
      </Form>

      {/* Events Table */}
      <Table striped bordered hover className="events-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.$id}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.status}</td>
              <td>
                <Button variant="info" onClick={() => handleEventDelete(event.$id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;