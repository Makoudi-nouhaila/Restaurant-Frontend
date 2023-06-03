import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Header from './Header';

const Resto = () => {
  const [city, setCity] = useState('');
  const [userdata, setUserdata] = useState([]);
  const [zone, setZone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [chain, setChain] = useState('');
  const [restaurants, setRestaurants] = useState([
    {
      name: 'Restaurant 1',
      specialty: 'Italian',
      chain: 'Chain A',
      address: '123 Main St',
      openingHours: '9:00 AM - 8:00 PM',
      coordinates: { latitude: 40.7128, longitude: -74.0060 },
    },
    // Add more restaurants with details
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/villes/all")
      .then((response) => response.json())
      .then((data) => setUserdata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/zones/all")
      .then((response) => response.json())
      .then((data) => setUserdata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/zones/all")
      .then((response) => response.json())
      .then((data) => setUserdata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      // Filter logic remains the same
    });

    setRestaurants(filteredRestaurants);
  };

  const handleViewDetails = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBackToResults = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ padding: "50px" }}>
        <h1 className="mt-4 mb-4">Restaurant Locator</h1>
        {selectedRestaurant ? (
          <div>
            <button
              className="btn btn-primary mb-4"
              onClick={handleBackToResults}
            >
              Retour aux résultats
            </button>
            <h2>Détails du restaurant:</h2>
            <h4>Nom: {selectedRestaurant.name}</h4>
            <p>Adresse: {selectedRestaurant.address}</p>
            <p>Horaires d'ouverture: {selectedRestaurant.openingHours}</p>
            <p>
              Coordonnées: {selectedRestaurant.coordinates.latitude},{' '}
              {selectedRestaurant.coordinates.longitude}
            </p>
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="citySelect">Ville:</label>
                    <select
                      className="form-control"
                      id="citySelect"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Sélectionner une ville</option>
                      {userdata.map((ville) => (
                        <option key={ville.id} value={ville.nom}>
                          {ville.nom}
                        </option>
                      ))}
                    </select>
                  </div>
        {/* Additional form fields and submit button */}
      
    

                <div className="form-group">
                  <label htmlFor="zoneSelect">Zone:</label>
                  <select
                    className="form-control"
                    id="zoneSelect"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                  >
                    <option value="">Sélectionner une zone</option>
                      {userdata.map((zone) => (
                        <option key={zone.id} value={zone.nom}>
                          {zone.nom}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="specialtySelect">Spécialité:</label>
                  <select
                    className="form-control"
                    id="specialtySelect"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  >
                    <option value="">Toutes les spécialités</option>
                    <option value="specialty1">Sushi</option>
                    <option value="specialty2">mexico</option>
                    {/* Add more options as needed */}
                  </select>

                </div>

                <div className="form-group">
                  <label htmlFor="chainSelect">Chaîne:</label>
                  <select
                    className="form-control"
                    id="chainSelect"
                    value={chain}
                    onChange={(e) => setChain(e.target.value)}
                  >
                    <option value="">Toutes les chaînes</option>
                    <option value="chainA">Chaîne A</option>
                    <option value="chainB">Chaîne B</option>
                    <option value="chainC">Chaîne C</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div style={{ padding: '5px' }}>
                  <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                    type="button"
                  >
                    Rechercher
                  </button>
                </div>
              </form>
              
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h2>Résultats de la recherche:</h2>
              {restaurants.length > 0 ? (
                <ul className="list-group">
                  {restaurants.map((restaurant) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={restaurant.name}
                    >
                      {restaurant.name}
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewDetails(restaurant)}
                      >
                        Voir les détails
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun restaurant trouvé.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div></div>
  );
};

export default Resto;
