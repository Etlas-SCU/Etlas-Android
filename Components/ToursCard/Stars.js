import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Page, Swipper } from './Styles';


export default function Stars({ rate, size, color, isPage }) {

    const fullStars = Math.floor(rate);
    const halfStars = rate - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <View style={isPage ? Page.stars : Swipper.stars}>
            {[...Array(fullStars)].map((_, i) => (
                <FontAwesome key={i} name="star" size={size} color={color} />
            ))}
            {[...Array(halfStars)].map((_, i) => (
                <FontAwesome key={i} name="star-half-full" size={size} color={color} />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <FontAwesome key={i} name="star-o" size={size} color={color} />
            ))}
        </View>
    );

}