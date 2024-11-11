import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <Image
          src="/computer_.jpeg"
          alt="Profile Picture"
          width={400}
          height={400}
          className={styles.profilePic}
        />
        <div className={styles.bio}>
          <p>
            Hello! I'm <b>Tanzeel Sarwar</b>, a passionate web developer and designer with experience in creating
            beautiful, functional, and user-centered digital experiences.
          </p>
          <p>
            My journey in web development began when I built my first website for a local non-profit organization.
            Since then, I've had the opportunity to work with a diverse range of clients, from startups to large corporations,
            helping them achieve their goals through innovative digital solutions.
          </p>
          <p>
            When I'm not coding or designing, you can find me exploring new hiking trails, experimenting with new recipes
            in the kitchen, or contributing to open-source projects. I believe in continuous learning and always strive to
            stay updated with the latest trends and technologies in my field.
          </p>
          <h2>Skills & Technologies</h2>
          <div className={styles.skills}>
            <ul>
              <li>HTML & CSS</li>
              <li>Typescript </li>
              <li>React & Next.js</li>
              <li>C Language</li>
            </ul>
            <ul>
              <li>UI/UX Design</li>
              <li>Graphic Designer</li>
              <li>Digital Marketer</li>
              <li>Git & Version Control</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}