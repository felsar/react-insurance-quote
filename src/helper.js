export function getYearDiff(year) {
    return new Date().getFullYear() - year;
}


export function brandIncrease(brand) {
    let increase=1;
    switch (brand) {
        case 'european':
            increase = 1.30;
            break;
        case 'american':
            increase = 1.15;
            break;
        case 'asian':
            increase = 1.05;
            break;
        default:
            break;
    }
    return increase;
}

export function getPlanIncrease(plan) {
    return (plan === 'basic') ? 1.2 : 1.5;
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}