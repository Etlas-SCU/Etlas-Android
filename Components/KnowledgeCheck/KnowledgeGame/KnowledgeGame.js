import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './Styles';
import { useRoute } from '@react-navigation/native';
import { translate } from '../../../Localization';


export default function KnowledgeGame({ navigation, route }) {

    // get the page name
    const { pageName } = useRoute().params;

    const quesions = {
        id: 3,
        statement: "What is this statue?",
        label: "statue",
        image: require('../../../assets/KnowledgeCheck/Question.png'),
        correct_chocie: "Neith",
        choices: [
            { id: 1, choice_text: "Osiris" },
            { id: 2, choice_text: "Sekhmet" },
            { id: 3, choice_text: "Neith" },
            { id: 4, choice_text: "Yonu" }
        ]
    };

    let quesionsList = [];
    for (let i = 0; i < 10; i++)
        quesionsList.push(quesions);


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


    // to re initial all states if the component called again
    useEffect(() => {
        setCurrQuestionIdx(0);
        setCurrOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setScore(0);
        setHint(2);
        setGameFinished(false);
        setFilterdOptions([]);        
    }, [reInit, pageName]);


    // validate the answer
    const validateAnswer = (selectedOption) => {
        const currQuestion = quesionsList[currQuestionIdx];
        const correctOption = currQuestion.correct_chocie;
        setCurrOptionSelected(selectedOption);
        setCorrectOption(correctOption);
        setIsOptionsDisabled(true);
        if (selectedOption === correctOption) {
            setTimeout(() => {
                setScore(score + 1);
                nextQuestion();
            }, 1500);
        }
        else {
            setTimeout(() => {
                setGameFinished(true);
                setCurrQuestionIdx(0);
                setCurrOptionSelected(null);
                setCorrectOption(null);
                setIsOptionsDisabled(false);
            }, 1500);
        }
    };

    
    // navigate to the next question
    const nextQuestion = () => {
        if (currQuestionIdx == quesionsList.length - 1) {
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
        let validArr = [];
        for (let i = 0; i < 4; i++){
            if((quesionsList[currQuestionIdx].choices[shuffledArray[i]].choice_text !== quesionsList[currQuestionIdx].correct_chocie) && (validArr.length < 2)){
                validArr.push(shuffledArray[i] + 1);
            }
        }
        return validArr;
    }


    // filtered the array
    const filteredFunction = (choice) => {
        if (filterdOptions.includes(choice.id))
            return false;
        return true;
    }


    // take hint in the game
    const takeHint = () => {
        if (hint > 0 && (filterdOptions.length === 0)){
            setHint(hint - 1);
            setFilterdOptions(generateValidArray());
        }
    }


    // if the game finished
    if (gameFinished) {
        return (
            <View style={styles.gameFinishConainer}>
                <ImageBackground 
                    source={require('../../../assets/HighScore/HighScore.png')}
                    style={styles.gameFinishImage}
                >
                    <View style={styles.ScoreBox}>
                        <Text style={styles.finishedScoreText}>{score}/{quesionsList.length}</Text>
                        <Text style={styles.finishedTotal}>{translate('KnowledgeGame.currentScore')}</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => { setReInit(!reInit), navigation.navigate('KnowledgeCheck') }}
                    >
                        <Text style={styles.playAgain}>
                            {translate('KnowledgeGame.playAgain')}
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
    

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>{pageName}</Text>
                    <TouchableOpacity style={styles.back} onPress={() => { navigation.navigate('KnowledgeCheck') }}>
                        <Image source={require('../../../assets/Scan/Arr.png')} />
                    </TouchableOpacity>
                </View>
                <Image
                    source={quesionsList[currQuestionIdx].image}
                    style={styles.image}
                />
                <View style={styles.quesionsBox}>
                    <Text style={styles.question}>{quesionsList[currQuestionIdx].statement}</Text>
                    <View style={styles.choices}>
                        {quesionsList[currQuestionIdx].choices.filter(filteredFunction).map((choice, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={
                                    [
                                        styles.choice,
                                        choice.choice_text === currOptionSelected ?
                                            choice.choice_text === correctOption ? styles.correct : styles.wrong
                                            :
                                            styles.initialChoice

                                    ]
                                }
                                onPress={() => { validateAnswer(choice.choice_text) }}
                                disabled={isOptionsDisabled}
                            >
                                <Text style={styles.choiceText}>{choice.choice_text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.scoreBox}>
                        <Text style={styles.score}>{translate('KnowledgeGame.score')}:</Text>
                        <Text style={styles.score}>{score}/{quesionsList.length}</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.HintBox}
                        onPress={() => { takeHint() }}
                        disabled={(hint == 0) || (filterdOptions.length > 0)}
                    >
                        <Image source={require('../../../assets/KnowledgeCheck/help.png')} />
                        <View style={styles.hintRemain}>
                            <Text style={styles.hintText}>{hint}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}