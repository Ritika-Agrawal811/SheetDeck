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
        image: '/assets/categories/concepts.png',
    },
    attributes: {
        title: 'attributes',
        image: '/assets/categories/attributes.jpg',
    },
    elements: {
        title: 'elements',
        image: '/assets/categories/elements.jpg',
    },
    properties: {
        title: 'properties',
        image: '/assets/categories/properties.jpg',
    },
    'pseudo-classes': {
        title: 'pseudo-classes',
        image: '/assets/categories/pseudo-classes.jpg',
    },
    selectors: {
        title: 'selectors',
        image: '/assets/categories/selectors.jpg',
    },
    'advanced-syntax': {
        title: 'advanced-syntax',
        image: '/assets/categories/advanced-syntax.jpg',
    },
    'dom-manipulation': {
        title: 'dom-manipulation',
        image: '/assets/categories/dom-manipulation.jpg',
    },
    operators: {
        title: 'operators',
        image: '/assets/categories/operators.jpg',
    },
} as const;
