class Backend {

    static getTours(){
        const Tour = {
            Title: "Giza tour",
            Description: "where you can visit the pyramids and ride the camels.",
            Rate: "3.5",
            Img: require('../assets/HomePage/tour.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        return Array(20).fill(Tour);
    }

    static getArticles(){
        const Article = {
            Title: "Anubis",
            Description: "Know more about Anubis and his powers.",
            Date: "15 Jan 2023",
            Img: require('../assets/HomePage/monument.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        return Array(20).fill(Article);
    }

    static getQuestions(){
        const quesions = {
            id: 3,
            statement: "What is this statue?",
            label: "statue",
            image: require('../assets/KnowledgeCheck/Question.png'),
            correct_chocie: "Neith",
            choices: [
                { id: 1, choice_text: "Osiris" },
                { id: 2, choice_text: "Sekhmet" },
                { id: 3, choice_text: "Neith" },
                { id: 4, choice_text: "Yonu" }
            ]
        };
        return Array(20).fill(quesions);
    }

    static getUser(){
        const user = {
            id: 1,
            name: "Ahmed Hossam",
            email: "ahmed.7oSkaa@gmail.com",
            password: "123456789",
            img: require('../assets/Profile/Profile.png'),
            bestScore: 374,
            address: "Port Said, EG",
            phone: "01208822340",
        };
        return user;
    }

    static getBestScore(){
        const { bestScore } = this.getUser();
        return bestScore;
    }

    static googleSingIn(Token){
        // To Do
    }
}

export default Backend;