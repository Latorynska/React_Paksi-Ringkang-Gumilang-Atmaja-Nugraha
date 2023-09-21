const Input = ({ value, onChange, type, placeholder, name, className }) => {
    return <input 
                type={type ? type : "text"} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                name={name}
                className={className}
            />
}

export default Input