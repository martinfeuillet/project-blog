/* eslint-disable react/no-unescaped-entities */
import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";


export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/portrait8.jpg"
                    width={300}
                    height={300}
                    alt="portrait"
                />
            </div>
            <h1>Hi i'm Martin</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like angular or react
            </p>
        </section>
    );
}
