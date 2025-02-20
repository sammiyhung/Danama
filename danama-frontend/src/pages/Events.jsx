import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { AiOutlineSearch, AiOutlineSortAscending } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Client, Databases } from "appwrite";
import "../styles/Events.css";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6781bb7b00100ec5b3a0"); // Replace with your project ID

const databases = new Databases(client);

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("recent");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await databases.listDocuments(
          "6799f629001083c7f54b",   // Replace with your database ID
          "6799f644000e7bcf9307"  // Replace with your collection ID
        );
        setEvents(response.documents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "recent" ? "oldest" : "recent");
  };

  const handleFilter = () => {
    // Implement filter logic here if needed
    console.log("Filter button clicked!");
  };

  const filteredEvents = events
    .filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "recent"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <Container className="events-container">
      <h2 className="events-title">Events</h2>

      <div className="events-controls">
        <div className="search-bar">
          <AiOutlineSearch className="search-icon" />
          <Form.Control
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="events-actions">
          <Button variant="light" onClick={handleSort} className="sort-btn">
            <AiOutlineSortAscending className="action-icon" />
          </Button>
          <Button variant="light" onClick={handleFilter} className="filter-btn">
            <IoFilterSharp className="action-icon" />
          </Button>
        </div>
      </div>

      {loading ? (
            <p>
              <Skeleton count={5} height="80px" />
            </p>
      ) : (
        <div className="events-list">
          {filteredEvents.map((event) => {
            // Format date range or single date
            // For a single date, we might show "13 DEC"
            // For a range, e.g. "22 - 31 OCT"
            // We'll do a simple single date display:
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const month = eventDate.toLocaleString("default", { month: "short" });
            const year = eventDate.getFullYear();

            return (
              <div key={event.$id} className="event-row">
                {/* Left date/time column */}
                <div className="date-badge">
                  <span className="day">{day}</span>
                  <span className="month-year">{month.toUpperCase()} {year}</span>
                </div>

                {/* Middle event info */}
                <div className="event-info">
                  <h5 className="event-title">{event.title}</h5>
                  <p className="event-desc">{event.description?.substring(0, 60)}...</p>
                </div>

                {/* Right side "View details" button */}
                <div className="event-action">
                  <Button
                    variant="outline-primary"
                    className="details-btn"
                    onClick={() => navigate(`/events/${event.$id}`)}
                  >
                    View full details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default Events;