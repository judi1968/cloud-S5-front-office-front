// Home.js

import React from 'react';

const Home = () => {
  const userName = "Utilisateur"; // Vous pouvez remplacer cela par le nom de l'utilisateur si disponible

  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Salut, {userName} !</p>
    </div>
  );
}

export default Home;
