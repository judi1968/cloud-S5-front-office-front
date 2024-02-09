import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../assets/css/Login.css';
import { api_domain } from '../services/serviceAPI';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('vaikanet@client.com');
  const [password, setPassword] = useState('client');
  const [loginStatus, setLoginStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${api_domain}loginClient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:name,
          password,
        }),
      });

      const responseData = await response.json();

      if (responseData.status===200) {
        localStorage.setItem("tknidclient", responseData.tknidclient);
        setLoginStatus('success');
        navigate('/'); // Redirection vers "/home"
      } else {
        setErrorMessage(responseData.message);
        setLoginStatus('failure');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Une erreur est survenue lors de la connexion.');
      setLoginStatus('failure');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <center>
          <div className={`login-container ${loginStatus === 'success' ? 'success' : loginStatus === 'failure' ? 'failure' : ''}`}>
            <img src="%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0).png" alt="logo du VaikaNet" />
            <form className="login-form" onSubmit={handleLogin}>
              <label>
                  Email du client:   
                <input
                  name='name'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                Mot de passe:
                <input
                  name='password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <center>
                <button type="submit" disabled={loading}>
                  {loading ? 'Connexion en cours...' : loginStatus === 'success' ? 'Connexion réussie' : loginStatus === 'failure' ? 'Connexion échouée' : 'Connexion'}
                </button>
                {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
              </center>
            </form>
          </div>
        </center>
      </header>
    </div>
  );
};

export default Login;
