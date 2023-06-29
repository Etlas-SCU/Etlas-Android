import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../Localization';
import axios from 'axios';


class Backend {

    static HOST_URL = process.env.HOST_URL;

    // store variables
    constructor () {
        this.Article = {};
        this.Monument = {};
        this.Tour = {};
        this.favArticle = {};
        this.favMonument = {};
        this.lastGame = null;
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

    static getLastGame() {
        return this.lastGame;
    }

    static setLastGame(lastGame) {
        this.lastGame = lastGame;
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

    // requests

    static async POST(url, body) {
        try {
            const token = await this.getToken();

            return axios.post(this.HOST_URL + url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : null,
                },
            }).then(response => {
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                return {
                    statusCode: error.status,
                    data: error.data
                }
            });
        } catch (error) {
            console.log('POST error', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async POST_PIC(url, body) {
        try {
            const token = await this.getToken();

            return axios.post(this.HOST_URL + url, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token ? `Bearer ${token}` : null,
                },
            }).then(response => {
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                return {
                    statusCode: error.status,
                    data: error.data
                }
            });
        } catch (error) {
            console.log('POST error', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async PUT(url, body) {
        try {
            const token = await this.getToken();

            return axios.put(this.HOST_URL + url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : null,
                },
            }).then(response => {
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch((error) => {
                error = error.response;
                return {
                    statusCode: error.status,
                    data: error.data
                }
            });
        } catch (error) {
            console.log('PUT error', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async GET(url) {
        try {
            const token = await this.getToken();

            return axios.get(this.HOST_URL + url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : null,
                },
            }).then(response => {
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                return {
                    statusCode: error.status,
                    data: error.data
                }
            });
        } catch (error) {
            console.log('GET error', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async PATCH(url, body) {
        try {
            const token = await this.getToken();

            return axios.patch(this.HOST_URL + url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : null,
                },
            }).then(response => {
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).then(error => {
                error = error.response;
                return {
                    statusCode: error.status,
                    data: error.data
                }
            });
        } catch (error) {
            console.log('PATCH error', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // tokens

    static async getToken() {
        return await AsyncStorage.getItem('accessToken').then((accessToken) => {
            if (accessToken !== null)
                return accessToken;
            else
                return null;
        });
    }

    static async getRefreshToken() {
        return await AsyncStorage.getItem('refreshToken').then((refreshToken) => {
            if (refreshToken !== null)
                return refreshToken;
            else
                return null;
        });
    }

    static async refresh_the_token() {
        const refreshToken = await this.getRefreshToken().then(response => { return response });
        try {
            const regreshUrl = 'auth/token/refresh/';
            const body = {
                refresh: refreshToken
            };
            return await this.POST(regreshUrl, body).then(response => response);
        } catch (error) {
            console.log('Error refreshing token:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static getTours() {
        let Tour = {
            id: 1,
            Title: "Giza tour",
            Description: "where you can visit the pyramids and ride the camels.",
            Rate: "3.5",
            Img: require('../assets/ImagesToDelete/tour.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        };
        let tours = [];
        for (let i = 0; i < 10; i++) {
            let curr_tour = Tour;
            curr_tour.id = i;
            tours.push(curr_tour);
        }
        return tours;
    }

    static getArticles() {
        let Article = {
            id: 1,
            Title: "Anubis",
            Description: "Know more about Anubis and his powers.",
            Date: "15 Jan 2023",
            Img: require('../assets/ImagesToDelete/monument.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        var articles = Array(10).fill(Article);
        for (let i = 0; i < 10; i++) {
            articles[i].id = i;
        }
        return articles;
    }

    static getQuestions() {
        let quesion = {
            id: 3,
            statement: "What is this statue?",
            label: "statue",
            image: require('../assets/ImagesToDelete/Question.png'),
            correct_chocie: "Neith",
            choices: [
                { id: 1, choice_text: "Osiris" },
                { id: 2, choice_text: "Sekhmet" },
                { id: 3, choice_text: "Neith" },
                { id: 4, choice_text: "Yonu" }
            ]
        };
        var questions = Array(10).fill(quesion);
        for (let i = 0; i < 10; i++) {
            questions[i].id = i;
        }
        return questions;
    }

    static getFavArticles() {
        let Article = {
            Title: "Anubis",
            Description: "Know more about Anubis and his powers.",
            Date: "15 Jan 2023",
            Img: require('../assets/ImagesToDelete/monument.png'),
            fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        var articles = Array(10).fill(Article);
        for (let i = 0; i < 10; i++) {
            articles[i].id = i;
        }
        return articles;
    }

    static getFavMonuments() {
        let Monument = {
            ID: 1,
            Title: "Anubis Statue",
            HistoricDate: "200 BC | Egypt",
            Img: require('../assets/ImagesToDelete/Anubis.png'),
            scannedDate: 'Scanned 12 Oct 2021',
            fullDescription: `Anubis Statue is an ancient statue that where built in the old egypt and worshiped by the people.\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Anubis Statue is an ancient statue that where built in the old egypt and worshiped by the people.\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\nunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        };
        var monuments = Array(10).fill(Monument);
        for (let i = 0; i < 10; i++) {
            monuments[i].id = i;
        }
        return monuments;
    }

    static removeFavArticle(ArticleID) {
        // To Do
    }

    static removeFavMonument(MonumentID) {
        // To Do
    }

    // user info and updates

    static changeUserImage(Image) {
        try {
            const url = 'users/profile-image/';
            const formData = new FormData();

            // Append the image to the form data
            const imageFileName = Image.split('/').pop();
            formData.append('image', {
                uri: Image,
                name: imageFileName,
                type: 'image/jpeg', // Replace with the appropriate MIME type of your image
            });

            return this.POST_PIC(url, formData).then(response => response);
        } catch (error) {
            console.log('Error Change Image:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getUserData() {
        try {
            const url = 'users/';
            return await this.GET(url).then(response => response);
        } catch (error) {
            console.log('Error Get User:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async updateUser(full_name, email, address, phone_number) {
        try {
            const url = 'users/';
            const body = {
                full_name: full_name,
                email: email,
                address: address,
                phone_number: phone_number
            }
            return await this.PATCH(url, body).then(response => response);
        } catch (error) {
            console.log('Error Update User:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // auth

    static async login(email, password) {
        try {
            const loginUrl = 'auth/login/';
            const body = {
                email: email,
                password: password
            };
            return await this.POST(loginUrl, body).then(response => response);
        } catch (error) {
            console.log('Error Login:', error);
            return {
                statusCode: 500,
                data: error
            }
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
            return await this.POST(registerUrl, body).then(response => response);
        } catch (error) {
            console.log('Error Register:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async logout() {
        try {
            const logoutUrl = 'auth/logout/';
            const refreshToken = await this.getRefreshToken().then(response => response);
            const body = {
                refresh: refreshToken
            };
            return await this.POST(logoutUrl, body).then(response => response);
        } catch (error) {
            console.log('error logout', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async emailVerify(otp) {
        try {
            const verifyUrl = 'auth/email-verify/';
            const body = {
                otp: otp
            };
            return await this.POST(verifyUrl, body).then(response => response);
        } catch (error) {
            console.log('Error verifying OTP:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // update otp

    static async refereshOTP(email) {
        try {
            const refreshOTPUrl = 'auth/request-verify-otp/';
            const body = {
                email: email
            };
            return await this.POST(refreshOTPUrl, body).then(response => response);
        } catch (error) {
            console.log('Error refreshing OTP:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // deal with password

    static async passwordReset(email) {
        try {
            const resetUrl = 'auth/request-password-reset/';
            const body = {
                email: email
            };
            return await this.POST(resetUrl, body).then(response => response);
        } catch (error) {
            console.log('Error resetting password:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async passwordResetConfirm(passowrd, confirm_password, token, uidb64) {
        try {
            const resetUrl = 'auth/password-reset-complete/';
            const body = {
                password: passowrd,
                confirm_password: confirm_password,
                token: token,
                uidb64: uidb64
            };
            return await this.PATCH(resetUrl, body).then(response => response);
        } catch (error) {
            console.log('Error resetting password:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async passwordVerify(otp) {
        try {
            const verifyUrl = 'auth/password-reset-otp/';
            const body = {
                otp: otp
            };
            return await this.POST(verifyUrl, body).then(response => response);
        } catch (error) {
            console.log('Error verifying OTP:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async passowrdChange(old_password, new_password, confirm_new_password) {
        try {
            const changePasswordUrl = 'users/change-password/';
            const body = {
                old_password: old_password,
                new_password: new_password,
                confirm_new_password: confirm_new_password
            };
            return await this.PUT(changePasswordUrl, body).then(response => response);
        } catch (error) {
            console.log('Error changing password:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // social auth

    static async googleSignIn(auth_token) {
        try {
            const googleUrl = 'social-auth/google/';
            const body = {
                auth_token: auth_token,
                front_end: "android"
            }
            return await this.POST(googleUrl, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async facebookSignIn(auth_token) {
        try {
            const facebookUrl = 'social-auth/facebook/';
            const body = {
                auth_token: auth_token,
            }
            return await this.POST(facebookUrl, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // get scores of knowlodge checks

    static async getBestScore() {
        try {
            const url = 'users/total-best-score/';
            return await this.GET(url).then(response => response);
        } catch (error) {
            console.log('Error Get Best Score:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getMonumentScore() {
        try {
            const url = 'users/best-score-monuments/';
            return await this.GET(url).then(response => response);
        } catch (error) {
            console.log('Error Get monuments Score:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getLandmarkScore() {
        try {
            const url = 'users/best-score-landmarks/';
            return await this.GET(url).then(response => response);
        } catch (error) {
            console.log('Error Get landmarks Score:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getStatueScore() {
        try {
            const url = 'users/best-score-statues/';
            return await this.GET(url).then(response => response);
        } catch (error) {
            console.log('Error Get statues Score:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }


    // update scores of knowlodge checks

    static async updateLandmarksScore(new_score) {
        try {
            const facebookUrl = 'users/best-score-landmarks/';
            const body = {
                new_score: new_score,
            }
            return await this.PUT(facebookUrl, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async updateMonumentsScore(new_score) {
        try {
            const facebookUrl = 'users/best-score-monuments/';
            const body = {
                new_score: new_score,
            }
            return await this.PUT(facebookUrl, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async updateStatuesScore(new_score) {
        try {
            const facebookUrl = 'users/best-score-statues/';
            const body = {
                new_score: new_score,
            }
            return await this.PUT(facebookUrl, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // terms and conditions

    static async getTermsConditions() {
        try {
            const termsUrl = 'https://api.jsonbin.io/v3/b/6462fff99d312622a35f186f';
            return response = await axios.get(termsUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                redirect: 'follow',
            }).then(response => {
                return {
                    statusCode: 200,
                    data: response.data.record.TermsConditions
                }
            }).catch(error => {
                console.log('Error Terms and Conditions:', error);
                return {
                    statusCode: 500,
                    data: error
                }
            });
        } catch (error) {
            console.log('Error Terms and Conditions:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // Handle checks

    static isSuccessfulRequest(code) {
        return code >= 200 && code < 300;
    }

    static isTokenExp(code) {
        return code === 400;
    }

    static async getErrorMessage(response) {
        // if response is null
        if (!response)
            return translate('messages.somethingWrong');

        if (response?.messages) {
            return response.messages[0].message;
        }
        else if (response?.message) {
            return response.message;
        }
        else if (response?.detail) {
            return response.detail;
        } else {
            for (const [_, value] of Object.entries(response))
                return value;
        }
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

    static async checkConfirmPassword(password, confirmPassword) {
        if (password !== confirmPassword)
            return { state: false, message: translate('messages.passwordMatch') };
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

    static async checkOTP(otp) {
        if (otp.length !== 4)
            return { state: false, message: translate('messages.invalidOTP') };
        return { state: true, message: '' };
    }

}

export default Backend;