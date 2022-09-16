import React, { useContext } from "react";
import { View, Text, Switch } from "react-native";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./Themes";

const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);

    //<Text style={{fontSize: 70}}>
    //  {themeMode === "light" ? "🌙" : "☀️"}
    //</Text>

    return(
        <View style={AppTheme[themeMode+"Container"]}>

            <Switch
                style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                value={themeMode === "light" ? false : true}
                onValueChange={() => setThemeMode(themeMode === "light"?"dark": "light")}
            />    
        </View>
    );
}

export default ThemeToggler;