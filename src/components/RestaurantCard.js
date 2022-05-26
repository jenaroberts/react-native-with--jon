import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function RestaurantCard({ singleRest }) {
  return (
    <View style={styles.restaurantCard}>
      <Text style={styles.restaurantsName}>{singleRest.name}</Text>
      <Text style={styles.cuisine}>{singleRest.cuisine}</Text>
      <Text style={styles.address}>{singleRest.address}</Text>
      <Image
        source={{ uri: singleRest.image }}
        style={{ width: "100%", height: 100 }}
      />
    </View>
  );
}
