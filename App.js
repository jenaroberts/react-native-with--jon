import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
const image = {
  uri: "https://previews.123rf.com/images/kesu87/kesu871904/kesu87190400027/120480515-greek-food-background-traditional-different-greek-dishes-top-view-close-up.jpg",
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://my-first-firestore-jr.web.app/restaurants"
        );
        const data = await response.json();
        console.log(data);
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.container}
      >
        <ScrollView>
          {allRestaurants ? (
            allRestaurants.map((singleRest) => (
              <Text style={styles.restaurantsName} key={singleRest.id}>
                {singleRest.name}
              </Text>
            ))
          ) : (
            <ActivityIndicator size="large" color="purple" />
          )}
        </ScrollView>
        <Button title="Learn More" color="#007AFF" />
        <Text>Hey class what up!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  restaurantsName: {
    color: "",
    textShadowColor: "black",
    textShadowRadius: "4",
    fontSize: 73,
    marginVertical: 50,
  },
});
