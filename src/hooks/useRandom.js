const Level = ["Beginner", "Intermediate", "All Levels", "Expert"];

export const RandomNumber = () => {
    return Math.floor(Math.random() * 70);
};

export const RandomLevel = () => {
    const randomNum = Math.floor(Math.random() * Level.length);

    return Level[randomNum];
};
