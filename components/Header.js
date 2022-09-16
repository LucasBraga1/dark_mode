import React, { useContext } from 'react';
import { View, Text } from "react-native";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./Themes";

const Header = () => {
    const theme = useContext(ThemeContext)[0];

    return(
      <View style={AppTheme[theme+"Container"]}>
        <Text style={{
          color: AppTheme[theme].textColor, 
          fontSize: 30,
        }}>Dark Mode</Text>
        </View>
    );
}

export default Header;