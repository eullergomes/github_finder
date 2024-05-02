import { UserProps } from '../types/user';
import { useState } from 'react';

import Search from '../components/Search';
import User from '../components/User';
import ErrorRequest from '../components/ErrorRequest'

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async (userName: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        throw new Error('ERRO: você excedeu o limite de pesquisas diárias! Tente novamente mais tarde.');
      }

      const data = await response.json();

      if (!data || data.message === 'Not Found') {
        throw new Error('Usuário não encontrado');
      }

      const { avatar_url, login, location, followers, following } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };

      setUser(userData);
      setError(null);
    } catch (error) {
      const errorMessage = (error as Error).message; // Convertendo para Error e acessando a mensagem
      setError(errorMessage);
      setUser(null);
    }
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {error ? (
        <ErrorRequest error={error} />
      ) : user ? (
        <User {...user} />
      ) : null}
    </div>
  );
};

export default Home;
