import { IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';

export const TAGS_INFO = {
    All: {
        color: '#71717A',
        icon: null,
    },
    HTML: {
        color: '#D97706',
        icon: IoLogoHtml5,
    },

    CSS: {
        color: '#3B82F6',
        icon: IoLogoCss3,
    },
    JavaScript: {
        color: '#EAB308',
        icon: IoLogoJavascript,
    },
    React: {
        color: '#93C5FD',
        icon: IoLogoReact,
    },
} as const;

export const CATEGORIES_INFO = {
    concepts: {
        title: 'concepts',
        image: '/images/categories/concepts.jpg',
    },
    attributes: {
        title: 'attributes',
        image: '/images/categories/attributes.jpg',
    },
    elements: {
        title: 'elements',
        image: '/images/categories/elements.jpg',
    },
    properties: {
        title: 'properties',
        image: '/images/categories/properties.jpg',
    },
    'pseudo-classes': {
        title: 'pseudo-classes',
        image: '/images/categories/pseudo-classes.jpg',
    },
    selectors: {
        title: 'selectors',
        image: '/images/categories/selectors.jpg',
    },
    'advanced-syntax': {
        title: 'advanced-syntax',
        image: '/images/categories/advanced-syntax.jpg',
    },
    'dom-manipulation': {
        title: 'dom-manipulation',
        image: '/images/categories/dom-manipulation.jpg',
    },
    operators: {
        title: 'operators',
        image: '/images/categories/operators.jpg',
    },
} as const;
