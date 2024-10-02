import { useState } from "react";
import "./ReviewSection.css";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (newReview.name && newReview.content) {
  //       setReviews((prevReviews) => [
  //         ...prevReviews,
  //         { ...newReview, id: Date.now() },
  //       ]);
  //       setNewReview({ name: "", content: "" });
  //     }
  //   };

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!newReview.name.trim()) {
      errors.name = "Name is required";
    }
    if (!newReview.content.trim()) {
      errors.content = "Review content is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setReviews((prevReviews) => [
        ...prevReviews,
        { ...newReview, id: Date.now() },
      ]);
      setNewReview({ name: "", content: "" });
      setFormErrors({});
    }
  };

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
        <textarea
          name="content"
          value={newReview.content}
          onChange={handleInputChange}
          placeholder="Write your review here..."
          required
        ></textarea>
        {formErrors.content && <p className="error">{formErrors.content}</p>}
        <button type="submit">Submit Review</button>
      </form>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <h3>{review.name}</h3>
            <p>{review.content}</p>
            <p className="review-timestamp">
              Posted on: {new Date(review.id).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
