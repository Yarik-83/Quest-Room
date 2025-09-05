

 interface ICheckboxProps {
    className: string
}



export default function Checkbox({ className}:ICheckboxProps): React.JSX.Element {

    return (
        <input type="checkbox" className={className}  name='checkbox' />
    )
}