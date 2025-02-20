import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases } from "appwrite";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import "../styles/EventDetails.css";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6781bb7b00100ec5b3a0"); // Replace with your project ID

const databases = new Databases(client);

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await databases.getDocument(
          "6799f629001083c7f54b",     // Replace with your database ID
          "6799f644000e7bcf9307",   // Replace with your collection ID
          eventId
        );
        setEvent(response);
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleBack = () => {
    navigate("/events");
  };

  if (loading) return <p className="eventdetails-loading">
      <Skeleton count={10} height="40px" />
  </p>;
  if (!event) return <p className="eventdetails-error">Event not found.</p>;

  return (
    <Container className="eventdetails-container">
      <Button variant="secondary" onClick={handleBack} className="eventdetails-backButton">
        ← Back to Events
      </Button>
        <div className="eventdetails-banner">
          {event.banner && (
			  <img src={event.banner} alt="Event Banner" />
			)}
        </div>


      <div className="eventdetails-content">
        <h1 className="eventdetails-title">{event.title}</h1>
        <p className="eventdetails-description">{event.description}</p>
        <p className="eventdetails-date"><strong>Date:</strong> {event.date}</p>
        <p className="eventdetails-time"><strong>Time:</strong> {event.time}</p>
        <p className="eventdetails-location"><strong>Location:</strong> {event.location}</p>
        <p className="eventdetails-organizer"><strong>Organizer:</strong> {event.organizer}</p>
        <p className="eventdetails-category"><strong>Category:</strong> {event.category}</p>
        <p className="eventdetails-status"><strong>Status:</strong> {event.status}</p>
        <p className="eventdetails-targetAudience"><strong>Target Audience:</strong> {event.targetAudience}</p>
        <p className="eventdetails-registrationLink"><strong>Registration Link:</strong> {event.registrationLink}</p>
        <p className="eventdetails-sponsors"><strong>Sponsors:</strong> {event.sponsors}</p>
      </div>
    </Container>
  );
};

export default EventDetails;