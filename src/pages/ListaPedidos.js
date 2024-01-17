import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { obtenerCarrito, obtenerProductos } from '../services/api'; // Importar funciones desde api.js

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const carritoData = await obtenerCarrito();
        setPedidos(carritoData || []);


        // Obtener información de productos
        const productosData = await obtenerProductos();
        setProductos(productosData);

     
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  // Función para obtener el nombre del producto por ID
  const getProductNameById = (productId) => {
    const product = productos.find(product => product._id === productId);
    return product ? product.titulo : 'Nombre no encontrado';
  };
    return (
        <Container className='my-5'>
                <h1>Ultimo Pedido</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Dirección de Entrega</th>
                <th>Items</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{pedidos._id || 'ID no encontrado'}</td>
                <td>
                {pedidos.direccionEntrega
                    ? `${pedidos.direccionEntrega.calle || ''}, ${pedidos.direccionEntrega.ciudad || ''} - CP: ${pedidos.direccionEntrega.codigoPostal || ''}`
                    : 'Dirección de entrega no encontrada'}
                </td>
                <td>
                <ul>
                    {pedidos.items &&
                    pedidos.items.map((item, index) => (
                        <li key={index}>
                        {getProductNameById(item.productoId)}, Cantidad: {item.cantidad}
                        </li>
                    ))}
                </ul>
                </td>
                <td>${pedidos.total || 'Total no encontrado'}</td>
            </tr>
            </tbody>
        </Table>
        </Container>
    );
    };

    export default ListaPedidos;
