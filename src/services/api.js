// src/services/api.js
import axios from 'axios';

const baseURL = 'https://honey-whispering-ragamuffin.glitch.me/api'; // Reemplaza con la URL de tu servidor

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para el recurso /carrito
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

// Funciones para el recurso /productos
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

// Puedes agregar más funciones según tus necesidades
