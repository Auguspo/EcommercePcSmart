import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const EditModal = ({ producto, showModal, onClose, recargarProductos }) => {
  const [formulario, setFormulario] = useState({
    titulo: producto.titulo,
    precio: producto.precio,
    descripcion: producto.descripcion,
    marca: producto.marca,
    imagen: producto.imagen,
    categoria: producto.categoria,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud a tu API para actualizar el ítem
      await axios.put(
        `http://localhost:3000/api/productos/${producto._id}`,
        formulario
      );
      // Lógica adicional, como cerrar el modal o actualizar la lista de productos
      onClose();
    } catch (error) {
      console.error("Error al actualizar el ítem:", error);
      // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
    }
  };
  const handleBorrarProducto = async(e) => {
    // Agrega aquí la lógica para borrar el item
    e.preventDefault();
    try {
        // Realiza la solicitud a tu API para actualizar el ítem
        await axios.delete(
            `http://localhost:3000/api/productos/${producto._id}`,
            formulario
            );
            console.log("Borrando el item:", producto._id);
        // Lógica adicional, como cerrar el modal o actualizar la lista de productos
        onClose();
      } catch (error) {
        console.error("Error al borrar el ítem:", error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
  };

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="titulo">
          <Form.Label>Título:</Form.Label>
          <Form.Control
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="text"
            name="precio"
            value={formulario.precio}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="categoria">
          <Form.Label>Categoria:</Form.Label>
          <Form.Control
            type="text"
            name="categoria"
            value={formulario.categoria}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="marca">
          <Form.Label>Marca:</Form.Label>
          <Form.Control
            type="text"
            name="marca"
            value={formulario.marca}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="imagen">
          <Form.Label>URL de la Imagen:</Form.Label>
          <Form.Control
            type="text"
            name="imagen"
            value={formulario.imagen}
            onChange={handleChange}
          />
        </Form.Group>{" "}
        <Button variant="danger" onClick={handleBorrarProducto}>
          Borrar Producto
        </Button>{" "}
        <Button variant="primary" onClick={handleSubmit} type="submit">
          Guardar Cambios
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
