import '../styles/Input.css'

function CustomInput({label, type, name, value, onChange}){

    return(
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name} 
                type={type}
                value={value}
                onChange={onChange}
                className="custom-input" 
            />
        </div>
    )   
}

export default CustomInput;