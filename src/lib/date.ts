/**
 * Difference between two dates in the number of years
 */
export const diffInYear = (a: Date, b: Date) => {
    let diffYear = (b.getTime() - a.getTime()) / 1000;
    diffYear /= 60 * 60 * 24;
    return Math.abs(Math.round(diffYear / 365.25));
};
