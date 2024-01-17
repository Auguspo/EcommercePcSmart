    import React, { useEffect, useState } from 'react';
    import { Table, Container } from 'react-bootstrap';
    import axios from 'axios';

    const ListaPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchPedidos = async () => {
        try {
            const responsePedidos = await axios.get('https://honey-whispering-ragamuffin.glitch.me/api/carrito');
            setPedidos(responsePedidos.data || []);

            // Obtener IDs únicos de productos
            const uniqueProductIds = Array.from(new Set(responsePedidos.data.items.map(item => item.productoId.$oid)));

            // Obtener información de productos
            const responseProductos = await axios.get('https://honey-whispering-ragamuffin.glitch.me/api/productos');
            setProductos(responseProductos.data);

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
        <Container>
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
                <td>{pedidos._id?.$oid || 'ID no encontrado'}</td>
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
