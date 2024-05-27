import { Link } from 'react-router-dom';
import { DUMMY } from '../data.js';

export default function IntroPage() {
    console.log(DUMMY)
    return(
        <>
            <ul>
            {
                DUMMY.map((item) => (
                    <li key={item.id}>
                        <Link to={`/intro/${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
            </ul>
        </>
    );
}
