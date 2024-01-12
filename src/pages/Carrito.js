import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';

const CarritoCompra = () => {
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const [direccionEntrega, setDireccionEntrega] = useState({
    calle: '',
    ciudad: '',
    codigoPostal: '',
  });

  const [mostrarSeccionPago, setMostrarSeccionPago] = useState(false);

  const handleActualizarCantidad = (itemId, cantidad) => {
    // Actualiza la cantidad de un producto en el carrito
    const nuevosItems = itemsCarrito.map(item =>
      item.id === itemId ? { ...item, cantidad } : item
    );
    setItemsCarrito(nuevosItems);
  };

  const handleActualizarDireccion = e => {
    // Actualiza la dirección de entrega
    const { name, value } = e.target;
    setDireccionEntrega(prevDireccion => ({ ...prevDireccion, [name]: value }));
  };

  const handleRealizarPedido = () => {
    // Lógica para enviar el pedido a la API o realizar acciones adicionales
    // Puedes agregar lógica adicional aquí, como mostrar un mensaje de éxito, etc.
    setMostrarSeccionPago(true);
  };

  return (
    <Container className="mt-5">
      <Row>
        {/* Carrito de Compra */}
        <Col md={8}>
          <h2>Carrito de Compra</h2>
          <ListGroup>
            {itemsCarrito.map(item => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col>{item.nombre}</Col>
                  <Col>${item.precio}</Col>
                  <Col>
                    <Form.Control
                      type="number"
                      value={item.cantidad}
                      onChange={e => handleActualizarCantidad(item.id, parseInt(e.target.value, 10))}
                    />
                  </Col>
                  <Col>${item.precio * item.cantidad}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Detalles de Entrega (Componente Lateral) */}
        <Col md={4}>
          <h2>Detalles de Entrega</h2>
          <Form>
            <Form.Group controlId="calle">
              <Form.Label>Calle:</Form.Label>
              <Form.Control
                type="text"
                name="calle"
                value={direccionEntrega.calle}
                onChange={handleActualizarDireccion}
              />
            </Form.Group>

            <Form.Group controlId="ciudad">
              <Form.Label>Ciudad:</Form.Label>
              <Form.Control
                type="text"
                name="ciudad"
                value={direccionEntrega.ciudad}
                onChange={handleActualizarDireccion}
              />
            </Form.Group>

            <Form.Group controlId="codigoPostal">
              <Form.Label>Código Postal:</Form.Label>
              <Form.Control
                type="text"
                name="codigoPostal"
                value={direccionEntrega.codigoPostal}
                onChange={handleActualizarDireccion}
              />
            </Form.Group>

            <Button variant="danger border" className='w-100 my-3' onClick={handleRealizarPedido}>
              Realizar Pedido
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Sección de Pago */}
      {mostrarSeccionPago && (
        <Row className="mt-3">
          <Col>
            <h2>Completar Pago</h2>
            {/* Agrega aquí los detalles de pago y la integración con MercadoPago */}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CarritoCompra;
