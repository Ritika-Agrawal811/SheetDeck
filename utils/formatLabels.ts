/**
 * Removes dashes from category names
 * @param category
 * @returns string
 */
export const formatLabels = (category: string) => {
    return category.split('-').join(' ');
};
