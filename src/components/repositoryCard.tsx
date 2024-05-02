import classe from './repositoryCard.module.css';

interface RepositoryCardProps {
  repository: string;
  user: string | undefined;
}

const RepositoryCard = ({ repository, user }: RepositoryCardProps) => {
  return ( 
    <li className={classe.repos}>
      <a href={`https://github.com/${user}/${repository}`}  target='_blank'>
        {repository}
      </a>
    </li>
   );
}
 
export default RepositoryCard;