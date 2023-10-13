const Select = ({ name, id, value, onChange, options = [], className, errorHelper }) => {
    return (
        <>
            <select
                name={name}
                id={id || ''}
                value={value || ''}
                onChange={onChange}
                className={className || ''}
            >
                {options.map((data, key) => (
                    <option key={key} value={data.value ? data.value : '' } disabled={!data.value} >
                        {data.label}
                    </option>
                ))}
            </select>
            <div className='invalid-feedback d-block'>
                {errorHelper ? errorHelper : ''}
            </div>
        </>
        
    );
};
export default Select;
  