import React from 'react';
import clsx from 'clsx';

const CardSkeleton = () => {
    return (
        <div
            role="status"
            aria-busy="true"
            className={clsx(
                'relative shadow-lg rounded-lg p-4 mx-auto',
                'mx-auto w-[275px] xs:w-[300px] sm:w-[280px] md:w-[300px] xl:w-full',
                'animate-pulse bg-white'
            )}
        >
            <span className="sr-only">Loading card content</span>

            {/* Badge placeholder */}
            <div className="absolute left-2 top-2 h-7 w-16 rounded-full bg-gray-200" />

            {/* Download icon placeholder */}
            <div className="absolute right-2 top-2 h-9 w-9 rounded-full bg-gray-200" />

            {/* Image placeholder */}
            <div className="mt-10 mb-10 h-[330px] w-full bg-gray-200 rounded" />

            {/* Title bubble */}
            <div
                className="absolute bottom-0 left-0 right-0 h-12 rounded-t-full bg-slate-100 flex justify-center items-center"
                style={{ boxShadow: '2px -1.5px 0 #ccc' }}
            >
                <div className="h-5 w-3/4 bg-gray-300 rounded" />
            </div>
        </div>
    );
};

export default CardSkeleton;
