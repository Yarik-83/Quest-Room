import {IClassName} from '../interface.ts'



export default function Checkbox({ className}: IClassName): React.JSX.Element {

    return (
        <input type="checkbox" className={className}  name='checkbox' />
    )
}