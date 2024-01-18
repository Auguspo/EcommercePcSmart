 
import axios from 'axios';

// const baseURL = 'https://honey-whispering-ragamuffin.glitch.me/api'; // Reemplaza con la URL de tu servidor

const baseURL = 'http://localhost:3000/api'
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

 
export const obtenerCarrito = async () => {
  try {
    const response = await api.get('/carrito');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const agregarAlCarrito = async (datosPedido) => {
  try {
    const response = await api.post('/carrito', datosPedido);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 
export const obtenerProductos = async () => {
  try {
    const response = await api.get('/productos');
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const agregarProducto = async (nuevoProducto) => {
  try {
    const response = await api.post('/productos', nuevoProducto);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const actualizarProducto = async (idProducto, datosActualizados) => {
  try {
    const response = await api.put(`/productos/${idProducto}`, datosActualizados);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const eliminarProducto = async (idProducto) => {
  try {
    const response = await api.delete(`/productos/${idProducto}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 
