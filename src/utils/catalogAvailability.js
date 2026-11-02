const availableLabels = new Set([
    "development",
    "web development",
    "programming languages",
    "python",
    "javascript",
    "machine learning",
    "html",
    "css",
    "php",
]);

const searchTerms = {
    development: "Web Development",
    "web development": "Web Development",
    "programming languages": "Python",
    python: "Python",
    javascript: "JavaScript",
    "machine learning": "Machine Learning",
    html: "JavaScript",
    css: "JavaScript",
    php: "Web Development",
};

const normalise = (label = "") => label.trim().toLowerCase();

export const isCatalogAvailable = (label) => availableLabels.has(normalise(label));

export const getCatalogSearchTerm = (label) => searchTerms[normalise(label)] || label;
