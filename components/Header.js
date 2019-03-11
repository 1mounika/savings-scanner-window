import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header= (props) => {
    return(
        <View>
        
        {props.children}
        

        </View>
    );

};
const Footer= (props) => {
    return(
        <View>
        
        {props.children}
        

        </View>
    );

};
export default Header;
export default Footer;