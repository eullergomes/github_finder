import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RepositoryCard from '../components/repositoryCard';
import classe from './UserRepositories.module.css';

interface RepositoryProps {
  id: number;
  name: string;
  // Adicionar outros campos conforme necessário
}

const UserRepositories = () => {
  const { userName } = useParams<{ userName: string }>();
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${userName}/repos`);
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Erro ao carregar repositórios:', error);
      }
    };

    loadRepositories();
  })

  return ( 
    <div>
      <h1>Repositórios de <a className={classe.user} href={`https://github.com/${userName}`} target='_blank'>{userName}</a></h1>
      <ul className={classe.repositories}>
        {repositories.map((repo) => (
          <RepositoryCard 
            key={repo.id} 
            repository={repo.name}
            user={userName}
            />
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;
