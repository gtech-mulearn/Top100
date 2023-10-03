import React from 'react'
import styles from './Form.module.css'

export default function Form() {
    return (
        <div id='join' className={styles.topCodersForm}>
            <form action="" className={styles.codersForm}>
                <div>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Phone No.' />
                    <select name="" id="" placeholder='Phone No.'>
                        <option value="Tracks Selected">Tracks Selected</option>
                        <option value="B">Web Development</option>
                        <option value="C">Programming</option>
                        <option value="D">App Development</option>
                    </select>
                    <input type="text" placeholder='Portfoilio' />
                </div>
                <textarea name="" id="" cols="30" rows="7"></textarea>
                <div className={styles.submit}>
                    <span>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Terms & Conditions</label>
                    </span>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
