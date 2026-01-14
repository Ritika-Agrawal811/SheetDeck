import clsx from 'clsx';

const variants = {
    orientation: {
        horizontal: 'h-6 xl:h-10 w-full border-t border-b border-secondary',
        vertical: 'w-6 xl:w-10 h-full border-l border-r border-secondary',
    },
    position: {
        top: 'top-4 left-0',
        bottom: 'bottom-4 left-0',
        left: 'left-0 xl:left-4 top-0',
        right: 'right-0 xl:right-4 top-0',
    },
};

interface StripesBarsProps {
    orientation: keyof typeof variants.orientation;
    position: keyof typeof variants.position;
    className?: string;
}

const StripesBars = ({ orientation = 'vertical', position = 'left', className }: StripesBarsProps) => {
    return <div className={clsx('absolute bg-stripes', variants.orientation[orientation], variants.position[position], className)}></div>;
};

export default StripesBars;
