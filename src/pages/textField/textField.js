import style from '../labelDisplay/index.module.css';
import RadioBtn from '../../components/radioButtonComp/radioButtonComp';
import { Link } from 'react-router-dom';
export default function DataField() {
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
            <h1 className={style.title}>Text Field Component</h1>
            <div className={style.radio}>
                <form>
                    <RadioBtn name="radio">
                        <input type="text" placeholder="You can input here!" />
                    </RadioBtn>
                </form>
            </div>
        </div>
    );
}
