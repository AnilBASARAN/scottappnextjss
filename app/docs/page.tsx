import styles from './style.module.css';

const getData = async () => {
    await new Promise((res) => setTimeout(() => res(0), 2000));
    return { data: [1, 2, 3] };
};

const Home = async () => {
    const result = await getData();  // Use a variable to store the result object
    const data = result.data;        // Access the data array from the object

    console.log("data", data);

    return (
        <div className={`${styles.title} ${styles.another}`}>
            <h2>Home</h2>
            <ul>
                {data.map((number) => (
                    <li key={number}>{number} : item</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
