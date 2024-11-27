import type { CollectionEntry } from "astro:content";

/**
 * Difference between two dates in the number of years
 */
export const diffInYear = (a: Date, b: Date) => {
    let diffYear = (b.getTime() - a.getTime()) / 1000;
    diffYear /= 60 * 60 * 24;
    return Math.abs(Math.round(diffYear / 365.25));
};

/**
 * Groepeer tegels by het jaartal
 * @param arr Array van 'tegels'
 * @returns Object van 'tegels' gegroepeerd op jaartal
 */
export const groupTegelsByJaar = <
    T extends CollectionEntry<"tegels">,
    K extends keyof T,
>(
    arr: T[],
): Record<string, T[]> => {
    return arr.reduce(
        (acc, item) => (
            (acc[new Date(item.data.datum).getFullYear()] = [
                ...(acc[new Date(item.data.datum).getFullYear()] || []),
                item,
            ]),
            acc
        ),
        {} as Record<string, T[]>,
    );
};
