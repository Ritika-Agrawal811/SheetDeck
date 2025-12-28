import { cheatSheets } from '@/lib/cheatsheets/loader';

/**
 * Returns all the cheat sheets as an array
 * @returns Cheatsheet[]
 */
export const getAllCheatsheets = () => {
    const allTopicsData = Object.values(cheatSheets);

    const allCheatsheets = allTopicsData.flatMap((topicData) => Object.values(topicData).flat());

    return allCheatsheets;
};
