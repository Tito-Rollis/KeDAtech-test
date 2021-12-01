import style from './index.module.css';
import RadioBtn from '../../components/radioButtonComp/radioButtonComp';
import { Link } from 'react-router-dom';
export default function Home() {
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
            <h1 className={style.title}>Label Display Component</h1>
            <div className={style.radio}>
                <form action="">
                    <RadioBtn name="radio" label="Radio A" />
                    <RadioBtn name="radio" label="Radio B" />
                    <RadioBtn name="radio" label="Radio C" />
                </form>
            </div>
        </div>
    );
}
