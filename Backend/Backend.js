import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../Localization';


class Backend {

    static HOST_URL = process.env.HOST_URL;

    // store variables
    constructor () {
        this.Article = {};
        this.Monument = {};
        this.Tour = {};
        this.favArticle = {};
        this.favMonument = {};
        // this.HOST_URL = process.env.HOST_URL;
    }

    static getArticle() {
        return this.Article;
    }

    static getMonument() {
        return this.Monument;
    }

    static getTour() {
        return this.Tour;
    }

    static getFavArticle() {
        return this.favArticle;
    }

    static getFavMonument() {
        return this.favMonument;
    }

    static setArticle(Article) {
        this.Article = Article;
    }

    static setMonument(Monument) {
        this.Monument = Monument;
    }

    static setTour(Tour) {
        this.Tour = Tour;
    }

    static setFavArticle(favArticle) {
        this.favArticle = favArticle;
    }

    static setFavMonument(favMonument) {
        this.favMonument = favMonument;
    }

    static async getToken() {
        return await AsyncStorage.getItem('accessToken').then((accessToken) => {
            if (accessToken !== null)
                return accessToken;
            else
                return null;
        });
    }

    static async POST(url, body) {
        let status = null;
        return await fetch(this.HOST_URL + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': await this.getToken()
            },
            body: JSON.stringify(body),
        }).then(response => {
            status = response.status;
            return response.json();
        }).then(data => {
            return {
                status: status,
                data: data
            }
        });
    }

    static async GET(url) {
        let status = null;
        return await fetch(this.HOST_URL + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': await this.getToken()
            },
        }).then(response => {
            status = response.status;
            return response.json();
        }).then(data => {
            return {
                status: status,
                data: data
            }
        })
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

    static changeUserImage(Image) {
        // To Do
    }

    static async login(email, password) {
        try {
            const loginUrl = 'auth/login/';
            const body = {
                email: email,
                password: password
            };
            return await this.POST(loginUrl, body).then(response => {
                const { status, data } = response;
                return {
                    status: status,
                    data: data
                }
            });
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }

    static async register(full_name, email, password, phone_number, address) {
        try {
            const registerUrl = 'auth/register/';
            const body = {
                email: email,
                full_name: full_name,
                password: password,
                confirm_password: password,
                address: address,
                phone_number: phone_number
            };
            return await this.POST(registerUrl, body).then(response => {
                const { status, data } = response;
                return {
                    status: status,
                    data: data
                }
            });
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }

    static async logout() {
        // To Do
    }

    static async refresh_the_token(refreshToken) {
        try {
            const regreshUrl = 'auth/token/refresh/';
            const body = {
                refresh: refreshToken
            };
            return await this.POST(regreshUrl, body).then(response => {
                const { status, data } = response;
                return {
                    status: status,
                    data: data
                }
            });
        } catch (error) {
            console.log('Error refreshing token:', error);
            return null;
        }
    }

    static async emailVerify(otp){
        try {
            const verifyUrl = 'auth/email-verify/';
            const body = {
                otp: otp
            };
            return await this.POST(verifyUrl, body).then(response => {
                const { status, data } = response;
                return {
                    status: status,
                    data: data
                }
            });
        } catch (error) {
            console.log('Error verifying OTP:', error);
            return null;
        }
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
                redirect: 'follow',
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

    static async facebookSignIn() {
        // To Do
    }


    static async googleSignIn() {
        // To Do
    }

    static async checkPassword(password) {
        if (password.length < 8)
            return { state: false, message: translate('messages.passwordLength') };
        if (password.length > 20)
            return { state: false, message: translate('messages.passwordLength') };
        if (!password.match(/[a-z]/g))
            return { state: false, message: translate('messages.passwordLowercase') };
        if (!password.match(/[A-Z]/g))
            return { state: false, message: translate('messages.passwordUppercase') };
        if (!password.match(/[0-9]/g))
            return { state: false, message: translate('messages.passwordNumber') };
        if (!password.match(/[^a-zA-Z\d]/g))
            return { state: false, message: translate('messages.passwordSpecial') };
        if (password.match(/\s/g))
            return { state: false, message: translate('messages.passwordSpace') };
        return { state: true, message: '' };
    }

    static async checkEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
            return { state: false, message: translate('messages.invalidEmail') };
        return { state: true, message: '' };
    }

    static async checkFullName(full_name) {
        if (full_name.length == 0)
            return { state: false, message: translate('messages.fullNameRequired') };
        if (full_name.length > 50)
            return { state: false, message: translate('messages.fullNameLength') };
        return { state: true, message: '' };
    }

    static async checkOTP(otp){
        if (otp.length !== 4)
            return { state: false, message: translate('messages.invalidOTP') };
        return { state: true, message: '' };
    }

}

export default Backend;