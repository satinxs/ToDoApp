import React from 'react';

export default Checkbox = ({ value, setValue, children, id }) => {
    return <div className='checkbox'>
        <label htmlFor={id}>{children}</label>
        <input
            type='checkbox'
            checked={value}
            onChange={ev => setValue(!!ev.target.checked)}
            id={id}
        />
    </div>;
};