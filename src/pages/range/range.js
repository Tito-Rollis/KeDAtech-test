import style from '../labelDisplay/index.module.css';
import RadioBtn from '../../components/radioButtonComp/radioButtonComp';
import { Link } from 'react-router-dom';
export default function Range() {
    return (
        <div className={style.container}>
            <Link to="/">
                <img
                    alt="left-arrow"
                    width="20px"
                    src="/left-arrow.png"
                    className={style.arrow}
                />
            </Link>
            <h1 className={style.title}>Range Component</h1>
            <div className={style.radio}>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}
                >
                    <RadioBtn name="radio">
                        <input type="range" />
                    </RadioBtn>
                </form>
            </div>
        </div>
    );
}
