import { api_domain } from "./serviceAPI";

export const connect_token = async () => {
    try {
      const response = await fetch(`${api_domain}connect_token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tknidclient")}`
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
        return {
            status:500,
            message:'Erreur lors de la demande au serveur:'.error
      };
    }
  };

