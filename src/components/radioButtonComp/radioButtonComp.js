import style from './index.module.css';

export default function RadioButtonComp({ label, name, children }) {
    return (
        <div className={style.container}>
            <input name={name} type="radio" />
            <label>{label}</label>
            {children}
        </div>
    );
}
