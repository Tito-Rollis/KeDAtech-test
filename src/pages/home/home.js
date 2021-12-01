import style from './home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Pick The UI Below!</h1>
            <ul className={style.nav}>
                <li className={style.list}>
                    <Link className={style.link} to="/data">
                        Data Field
                    </Link>
                </li>
                <li className={style.list}>
                    <Link className={style.link} to="/label">
                        Label Display
                    </Link>
                </li>
                <li className={style.list}>
                    <Link className={style.link} to="/text">
                        Text Field
                    </Link>
                </li>
            </ul>
        </div>
    );
}
