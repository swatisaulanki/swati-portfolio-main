import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://media0.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=790b7611bf847315e2e1590bf382d6edfe51f0ef39d1e4e2&rid=giphy.gif&ct=g"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! I'm Swati Saulanki 
					A passionate Full Stack Web Developer, Dedicated to developing robust applications that interact with the Frontend as well as Backend part of web applications with the help of MERN Stack. Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize my application for better stability and speed. Love to work in a team.
					<span style={{ color: `#00a0a0` }}>
						{' '}
						Looking for an opportunity as a Full Stack Web Developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
