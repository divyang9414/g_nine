import React, { useState } from 'react';
import style from './frm.module.css'

const Basic_Form_Printing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
    course: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value,
    }));
  };

  const handlePrint = () => {
    // console.log(formData);
    setShowFormData(true);
    // document.write(formData);
  };

  const [showFormData, setShowFormData] = useState(false);

  return (
    <section className={style.bg_color}>
      <form>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Name:</label>
          <input className={style.inputData} type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Email:</label>
          <input className={style.inputData} type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Password:</label>
          <input className={style.inputData} type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Gender:</label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
          <label className={style.subTitle}>Male</label>
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
          <label className={style.subTitle}>Female</label>
        </div>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Hobbies:</label>
          <input type="checkbox" name="hobbies" value="reading" checked={formData.hobbies.includes('reading')} onChange={handleChange} />
          <label className={style.subTitle}>Reading</label>
          <input type="checkbox" name="hobbies" value="coding" checked={formData.hobbies.includes('coding')} onChange={handleChange} />
          <label className={style.subTitle}>Coding</label>
        </div>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <div className={style.frm_fields}>
          <label className={style.frm_title}>Address:</label>
          <textarea className={style.inputData} name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className='text-center'>
          <button onClick={handlePrint} className='btn btn-primary btn-lg w-75'>Print Form Data</button>
        </div>
        {showFormData && (
          <div>
            <h2>Form Data:</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(formData).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{Array.isArray(value) ? value.join(', ') : value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </form>
    </section>
  );
};

export default Basic_Form_Printing;