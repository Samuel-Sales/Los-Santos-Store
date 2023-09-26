import style from './SideBar.module.css';

const SideBar = () => {
    return ( 
        <section className={style.container}>
            <h2>Catálogo</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
            </ul>
        </section>
     );
}
 
export default SideBar;