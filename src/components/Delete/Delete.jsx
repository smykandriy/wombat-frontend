import React, { useState } from "react";
import "./DeleteModal.scss";

const DeleteModal = ({ onCancel, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(false);
    onDelete();
  };

  const handleCancel = () => {
    setShowModal(false);
    onCancel();
  };

  return (
    <div>
      {showModal && (
        <div className="delete-modal">
          <h2>Видалити інструмент?</h2>
          <div className="buttons">
            <button onClick={handleCancel}>Скасувати</button>
            <button onClick={handleDelete}>Так</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
