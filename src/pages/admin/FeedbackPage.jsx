// src/pages/admin/FeedbackPage.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstances";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axiosInstance.get("/admin/feedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((fb) => (
          <div
            key={fb.fid}
            className="bg-white p-4 rounded shadow border border-gray-200"
          >
            <h3 className="text-lg font-semibold">{fb.cname}</h3>
            <p className="text-gray-700">{fb.feedback}</p>
            <p className="text-sm text-yellow-600">⭐ {fb.ratings}</p>
            <p className="text-xs text-gray-500">
              {new Date(fb.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
