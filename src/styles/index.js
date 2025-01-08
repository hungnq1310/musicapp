import { StyleSheet } from 'react-native';
import {colors, fontSize } from '@/constants/tokens';

// default themes
const defaultStyles = StyleSheet.create({
    container: {
        flex:1, backgroundColor: colors.background,
    },

    text: {
        fontSize: fontSize.base,
        color: colors.text,
    }

});

// use later
const utilsStyles = StyleSheet.create({
    // ...
});

export default defaultStyles;