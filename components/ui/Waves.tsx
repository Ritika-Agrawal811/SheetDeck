'use client';

import clsx from 'clsx';
import { useTheme } from '@/hooks/useTheme';

interface WavesProps {
    classes?: string;
}

const Waves = ({ classes }: WavesProps) => {
    const { isDark } = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            className={clsx(classes)}
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z"
                ></path>
            </defs>
            <g>
                <use xlinkHref="#gentle-wave" x="50" y="2" fill={isDark ? '#26231B' : '#f7eed3'}></use>
            </g>
            <g>
                <use xlinkHref="#gentle-wave" x="50" y="0" fill={isDark ? '#26231B' : '#f7eed3'}></use>
            </g>
            <g>
                <use xlinkHref="#gentle-wave" x="50" y="6" fill={isDark ? '#262626' : '#fffae2'}></use>
            </g>
            <g>
                <use xlinkHref="#gentle-wave" x="50" y="4" fill={isDark ? '#262626' : '#fffae2'}></use>
            </g>
        </svg>
    );
};

export default Waves;
