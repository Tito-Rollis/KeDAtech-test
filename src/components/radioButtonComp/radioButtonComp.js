import style from './index.module.css';

export default function RadioButtonComp({ label, name, children }) {
    return (
        <div className={style.container}>
            <input aria-label="radio-btn" name={name} type="radio" />
            <label aria-label="label">{label}</label>
            {children}
        </div>
    );
}
