import { View, Text } from "react-native-animatable";
import { styles } from "./Styles";
import { translate } from "../../Localization";


export default function EmptyContainer({ }) {
    return (
        <View style={styles.EmptyContainer}>
            <Text style={styles.EmptyText}>{translate('messages.noFav')}</Text>
        </View>
    )
}