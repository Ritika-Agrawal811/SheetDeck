type Tags = 'HTML' | 'CSS' | 'JavaScript' | 'React';

type Categories = 'concepts' | 'attributes' | 'elements';

export type Cheatsheet = {
    id: string;
    title: string;
    tag: Tags;
    category: Categories;
    image: string;
};
