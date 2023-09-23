const TextArea = ({ name, id, cols, rows, onChange, value, errorHelper, className}) => {
    return ( 
        <>
            <textarea 
                name={name} 
                id={id || ''}
                cols={cols || 10} 
                rows={rows || 3}
                onChange={onChange}
                value={value}
                className={className}
            ></textarea>
            <div className='invalid-feedback d-block'>
                {errorHelper || ''}
            </div>
        </>
     );
}
 
export default TextArea;