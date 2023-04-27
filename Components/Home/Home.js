import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";

export default function Home({ navigation }) {
    
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { navigation.navigate({ name: 'AboutUs' }) }}>
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('Home.title')}</Text>
            </View>
            <Image style={styles.logo} source={require('../../assets/Home/e.png')}/>
            <Text style={styles.etlas}>{translate('Home.etlas')}</Text>
            <Text style={styles.desc}>{translate('Home.desc')}</Text>
            <TextInput
                style={styles.SearchForm}
                placeholder={translate('Home.search')}
                placeholderTextColor={colors.Grey}
                onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                cursorColor={colors.DarkCyan}
            />
            <View styles={styles.Box}>
                <View style={styles.boxHeader}>
                    <Text style={styles.boxTitle}>{translate('Home.tours')}</Text>
                    <Text style={styles.New}>{translate('Home.New')}</Text>
                    <TouchableOpacity style={styles.see_all}>
                        <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                </ScrollView>
            </View>
        </View>
    )
}