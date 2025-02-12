import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { BackendUrl } from "../../constants.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "notification.css"

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Fetch notifications from backend
  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${BackendUrl}api/notifications`);
      const data = await response.json();
      if (response.ok) {
        setNotifications(data);
      } else {
        throw new Error("Failed to load notifications");
      }
    } catch (error) {
      toast.error("Error fetching notifications!", { position: "top-right" });
    }
  };

  // Mark notification as read
  const markAsRead = async (id) => {
    try {
      const response = await fetch(`${BackendUrl}api/notifications/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Notification removed!", { position: "top-right" });
        setNotifications(notifications.filter((note) => note._id !== id));
      } else {
        throw new Error("Failed to delete notification");
      }
    } catch (error) {
      toast.error("Error deleting notification!", { position: "top-right" });
    }
  };

  return (
    <div className="p-3 mt-4">
      <h2 className="text-center mb-4">📢 Notifications</h2>
      <Row>
        {notifications.length === 0 ? (
          <p className="text-center">No notifications available.</p>
        ) : (
          notifications.map((notification) => (
            <Col md={6} lg={4} key={notification._id} className="mb-3">
              <Card id="notificationCard" className="shadow-lg border-0">
                <Card.Body>
                  <Card.Title className="text-primary">{notification.title}</Card.Title>
                  <Card.Text>{notification.message}</Card.Text>
                  <small className="text-muted">
                    📅 {new Date(notification.createdAt).toLocaleString()}
                  </small>
                  <Button
                    variant="danger"
                    size="sm"
                    className="mt-2"
                    onClick={() => markAsRead(notification._id)}
                  >
                    Mark as Read
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <ToastContainer />
    </div>
  );
};

export default NotificationsPage;
