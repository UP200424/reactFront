import { Checkbox } from '@mui/material'


export const TodoItem = ({key, item, toggle}) => {
  return (
    <li key={key}>
        <p>
            {item.task}<Checkbox checked={item.completed} onChange={()=>toggle(item.id)}/>
        </p>
        
    </li>
  )
}
