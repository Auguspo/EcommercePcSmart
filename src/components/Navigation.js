import React from "react";
import { Container, Nav, Navbar, Dropdown, Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home"; // Asegúrate de importar el componente Home correctamente
import Shop from "../pages/Shop";
import Contacto from "../pages/Contacto";
import Carrito from "../pages/Carrito";
import Alta from "../pages/Alta";
import CarritoDropdown from "./CarritoDropdown";

function Navigation() {
  const [carrito, setCarrito] = useState([]);

 

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find((item) => item._id === producto._id);
  
    if (productoEnCarrito) {
      // El producto ya está en el carrito, incrementa la cantidad
      setCarrito(
        carrito.map((item) =>
          item._id === producto._id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      // El producto no está en el carrito, agrégalo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    
    console.log(carrito)
  };
  const eliminarDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.filter((producto) => producto._id !== productoId);
    setCarrito(nuevoCarrito);
  };
  return (
    <>
      <Navbar className="bg-danger" variant="light">
        <Container >
          <Navbar.Brand className="text-white" as={Link} to="/">
            PCsmart
          </Navbar.Brand>
          <Nav className="me-auto ">
            
            <Nav.Link className="text-white" as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contacto">
              Contacto
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/Alta">
              Alta
            </Nav.Link>
          </Nav>
         
          <CarritoDropdown carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={<Home agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/shop"
          element={<Shop agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} />} />
      </Routes>
    </>
  );
}

export default Navigation;
