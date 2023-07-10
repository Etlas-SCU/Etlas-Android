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
        this.email = null;
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

    static getEmail() {
        return this.email;
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

    static setEmail(email) {
        this.email = email;
    }

    // handling the error of undefined
    static handleUndefined(response) {
        if (!response) {
            return {
                status: 500,
                data: translate('messages.undefined')
            }
        }
        return response;
    }

    // requests

    static async getHeaders() {
        const token = await this.getToken();
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : null,
        };
    }

    static async getImgHeaders() {
        const token = await this.getToken();
        return {
            'Content-Type': 'multipart/form-data',
            'Authorization': token ? `Bearer ${token}` : null,
        };
    }

    static async POST(url, body) {
        try {
            return axios.post(this.HOST_URL + url, body, {
                headers: await this.getHeaders(),
            }).then(response => {
                response = this.handleUndefined(response);
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                error = this.handleUndefined(error);
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

    static async POST_PIC(url, Image) {
        try {
            const body = new FormData();

            // Append the image to the form data
            const imageFileName = Image.split('/').pop();
            body.append('image', {
                uri: Image,
                name: imageFileName,
                type: 'image/jpeg', // Replace with the appropriate MIME type of your image
            });

            return axios.post(this.HOST_URL + url, body, {
                headers: await this.getImgHeaders(),
            }).then(response => {
                response = this.handleUndefined(response);
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                error = this.handleUndefined(error);
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
            return axios.put(this.HOST_URL + url, body, {
                headers: await this.getHeaders(),
            }).then(response => {
                response = this.handleUndefined(response);
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch((error) => {
                error = error.response;
                error = this.handleUndefined(error);
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
            return axios.get(this.HOST_URL + url, {
                headers: await this.getHeaders(),
            }).then(response => {
                response = this.handleUndefined(response);
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                error = this.handleUndefined(error);
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
            return axios.patch(this.HOST_URL + url, body, {
                headers: await this.getHeaders(),
            }).then(response => {
                response = this.handleUndefined(response);
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                error = this.handleUndefined(error);
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

    static async DELETE(url) {
        try {
            return axios.delete(this.HOST_URL + url, {
                headers: await this.getHeaders(),
            }).then(response => {
                response = this.handleUndefined(response);
                return {
                    statusCode: response.status,
                    data: response.data
                }
            }).catch(error => {
                error = error.response;
                error = this.handleUndefined(error);
                return {
                    statusCode: error.status,
                    data: error.data
                }
            });
        } catch (error) {
            console.log('DELETE error', error);
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

    static async getTours(pageNumber) {
        try {
            const toursUrl = `tours/?page=${pageNumber}`;
            return await this.GET(toursUrl);
        } catch (error) {
            console.log('Error getting tours:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getArticles(pageNumber) {
        try {
            const articlesUrl = `articles/?page=${pageNumber}`;
            return await this.GET(articlesUrl);
        } catch (error) {
            console.log('Error getting articles:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getQuestions(gameType) {
        try {
            const questionsUrl = `questions/${gameType.toLowerCase()}`;
            return this.GET(questionsUrl);
        } catch (error) {
            console.log('Error getting questions:', error);
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // user info and updates

    static changeUserImage(Image) {
        try {
            const url = 'users/profile-image/';
            return this.POST_PIC(url, Image).then(response => response);
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
            console.log('Error resetting password confirmation:', error);
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

    // favourites

    static async isFavArticle(article_id) {
        try {
            const url = 'favorites/is-favorite/';
            const body = {
                article_id: article_id,
            }
            return await this.POST(url, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async isFavMonument(monument_id) {
        try {
            const url = 'favorites/is-favorite/';
            const body = {
                monument_id: monument_id,
            }
            return await this.POST(url, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async addFavArticle(id) {
        try {
            const url = 'favorites/article/add/';
            const body = {
                id: id,
            }
            return await this.POST(url, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async addFavMonument(id) {
        try {
            const url = 'favorites/monument/add/';
            const body = {
                id: id,
            }
            return await this.POST(url, body).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async removeFavArticle(id) {
        try {
            const url = `favorites/article/delete/${id}/`;
            return await this.DELETE(url).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async removeFavMonument(id) {
        try {
            const url = `favorites/monument/delete/${id}/`;
            return await this.DELETE(url).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    static async getFavourites(pageNumber) {
        try {
            const url = `favorites/?page=${pageNumber}`;
            return await this.GET(url).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // Monument detection

    static async detectMonumentsFromImageURL(image_url) {
        try {
            const detectUrl = 'monuments/detect/';
            return await this.POST_PIC(detectUrl, image_url).then(response => response);
        } catch (error) {
            return {
                statusCode: 500,
                data: error
            }
        }
    }

    // contact us

    static async sendContactUsEmail(full_name, email, subject, message) {
        try {
            const contactUrl = 'contact-us/message/';
            const body = {
                full_name: full_name,
                email: email,
                subject: subject,
                message: message
            }
            return await this.POST(contactUrl, body).then(response => response);
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
            return axios.get(termsUrl, {
                headers: this.getHeaders(),
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

    static async getArticleFromFavourits(favourites) {
        let favArticlesResponse = [];
        favourites.forEach((obj) => {
            if (obj.article)
                favArticlesResponse.push(obj.article)
        });
        return favArticlesResponse;
    }

    static async getMonumentFromFavourits(favourites) {
        let favMonumentsResponse = [];
        favourites.forEach((obj) => {
            if (obj.monument)
                favMonumentsResponse.push(obj.monument)
        });
        return favMonumentsResponse;
    }

    static isDetectFailure(detection) {
        const fail = 'No monuments detected';
        return detection === fail;
    }
}

export default Backend;