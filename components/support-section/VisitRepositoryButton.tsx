import React from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';

const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
};

const shadowVariants = {
    initial: { top: 100 },
    hover: { top: 5, transition: { duration: 0.45, ease: 'easeInOut' } },
};

const VisitRepositoryButton = () => {
    return (
        <a
            href="https://github.com/Ritika-Agrawal811/webdev-cheatsheets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Repository"
        >
            <motion.button
                className={clsx(
                    'mt-8 px-8 py-4',
                    'border-2 border-gray-100 rounded-full',
                    'bg-gray-900 text-white text-xl',
                    'cursor-pointer',
                    'shadow-lg shadow-purple-200',
                    'font-platypi',
                    'relative overflow-hidden'
                )}
                whileHover="hover"
                variants={buttonVariants}
            >
                Visit repository
                {/* Shadow */}
                <motion.span
                    className={clsx(
                        'left-0 w-full h-full',
                        'absolute inline-block',
                        'bg-gradient-to-t from-purple-500 to-transparent to-65%'
                    )}
                    aria-hidden={true}
                    variants={shadowVariants}
                ></motion.span>
            </motion.button>
        </a>
    );
};

export default VisitRepositoryButton;
