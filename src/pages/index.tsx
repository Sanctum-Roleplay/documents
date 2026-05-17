import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import styles from './index.module.css';
import Rules from '../components/Rules';
import React from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  return (
    <div className="min-h-screen animated-gradient text-white relative">
      <div className="relative z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 0
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ff69b4"
              },
              links: {
                enable: true,
                color: "#ff69b4",
                opacity: 0.2
              },
              move: {
                enable: true,
                speed: 1
              },
              opacity: {
                value: 0.5
              }
            }
          }}
        />
        <motion.div
          className={clsx(styles.heroContainer, "container")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.heroContent}>
            <motion.h1
              className={clsx(styles.heroTitle, "text-7xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent z-20")}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {siteConfig.title}
            </motion.h1>
            <motion.p
              className={clsx(styles.heroSubtitle, "text-2xl text-gray-300 z-20")}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {siteConfig.tagline}
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.buttonWrapper}
            >
              <Link
                className="bg-[#ff69b4] hover:bg-[#ff45a4] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-xl"
                to="/docs/intro">
                Wanna learn more? 🤯
              </Link>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sanctum Roleplay Documentation">
      <div className="app-container">
        <HomepageHeader />
        <main className="container mx-auto px-4">
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Rules />
          </motion.div>
        </main>
      </div>
    </Layout>
  );
}
