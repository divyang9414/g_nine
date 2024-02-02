import React from 'react'
import { Link } from 'react-router-dom';
import style from './home.module.css'

const projectData = [
    { title: 'Back to Home', link:'/', p_date: '' },
    { title: 'Header and Footer', link:'/H_and_F_together', p_date: '16/01/2024' },
    { title: 'Clock counter', link:'/Clock_counter', p_date: '18/01/2024' },
    { title: 'Stop watch', link:'/Stop_watch', p_date: '18/01/2024' },
    { title: 'Basic Form printing', link:'/Basic_Form_Printing', p_date: '27/01/2024' },
    { title: 'Form validation', link:'/FormValidation', p_date: '27/01/2024' },
    { title: 'Review system', link:'/Review', p_date: '30/01/2024' }
    { title: 'Review system', link:'/Review', p_date: '30/01/2024' }
]

const Home = () => {
    return (
        <section>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className={style.index}>Index</th>
                            <th className={style.title}>My Projects</th>
                            <th>Date of Submission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectData.map((item, i) => (
                                <tr>
                                    <td className={style.index}>{i + ' .)'}</td>
                                    <td className={style.title}>
                                        <Link to={item.link} className={style.link}>{item.title}</Link>
                                    </td>
                                    <td className={style.p_date}>{item.p_date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Home
