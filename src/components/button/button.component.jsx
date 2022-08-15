import './button-style.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = (props) => {
    return <button className={`button-container ${BUTTON_TYPE_CLASSES[props.buttontype]}`} {...props}>{props.children}</button>
}

export default Button;