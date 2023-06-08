import React from "react";
import { Button, Modal } from "react-bootstrap";

interface ConfirmDeleteProps {
  handleDelete: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

const ConfirmDelete = ({
  children,
  onCancel,
  handleDelete,
}: ConfirmDeleteProps) => {
  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{children}</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;
