import React from 'react'
import styles from './Footer.module.css'
import { BsDiscord } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import gt from '../../assets/gt.png'
import kerala from '../../assets/kerala.png'
import top100 from '../../assets/top100logo.png'

export default function Footer() {
    return (
        <footer className={styles.topcodersFooter}>
            <div>
                <p>Terms of Use & Privacy Policy</p>
                <p>User agreement</p>
            </div>

            <div>
                <p>Find us on</p>
                <span className={styles.socials}>
                    <a href="https://discord.com/invite/Jt7sv3chZP" target='_blank' rel="noreferrer"> <BsDiscord /> </a>
                    <a href="https://www.instagram.com/gtechmulearn/" target='_blank' rel="noreferrer"> <BsInstagram /> </a>
                    <a href="https://twitter.com/GtechMulearn" target='_blank' rel="noreferrer"> <BsTwitter /> </a>
                    <a href="https://www.youtube.com/c/mulearn" target='_blank' rel="noreferrer"> <AiOutlineYoutube /> </a>
                    <a href="https://www.facebook.com/gtechmulearn" target='_blank' rel="noreferrer"> <BiLogoFacebook /> </a>
                </span>
            </div>

            <div className={styles.footerLogos}>
                <a href="https://startupmission.kerala.gov.in/" target='_blank' rel="noreferrer"><img src={kerala} alt="" /></a>
                <span className={styles.line}></span>
                <img src={top100} alt="" />
                <span className={styles.line}></span>
                <a href="https://mulearn.org/" target='_blank' rel="noreferrer"><img src={gt} alt="" /></a>
            </div>
        </footer>
    )
}
