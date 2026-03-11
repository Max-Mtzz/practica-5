
function CustomInput({label, type, name, value, onChange}){

    return(
        <>
                <label htmlFor={name}>{label}</label>
                <input
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                />
        </>
    )
}

export default CustomInput;