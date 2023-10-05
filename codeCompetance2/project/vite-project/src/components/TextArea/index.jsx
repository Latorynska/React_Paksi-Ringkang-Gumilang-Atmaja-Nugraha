const TextArea = ({ name, id, cols, rows, className, onChange, value, errorHelper }) => {
    return ( 
        <>
            <textarea 
                name={name} 
                id={id} 
                cols={cols} 
                rows={rows}
                className={className}
                value={value}
                onChange={onChange}
            >

            </textarea>
            <div className='invalid-feedback d-block'>
                {errorHelper || ''}
            </div>
        </>
     );
}
 
export default TextArea;