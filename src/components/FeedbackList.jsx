import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>no feedback to display yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacitiy: 0 }}
            animate={{ opacitiy: 1 }}
            exit={{ opacitiy: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

// without animation
// return (
//   <div className="feedback-list">
//     {feedback.map((item) => (
//       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//     ))}
//   </div>
// );
