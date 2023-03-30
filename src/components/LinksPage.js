// Importation de React et du composant Link
import React from 'react';
import Link from './Link';

// Données des liens qui seront affichés
const linkData = [
  {
    url: 'https://example.com',
    username: 'user1',
    password: 'password1'
  },
  {
    url: 'https://example.org',
    username: 'user2',
    password: 'password2'
  }
];

// Composant LinksPage qui affiche les liens
const LinksPage = () => {
  return (
    <div>
      {linkData.map(link => (
        // Pour chaque lien dans la liste linkData, on crée un composant Link avec les propriétés suivantes
        <Link
          key={link.url} // La clé unique pour ce lien est l'URL
          url={link.url} // L'URL à afficher
          username={link.username} // Le nom d'utilisateur à afficher
          password={link.password} // Le mot de passe à afficher
        />
      ))}
    </div>
  );
};

// Exportation du composant LinksPage pour pouvoir l'utiliser dans d'autres fichiers
export default LinksPage;