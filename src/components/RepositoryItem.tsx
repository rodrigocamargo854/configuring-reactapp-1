import { RepositoryItemProps } from "../types/types";



export function RepositoryItem(props : RepositoryItemProps) {
  return (
        <li>
          <strong>{props.repository.name}</strong>
          <a href={props.repository.html_url}>
            Acessar repostórios
            </a>
        </li>
   
    
  );
}
