'use client';

import clsx from 'clsx';

import { castoro } from '../font';

// components
import SectionHeading from '@/components/ui/SectionHeading';
import { MdEmail } from 'react-icons/md';
import Icon from '@/components/ui/Icon';

export default function TermsAndConditionsPage() {
    return (
        <main className={clsx('w-11/12 2xl:w-[85%] 3xl:w-4/5 max-w-screen-3xl mx-auto', 'space-y-16 px-4')}>
            <SectionHeading content="Terms and Conditions" />

            <section className="space-y-4">
                <p className="text-lg font-medium">Last updated: July 20, 2025</p>

                <p>
                    Welcome to SheetDeck (
                    <a
                        href="https://sheetdeck.vercel.app"
                        className="text-purple-800 dark:text-purple-300 hover:underline underline-offset-4"
                    >
                        https://sheetdeck.vercel.app
                    </a>
                    ) (the &quot;Website&quot;). By accessing or using the Website, you agree to be bound by these Terms, which constitute a
                    legally binding agreement between you and the Website&apos;s owner, Ritika Agrawal (&quot;Owner&quot;). If you do not
                    agree with any part of these Terms, please do not use the Website.
                </p>
            </section>

            {terms.map((item, index) => {
                return (
                    <section key={`term-${index}`} className="space-y-4">
                        <h3
                            className={clsx(
                                `${castoro.variable} font-castoro`,
                                'font-bold text-xl',
                                'text-purple-800 dark:text-purple-300'
                            )}
                        >
                            {index + 1}. {item.heading}
                        </h3>
                        <p>{item.content}</p>
                    </section>
                );
            })}
            <section className="space-y-4">
                <h3 className={clsx(`${castoro.variable} font-castoro`, 'font-bold text-xl', 'text-purple-800 dark:text-purple-300')}>
                    {terms.length}. Contact Us
                </h3>
                <p>If you have any questions or concerns about these Terms, please contact us at: </p>
                <p
                    className={clsx(
                        'flex items-center gap-2',
                        'text-emerald-700 dark:text-emerald-400',
                        'font-medium hover:underline underline-offset-4 cursor-pointer'
                    )}
                >
                    {' '}
                    <Icon icon={MdEmail} size="text-xl" className="inline" />{' '}
                    <a href="mailto:ritikaagrawal0811@gmail.com">ritikaagrawal0811@gmail.com</a>
                </p>
            </section>
        </main>
    );
}

const terms = [
    {
        heading: 'Acceptance of Terms',
        content:
            'By accessing or using the Website, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions and any future modifications.',
    },
    {
        heading: 'Use of the Website',
        content:
            'The Website provides cheat sheets, visual guides, and educational content related to web development for personal, non-commercial use. You may access and share the materials for learning purposes, but you may not copy, modify, redistribute, or use any content for commercial purposes without prior permission from the Owner. Misuse of the Website or its content is strictly prohibited.',
    },
    {
        heading: 'Intellectual Property',
        content:
            'All cheat sheets, written content, and visual materials are the intellectual property of the Owner unless otherwise stated. Unauthorized use or duplication of any materials without express permission is prohibited.',
    },
    {
        heading: 'No Warranties',
        content:
            'While every effort has been made to ensure the accuracy and reliability of the content on the Website, the materials are provided on an "as is" and "as available" basis without warranties of any kind. The Owner makes no express or implied warranties regarding the Website’s operation or the information, content, or materials included. The Owner will not be liable for any damages of any kind arising from the use of the Website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.',
    },
    {
        heading: 'Governing Law',
        content: 'These Terms will be governed by the laws of India, without giving effect to any principles of conflicts of law.',
    },
    {
        heading: 'Modifications to Terms',
        content:
            'The Owner reserves the right to modify these Terms at any time without prior notice. Your continued use of the Website after such modifications shall constitute your acceptance of the modified Terms.',
    },
];
