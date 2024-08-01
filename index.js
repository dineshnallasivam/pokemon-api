const express = require('express');
const axios = require('axios'); // Import Axios

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

// Base URL for the PokeAPI
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

// Middleware to handle JSON requests
app.use(express.json());
app.use(cors())

// Route to fetch all Pokémon
app.get('/pokemon', async (req, res) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokémon data', error: error.message });
  }
});

// Route to fetch a specific Pokémon by ID or name
app.get('/pokemon/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: `Error fetching Pokémon with ID ${id}`, error: error.message });
  }
});

// Route to fetch all berries
app.get('/berry', async (req, res) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/berry/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching berry data', error: error.message });
  }
});

// Route to fetch a specific berry by ID
app.get('/berry/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/berry/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: `Error fetching berry with ID ${id}`, error: error.message });
  }
});

// Route to fetch all locations
app.get('/location', async (req, res) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/location/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching location data', error: error.message });
  }
});

// Route to fetch a specific location by ID
app.get('/location/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/location/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: `Error fetching location with ID ${id}`, error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
