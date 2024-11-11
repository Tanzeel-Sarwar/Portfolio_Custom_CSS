import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <Image
          src="/Mine.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className={styles.profilePic}
        /> 
        <h1 className={styles.name}>Tanzeel Sarwar</h1>
        <p className={styles.title}>Web Developer & Designer</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Tanzeel-Sarwar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tanzeel-sarwar-8b2a9131b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:tgdesigner338@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </section>

      <section className={styles.expertise}>
        <h2>My Expertise</h2>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <h3>Web Development</h3>
            <p>Creating responsive and user-friendly websites using modern technologies like React and Next.js.</p>
          </div>
          <div className={styles.skill}>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and visually appealing user interfaces and experiences using tools like Figma.</p>
          </div>
          <div className={styles.skill}>
            <h3>Digital Marketer</h3>
            <p>Crafting strategies, driving results—digital marketing that connects brands with their audience.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Let's Work Together</h2>
        <p>I'm always open for new opportunities and exciting projects.</p>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </div>
  )
}