import { IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';

export const TAGS_INFO = {
    all: {
        color: '#71717A',
        icon: null,
    },
    html: {
        color: '#D97706',
        icon: IoLogoHtml5,
    },

    css: {
        color: '#3B82F6',
        icon: IoLogoCss3,
    },
    javascript: {
        color: '#EAB308',
        icon: IoLogoJavascript,
    },
    react: {
        color: '#93C5FD',
        icon: IoLogoReact,
    },
} as const;

export const CATEGORIES_INFO = {
    concepts: {
        title: 'concepts',
        image: '/assets/categories/concepts.png',
    },
    attributes: {
        title: 'attributes',
        image: '/assets/categories/attributes.png',
    },
    elements: {
        title: 'elements',
        image: '/assets/categories/elements.png',
    },
    properties: {
        title: 'properties',
        image: '/assets/categories/properties.png',
    },
    'pseudo-classes': {
        title: 'pseudo-classes',
        image: '/assets/categories/pseudo-classes.png',
    },
    selectors: {
        title: 'selectors',
        image: '/assets/categories/selectors.png',
    },
    'advanced-syntax': {
        title: 'advanced-syntax',
        image: '/assets/categories/advanced-syntax.png',
    },
    'dom-manipulation': {
        title: 'dom-manipulation',
        image: '/assets/categories/dom-manipulation.png',
    },
    operators: {
        title: 'operators',
        image: '/assets/categories/operators.png',
    },
} as const;
