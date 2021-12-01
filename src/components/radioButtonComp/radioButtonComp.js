import style from './index.module.css';

export default function Home({ label, name }) {
    return (
            <div className={style.container}>
                <input name={name} type="radio" />
                <label>{label}</label>
            </div>
    );
}
