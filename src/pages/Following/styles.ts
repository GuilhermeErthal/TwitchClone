import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    background: ${colors.primary};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
    margin-left: 15px;
`;

export const Main = styled.View`

`;
