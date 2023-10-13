const Input = ({ value, onChange, type, placeholder, id, name, className, errorHelper }) => {
    return (
        <>
            <input 
                type={type ? type : "text"} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder && placeholder} 
                id={id || ''}
                name={name}
                className={className}
            />
            <div className='invalid-feedback d-block'>
                {errorHelper || ''}
            </div>
        </>

    )
}

export default Input