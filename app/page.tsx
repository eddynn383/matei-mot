"use client";

import styles from "./page.module.css";
import { ADLaM, AlataNormal, BossBaby } from "./fonts";
import { useState, useEffect } from "react";

const BALLOON_COLORS = [
    "#2767AD",
    "#23589A",
    "#2B6CB0",
    "#1A437A",
    // "#1F4E8A",
    // "#16396B",
    // "#12305D",
];

export default function Home() {
    const [open, setOpen] = useState(false);

    const random = (Math.random() * 100)

    console.log(random)

    return (
        <div className={styles.page} data-open={open}>
            {/* BALLOON CONTAINER */}
            <div className={`${styles.balloonContainer}`}>
                {BALLOON_COLORS.map((color, index) => (
                    <div key={index}
                        className={styles.balloon}
                        style={{
                            backgroundColor: color,
                            color: color,
                            left: `${-10 + index * 30}%`,
                            animationDelay: `${Math.random() * 0.4}s`,
                        }}
                        data-start={random}
                    ></div>
                ))}
            </div>

            {/* PAGE CONTENT */}
            <div className={styles["page-inner"]}>
                <div className={styles.primary}>
                    <div className={styles.top}>
                        <h1 className={`${BossBaby.className} ${styles.name}`}>MATEI</h1>
                        <p className={`${ADLaM.className} ${styles.date}`}>03.05.2025</p>
                    </div>
                    <div className={styles.middle}>
                        <button className={styles.button} onClick={() => setOpen(true)}>Click to open</button>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles["baby-image"]}></div>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.top}>
                        <h1 className={`${BossBaby.className} ${styles.name}`}>PARTY TIME</h1>
                    </div>
                    <div className={styles.middle}>
                        <p className={`${AlataNormal.className} ${styles.text}`}>Vino să sărbătorim împreună pe <span className={styles.brand}>03.05.2025</span> la ora <span className={styles.brand}>17:00</span>, cu zâmbete sincere, surprize și o super distracție într-un loc magic, unde fiecare moment va fi o nouă aventură!</p>
                        <p className={`${AlataNormal.className} ${styles.text}`}>Abia aștept să ne distrăm și să creăm amintiri de neuitat – va fi o petrecere de poveste și m-aș bucura să fii alături de mine!</p>
                    </div>
                    <div className={styles.bottom}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.221391595963!2d23.86092868073435!3d44.31254586641674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d68eff288429%3A0xe8600f95366ec813!2sZAO%20PARK!5e1!3m2!1sen!2sro!4v1745839632910!5m2!1sen!2sro" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
