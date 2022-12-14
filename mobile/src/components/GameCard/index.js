import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';
export function GameCard({ data, ...rest }) {
    return (<TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>

        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
            <Text style={styles.name}>
                {data.title}
            </Text>            
            <Text style={styles.ads}>
                {data._count.ads} anúncios
            </Text>
        </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>);
}
