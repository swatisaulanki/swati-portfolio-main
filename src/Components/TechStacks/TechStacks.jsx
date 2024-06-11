import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
			Skills
			</h1>
			<div className={styles.borderBottom} />
			{/* <h2
				style={{ color: `${newTheme.para}` }}
				className={styles.heading}
			>
				Frontened
			</h2> */}
			
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>JavaScript</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i
						style={{ color: '#509941' }}
						className='devicon-chakraui-original'
					/> */}
					
					<img height={"50px"} width="50px" src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png" />
          
					<span>Mongo db</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i
						style={{ color: '#509941' }}
						className='devicon-chakraui-original'
					/> */}
					
					<img height={"50px"} width="50px" src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" />
          
					<span>Chakra-UI</span>
				</div>

			

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i
						style={{ color: '#509941' }}
						className='devicon-chakraui-original'
					/> */}
					
					<img height={"50px"} width="50px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--cKHeGzUo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf3a8y7xh8aroo95qocz.jpg" />
          
					<span>TypeScript</span>
				</div>
				
		
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div> */}
	
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div> */}

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-github-plain colored' />
					<span>Github</span>
				</div>

                {/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-bootstrap-plain colored' />
					<span>Bootstrap</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-visualstudio-plain colored' />
					<span>Visual Studio</span>
				</div>

				 */}

			</div>
		</div>
	);
};

export default TechStacks;
