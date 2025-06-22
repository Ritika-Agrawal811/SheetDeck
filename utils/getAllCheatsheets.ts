import { cheatSheets } from '@/lib/cheatsheets/loader';

export const getAllCheatsheets = () => {
    const allTopicsData = Object.values(cheatSheets);

    const allCheatsheets = allTopicsData.flatMap((topicData) => Object.values(topicData).flat());

    return allCheatsheets;
};
