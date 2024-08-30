'use client'

import { useState, useEffect } from 'react';
import NewTodoForm from '../components/NewTodoForm';
import styles from './style.module.css';

const Home = () => {
    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((res) => setTimeout(() => res(0), 2000));
            const result = { data: [1, 2, 3] };
            setData(result.data);
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div className={`${styles.title} ${styles.another}`}>
            <h2>Home</h2>
            <NewTodoForm />
            <ul>
                {data.map((number) => (
                    <li key={number}>{number} : item</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
