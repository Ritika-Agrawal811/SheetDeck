import { IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';

export const TAGS_INFO = {
    all: {
        title: 'All',
        color: '#71717A',
        icon: null,
    },
    html: {
        title: 'HTML',
        color: '#D97706',
        icon: IoLogoHtml5,
    },

    css: {
        title: 'CSS',
        color: '#3B82F6',
        icon: IoLogoCss3,
    },
    javascript: {
        title: 'JavaScript',
        color: '#EAB308',
        icon: IoLogoJavascript,
    },
    react: {
        title: 'React',
        color: '#93C5FD',
        icon: IoLogoReact,
    },
} as const;

export const CATEGORIES_INFO = {
    concepts: {
        title: 'concepts',
        image: '/assets/categories/concepts.webp',
    },
    attributes: {
        title: 'attributes',
        image: '/assets/categories/attributes.webp',
    },
    elements: {
        title: 'elements',
        image: '/assets/categories/elements.webp',
    },
    properties: {
        title: 'properties',
        image: '/assets/categories/properties.webp',
    },
    'pseudo-classes': {
        title: 'pseudo-classes',
        image: '/assets/categories/pseudo-classes.webp',
    },
    selectors: {
        title: 'selectors',
        image: '/assets/categories/selectors.webp',
    },
    'advanced-syntax': {
        title: 'advanced-syntax',
        image: '/assets/categories/advanced-syntax.webp',
    },
    'dom-manipulation': {
        title: 'dom-manipulation',
        image: '/assets/categories/dom-manipulation.webp',
    },
    operators: {
        title: 'operators',
        image: '/assets/categories/operators.webp',
    },
    methods: {
        title: 'methods',
        image: '/assets/categories/methods.webp',
    },
} as const;
