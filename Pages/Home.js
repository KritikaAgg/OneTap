import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("OneTapScore")}
            >
                <Text style={styles.buttonText}>Go to OneTapScore</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("CampaignOverview")}
            >
                <Text style={styles.buttonText}>Go to CampaignOverview</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AdReview")}
            >
                <Text style={styles.buttonText}>Go to AdReview</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,  
        fontWeight: "bold",  
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#8C28D2",
        height: 60,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20,  
    },
});
