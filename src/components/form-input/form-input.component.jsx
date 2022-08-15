import './form-input-style.scss';

const FormInput = ({ label, ...props }) => {
    return (
        <div className="group">
            <input className="form-input" {...props} required />
            <label className={`${props.value.lenght ? 'shrink' : ''} form-input-label`}>{label}</label>
        </div>
    )
}

export default FormInput;