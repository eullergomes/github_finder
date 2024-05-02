import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface RepositoryProps {
  id: number;
  name: string;
  // Adicionar outros campos conforme necessário
}

const UserRepositories = () => {
  const { userName } = useParams<{ userName: string }>();
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  const loadRepositories = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}/repos`);
      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error('Erro ao carregar repositórios:', error);
    }
  };

  return ( 
    <div>
      <h1>Repositórios de {userName}</h1>
      <button onClick={loadRepositories}>Carregar dados</button>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;
