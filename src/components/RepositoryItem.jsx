export function RepositoryItem(props) {
  return (
        <li>
          <strong>{props.repository.name}</strong>
          <a href={props.repository.html_url}>
            Acessar repostórios
            </a>
        </li>
   
    
  );
}
