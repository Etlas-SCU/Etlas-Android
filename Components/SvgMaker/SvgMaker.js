import { View } from "react-native-animatable";

export default function SvgMaker({ Svg, style = {} }) {

    const isWidth = style && style.width;
    const isHeight = style && style.height;

    const RenderSvg = () => {
        if (isWidth && isHeight) {
            return <Svg width={style.width} height={style.height} />
        }
        else if (isWidth) {
            return <Svg width={style.width} />
        }
        else if (isHeight) {
            return <Svg height={style.height} />
        }
        else {
            return <Svg/>
        }
    }
    return (
        <View style={style}>
            {RenderSvg()}
        </View>
    )
}