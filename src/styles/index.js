import { StyleSheet } from 'react-native';
import {colors, fontSize } from '@/constants/tokens';

// default themes
export const defaultStyles = StyleSheet.create({
	container: {
        flex:1, backgroundColor: colors.background,
    },

    text: {
        fontSize: fontSize.base,
        color: colors.text,
    }

});

// use later
export const utilsStyles = StyleSheet.create({
    // ...
});
