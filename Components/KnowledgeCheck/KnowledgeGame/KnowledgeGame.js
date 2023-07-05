import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Image } from 'expo-image';
import { useState, useEffect, useContext } from 'react';
import { styles } from './Styles';
import { translate } from '../../../Localization';
import Backend from '../../../Helpers/Backend';
import { goBack, goPage } from '../../../Helpers/Navigator';
import { setStatusBarStyle } from 'expo-status-bar';
import PopupMessage from '../../PopupMessage/PopupMessage';
import { UserContext } from '../../Context/Context';
import { UserDataContext } from '../../Context/DataContext';
import SvgMaker from '../../SvgMaker/SvgMaker';
import { LeftArrow, HelpIcon } from '../../../assets/SVG/Icons';
import { placeholder, blurhash } from '../../../AppStyles';
import Loader from '../../Loader/Loader';
import { useIsFocused } from '@react-navigation/native';


export default function KnowledgeGame({ }) {

    // get the page name
    const lastGame = Backend.getLastGame();

    // make states for the game
    const [currQuestionIdx, setCurrQuestionIdx] = useState(0);
    const [currOptionSelected, setCurrOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [hint, setHint] = useState(2);
    const [gameFinished, setGameFinished] = useState(false);
    const [reInit, setReInit] = useState(false);
    const [filterdOptions, setFilterdOptions] = useState([]);
    const [isBackEnabled, setIsBackEnabled] = useState(true);
    const [questionsList, setQuestionsList] = useState([]);
    const isFocused = useIsFocused();

    // get popup states
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // get loader states
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

    // get update function
    const { updateScore } = useContext(UserDataContext);

    // get questions
    const getQuestions = async () => {
        try {
            if (isFocused) {
                showLoader(translate('messages.loadQuestions'));
            }
            const { statusCode, data } = await Backend.getQuestions('landmarks');
            hideLoader();
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
            }
            setQuestionsList(data);
        } catch (error) {
            console.log(error);
        }
    }

    // to re initial all states if the component called again
    useEffect(() => {
        setQuestionsList([]);
        getQuestions();
        setCurrQuestionIdx(0);
        setCurrOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setScore(0);
        setHint(2);
        setGameFinished(false);
        setFilterdOptions([]);
        setIsBackEnabled(true);
    }, [reInit, lastGame]);

    // validate the answer
    const validateAnswer = (selectedOption) => {
        setIsBackEnabled(false);
        const currQuestion = questionsList[currQuestionIdx];
        const correctOption = currQuestion?.correct_choice;
        setCurrOptionSelected(selectedOption);
        setCorrectOption(correctOption);
        setIsOptionsDisabled(true);
        if (selectedOption === correctOption) {
            setTimeout(() => {
                setScore(score + 1);
                nextQuestion();
                setIsBackEnabled(true);
            }, 1500);
        }
        else {
            setTimeout(() => {
                setGameFinished(true);
                setCurrQuestionIdx(0);
                setCurrOptionSelected(null);
                setCorrectOption(null);
                setIsOptionsDisabled(false);
                setFilterdOptions([]);
                setQuestionsList([]);
            }, 1500);
        }
    };

    // update monuments score
    async function updateMonumentsScore(score) {
        const { statusCode, data } = await Backend.updateMonumentsScore(score);
        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }
        await updateScore(`${score}/0`, 'Monuments');
    }

    // update landmarks score
    async function updateLandmarksScore(score) {
        const { statusCode, data } = await Backend.updateLandmarksScore(score);
        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }
        await updateScore(`${score}/0`, 'Landmarks');
    }

    // update statues score
    async function updateStatuesScore(score) {
        const { statusCode, data } = await Backend.updateStatuesScore(score);
        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }
        await updateScore(`${score}/0`, 'Statues');
    }

    // update the score after the game finished
    useEffect(() => {
        // update the score
        if (gameFinished) {
            switch (lastGame) {
                case 'Statues':
                    updateStatuesScore(score);
                    break;
                case 'Landmarks':
                    updateLandmarksScore(score);
                    break;
                case 'Monuments':
                    updateMonumentsScore(score);
                    break;
                default:
                    break;
            }
        }
        // set the status bar style
        setStatusBarStyle(gameFinished ? 'dark' : 'light');
    }, [gameFinished]);

    // navigate to the next question
    const nextQuestion = () => {
        if (currQuestionIdx == questionsList.length - 1) {
            setGameFinished(true);
            setCurrQuestionIdx(0);
        } else {
            setCurrQuestionIdx(currQuestionIdx + 1);
        }
        setCurrOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setFilterdOptions([]);
    };


    // generate valid array
    const generateValidArray = () => {
        const array = [0, 1, 2, 3];
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

        // valid array to store options
        let validArr = [];

        // current question
        const question = questionsList[currQuestionIdx];

        // push the correct choice
        for (let i = 0; i < 4; i++) {
            if ((question?.shuffled_choices[shuffledArray[i]]?.choice_text !== question?.correct_choice) && (validArr.length < 2)) {
                validArr.push(question?.shuffled_choices[shuffledArray[i]]?.choice_text);
            }
        }
        return validArr;
    }


    // filtered the array
    const filteredFunction = (choice) => {
        if (filterdOptions.includes(choice.choice_text))
            return false;
        return true;
    }


    // take hint in the game
    const takeHint = () => {
        if (hint > 0 && (filterdOptions.length === 0)) {
            setHint(hint - 1);
            setFilterdOptions(generateValidArray());
        }
    }

    // Restart after finished
    const restart = () => {
        setReInit(!reInit);
        setScore(0);
        goPage('KnowledgeCheck', 'KnowledgeGame', {
            lastGame: lastGame,
        });
        setGameFinished(false);
    }


    // get the current options
    const getCurrentOptions = () => {
        // current question
        const question = questionsList[currQuestionIdx];

        // return the options
        const generatedOption = (choice, idx) => {
            return (
                <TouchableOpacity
                    key={idx}
                    style={
                        [
                            filteredFunction(choice) ? styles.choice : styles.disabledChoice,
                            choice.choice_text === currOptionSelected ?
                                choice.choice_text === correctOption ? styles.correct : styles.wrong
                                :
                                filteredFunction(choice) ? styles.initialChoice : styles.diableChoiceColor

                        ]
                    }
                    onPress={() => { validateAnswer(choice.choice_text) }}
                    disabled={isOptionsDisabled || !filteredFunction(choice)}
                >
                    <Text style={styles.choiceText}>{choice.choice_text}</Text>
                </TouchableOpacity>
            )
        }

        // shuffled choices
        if (!question || !question.shuffled_choices) {
            return null;
        }

        // return the options
        return question?.shuffled_choices.map((choice, idx) => (generatedOption(choice, idx)));
    }

    // if the game finished
    if (gameFinished) {
        return (
            <View style={styles.gameFinishConainer}>
                <ImageBackground
                    source={require('../../../assets/Backgrounds/HighScore.png')}
                    style={styles.gameFinishImage}
                >
                    {popupMessageVisible ? <PopupMessage /> : null}
                    <View style={styles.ScoreBox}>
                        <Text style={styles.finishedScoreText}>{score}/{questionsList.length}</Text>
                        <Text style={styles.finishedTotal}>{translate('KnowledgeGame.currentScore')}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={restart}
                    >
                        <Text style={styles.playAgain}>
                            {translate('KnowledgeGame.playAgain')}
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }

    // get the current options
    const optionsList = getCurrentOptions();

    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage /> : null}
            {loaderVisible ? <Loader /> : null}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>{lastGame}</Text>
                    <TouchableOpacity
                        style={styles.backContainer}
                        onPress={goBack}
                        disabled={!isBackEnabled}
                    >
                        <SvgMaker Svg={LeftArrow} style={styles.back} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={questionsList[currQuestionIdx]?.image_url ? { uri: questionsList[currQuestionIdx]?.image_url } : placeholder}
                        style={styles.image}
                        contentFit='fill'
                        cachePolicy={'memory-disk'}
                        priority={'high'}
                        placeholder={blurhash}
                    />
                </View>
                <View style={styles.quesionsBox}>
                    <Text style={styles.question}>{questionsList[currQuestionIdx]?.statement}</Text>
                    <View style={styles.choices}>
                        {optionsList}
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.scoreBox}>
                        <Text style={styles.score}>{translate('KnowledgeGame.score')}:</Text>
                        <Text style={styles.score}>{score}/{questionsList.length}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.HintBox}
                        onPress={() => { takeHint() }}
                        disabled={(hint == 0) || (filterdOptions.length > 0) || isOptionsDisabled}
                    >
                        <SvgMaker Svg={HelpIcon} />
                        <View style={styles.hintRemain}>
                            <Text style={styles.hintText}>{hint}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}