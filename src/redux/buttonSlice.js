import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "datas",
    initialState: {
        value: [
            {
                id: "python",
                text: "Python",
                status: true,
                "head text": "Expand your career opportunities with Python",
                "paragraph text":
                    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
            },
            {
                id: "excel",
                text: "Excel",
                status: false,
                "head text": "Analyze and visualize data with Excel",
                "paragraph text":
                    "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
            },
            {
                id: "webdev",
                text: "Web Development",
                status: false,
                "head text": "Build websites and applications with Web Development",
                "paragraph text":
                    "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
            },
            {
                id: "js",
                text: "JavaScript",
                status: false,
                "head text": "Grow your software development skills with JavaScript",
                "paragraph text":
                    "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.",
            },
            {
                id: "dataSc",
                text: "Data Science",
                status: false,
                "head text": "Lead data-driven decisions with Data Science",
                "paragraph text":
                    "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.",
            },
            {
                id: "amazon",
                text: "Amazon AWS",
                status: false,
                "head text": "Become an expert in cloud computing with AWS Certification",
                "paragraph text":
                    "Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more you can earn. Anyone can learn AWS skills, and with AWS online training, you can move at your own pace.",
            },
            {
                id: "draw",
                text: "Drawing",
                status: false,
                "head text": "Expand your creative skillset with Drawing",
                "paragraph text":
                    "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.",
            },
        ],
    },
    reducers: {
        changeActive: (state, action) => {
            state.value = state.value.map((btn) => ({ ...btn, status: btn.id == action.payload ? true : false }));
        },
    },
});

export const { changeActive } = counterSlice.actions;

export default counterSlice.reducer;
