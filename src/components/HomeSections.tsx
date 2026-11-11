'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { experience, projects, techStack } from '@/data';
import { ProjectCard } from '@/components/ProjectsGrid';
import styles from '@/styles/Home.module.css';

const ease = [0.25, 0.1, 0.25, 1] as const;

// Each block rises into place the first time it scrolls into view.
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0 },
};

/* ---------- Terminal that types itself out ---------- */

const TERMINAL_SCRIPT: { prompt?: boolean; text: string }[] = [
  { prompt: true, text: 'whoami' },
  { text: 'bradley wong · computer engineering @ ubc' },
  { prompt: true, text: 'cat focus.txt' },
  { text: 'backend systems · cloud · android · robotics' },
  { prompt: true, text: 'git push origin main' },
  { text: '✓ ci passed · deployed' },
];

const TypingTerminal = () => {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const current = TERMINAL_SCRIPT[line];
    // Commands type out; output lines appear whole, as a shell would print them.
    if (current && current.prompt && chars < current.text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 55);
      return () => clearTimeout(t);
    }
    const pause = line >= TERMINAL_SCRIPT.length - 1 ? 2800 : current?.prompt ? 350 : 650;
    const t = setTimeout(() => {
      if (line >= TERMINAL_SCRIPT.length - 1) {
        setLine(0);
      } else {
        setLine((l) => l + 1);
      }
      setChars(0);
    }, pause);
    return () => clearTimeout(t);
  }, [line, chars]);

  return (
    <div className={styles.terminal} aria-hidden="true">
      <div className={styles.terminalBar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.terminalBody}>
        {TERMINAL_SCRIPT.slice(0, line + 1).map((entry, i) => {
          const isCurrent = i === line;
          const text = isCurrent && entry.prompt ? entry.text.slice(0, chars) : entry.text;
          return (
            <div key={i} className={entry.prompt ? styles.terminalCommand : styles.terminalOutput}>
              {entry.prompt && <span className={styles.terminalPrompt}>$</span>}
              {text}
              {isCurrent && <span className={styles.terminalCursor} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ---------- About: bento grid ---------- */

const marqueeIcons = techStack.flatMap((group) => group.items);

const PHOTO_STRIP = [
  '/photos/gallery/tokyo_crossing.JPEG',
  '/photos/gallery/japan2.JPG',
  '/photos/gallery/osaka_tower.JPEG',
];

const AboutBento = () => (
  <section className={styles.section}>
    <div className={styles.bento}>
      <motion.div className={`${styles.panel} ${styles.panelIntro}`} {...reveal}>
        <h2 className={styles.statement}>
          Software engineer
          <span> building systems end to end.</span>
        </h2>
        <p className={styles.panelText}>
          Computer Engineering at UBC. I build backend services, Android apps, and the
          software that runs robots.
        </p>
        <TypingTerminal />
      </motion.div>

      <motion.div
        className={`${styles.panel} ${styles.panelExperience}`}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.08 }}
      >
        <span className={styles.label}>Experience</span>
        <ul className={styles.experienceList}>
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`} className={styles.experienceItem}>
              <div className={styles.experienceHead}>
                <span className={styles.experienceOrg}>{job.org}</span>
                <span className={styles.experiencePeriod}>{job.period}</span>
              </div>
              <span className={styles.experienceRole}>{job.role}</span>
              <p className={styles.experienceSummary}>{job.summary}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={`${styles.panel} ${styles.panelEducation}`}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.12 }}
      >
        <span className={styles.label}>Education</span>
        <h3 className={styles.panelHeading}>University of British Columbia</h3>
        <p className={styles.panelText}>BASc Computer Engineering · Expected May 2028</p>
      </motion.div>

      <motion.div className={`${styles.panel} ${styles.panelStack}`} {...reveal}>
        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...marqueeIcons, ...marqueeIcons].map((item, i) => (
              <span key={i} className={styles.marqueeIcon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" loading="lazy" />
              </span>
            ))}
          </div>
        </div>
        <h3 className={styles.panelHeading}>
          Clean APIs,
          <span> tested and shipped.</span>
        </h3>
        <a href="#stack" className={styles.panelLink}>See my stack</a>
      </motion.div>

      <motion.div
        className={`${styles.panel} ${styles.panelPhoto}`}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.08 }}
      >
        <span className={styles.label}>When I&apos;m not coding</span>
        <h3 className={styles.panelHeading}>Taking photos 📷</h3>
        <div className={styles.photoStrip}>
          {PHOTO_STRIP.map((src) => (
            <div key={src} className={styles.photoThumb}>
              <Image src={src} alt="" fill sizes="160px" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <Link href="/photography" className={styles.panelLink}>
          View photography
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ---------- Featured projects carousel ---------- */

const featured = projects.filter((p) => p.categories.includes('software'));

const FeaturedProjects = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-slide]');
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <motion.div className={styles.sectionHead} {...reveal}>
        <div>
          <span className={styles.label}>Projects</span>
          <h2 className={styles.sectionTitle}>Featured work</h2>
        </div>
        <div className={styles.sectionActions}>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={() => scrollByCard(-1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={() => scrollByCard(1)}
            aria-label="Next project"
          >
            →
          </button>
          <Link href="/projects" className={styles.viewAll}>
            View all
          </Link>
        </div>
      </motion.div>

      <div className={styles.carousel} ref={trackRef}>
        {featured.map((project) => (
          <div key={project.id} className={styles.slide} data-slide>
            <ProjectCard project={project} variants={cardVariants} />
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- Tech stack ---------- */

const TechStack = () => (
  <section className={styles.section} id="stack">
    <motion.div className={styles.sectionHead} {...reveal}>
      <div>
        <span className={styles.label}>Tech stack</span>
        <h2 className={styles.sectionTitle}>What I use</h2>
      </div>
    </motion.div>

    <div className={styles.stackGrid}>
      {techStack.map((group) => (
        <div key={group.label} className={styles.stackGroup}>
          <h3 className={styles.stackGroupLabel}>{group.label}</h3>
          <ul className={styles.stackList}>
            {group.items.map((item, i) => (
              <motion.li
                key={item.name}
                className={styles.stackItem}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
              >
                <span className={styles.stackIcon}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" loading="lazy" />
                </span>
                <span className={styles.stackText}>
                  <span className={styles.stackName}>{item.name}</span>
                  <span className={styles.stackNote}>{item.note}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

/**
 * Everything on the home page below the photo hero. Sits on the bright page
 * surface and scrolls up over the fixed photo.
 */
const HomeSections = () => (
  <div className={styles.home}>
    <div className={styles.container}>
      <AboutBento />
      <FeaturedProjects />
      <TechStack />
    </div>
  </div>
);

export default HomeSections;
