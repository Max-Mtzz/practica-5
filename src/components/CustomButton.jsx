import '../styles/Button.css'


function CustomButton({children, action}){

    return(
        <button className="custom-button" onClick={action}>
            {children}
        </button>
    )
}

export default CustomButton;