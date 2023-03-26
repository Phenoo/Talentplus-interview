import React, { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Courses", to: "#", id: 3 },
  { name: "Testimonials", to: "#", id: 4 },
  { name: "community", to: "#", id: 5 },
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function AnimatedNavigation() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="mobile">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 0,
              transition: { delay: 0.4, duration: 0.3 }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  onClick={cycleOpen}
                >
                  {name}
                </motion.a>
              ))}
                <motion.button className='btn-primary'
                 whileHover={{ scale: 1.1 }}
                 variants={itemVariants}
                >
                  Enroll now
                </motion.button>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button className="nav-btn" onClick={cycleOpen}>{open ? <FaTimes /> : < FaBars /> }</button>
      </div>
    </div>
  );
}
