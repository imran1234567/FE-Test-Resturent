export const ratingConverter = (rating) => {
    if (rating === 0) {
        return 0;
    } else if (rating === 0.5) {
        return 10;
    } else if (rating === 1) {
        return 20;
    } else if (rating === 1.5) {
        return 30;
    } else if (rating === 2) {
        return 40;
    } else if (rating === 2.5) {
        return 50;
    } else if (rating === 3) {
        return 60;
    } else if (rating === 3.5) {
        return 70;
    } else if (rating === 4) {
        return 80;
    } else if (rating === 4.5) {
        return 90;
    } else {
        return 100;
    }
}