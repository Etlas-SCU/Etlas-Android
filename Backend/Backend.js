class Backend {

    // store variables
    constructor(){
        this.Article = {};
        this.Monument = {};
        this.Tour = {};
        this.favArticle = {};
        this.favMonument = {};
    }

    static getArticle(){
        return this.Article;
    }

    static getMonument(){
        return this.Monument;
    }

    static getTour(){
        return this.Tour;
    }

    static getFavArticle(){
        return this.favArticle;
    }

    static getFavMonument(){
        return this.favMonument;
    }

    static setArticle(Article){
        this.Article = Article;
    }

    static setMonument(Monument){
        this.Monument = Monument;
    }

    static setTour(Tour){
        this.Tour = Tour;
    }

    static setFavArticle(favArticle){
        this.favArticle = favArticle;
    }

    static setFavMonument(favMonument){
        this.favMonument = favMonument;
    }

    static getTours() {
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

    static getArticles() {
        const Article = {
            ID: 1,
            Title: "Anubis",
            Description: "Know more about Anubis and his powers.",
            Date: "15 Jan 2023",
            Img: require('../assets/HomePage/monument.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        return Array(20).fill(Article);
    }

    static getQuestions() {
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

    static getUser() {
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

    static getBestScore() {
        const { bestScore } = this.getUser();
        return bestScore;
    }

    static getFavArticles() {
        const Article = {
            Title: "Anubis",
            Description: "Know more about Anubis and his powers.",
            Date: "15 Jan 2023",
            Img: require('../assets/HomePage/monument.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        return Array(10).fill(Article);
    }

    static getFavMonuments() {
        const Monument = {
            ID: 1,
            Title: "Anubis Statue",
            HistoricDate: "200 BC | Egypt",
            Img: require('../assets/Favourites/Anubis.png'),
            scannedDate: 'Scanned 12 Oct 2021',
            fullDescription: `Anubis Statue is an ancient statue that where built in the old egypt and worshiped by the people.\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Anubis Statue is an ancient statue that where built in the old egypt and worshiped by the people.\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\nunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        return Array(10).fill(Monument);
    }

    static removeFavArticle(ArticleID) {
        // To Do
    }

    static removeFavMonument(MonumentID) {
        // To Do
    }

    static changeUserImage(Image){
        // To Do
    }

    static async getTermsConditions() {
        try {
            const termsUrl = 'https://api.jsonbin.io/v3/b/6462fff99d312622a35f186f';
            const response = await fetch(termsUrl, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                redirect: 'follow'
            });
            const result = await response.json();
            return result.record.TermsConditions;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }

    static updateUser() {
        // To Do
    }

}

export default Backend;