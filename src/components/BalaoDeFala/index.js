import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function BalaoDeFala({ message }) {
  const [displayText, setDisplayText] = useState("");
  const [textComplete, setTextComplete] = useState(false);

  const animateText = () => {
    const text = message || "";
    let i = 0;

    setTextComplete(false);
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[i]);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTextComplete(true);
      }
    }, 40);
  };

  useEffect(() => {
    animateText();
  }, []);

  const handleImagePress = () => {
    if (textComplete) {
      animateText();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.balaoDeFala}>
        <Text>{displayText}</Text>
        <View style={styles.conteinerBalao}>
          <View style={styles.seta} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleImagePress()}
        style={styles.imageContainer}
      >
        <Image
          source={require("../../../assets/dog.webp")}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: width * 0.1,
    marginRight: -width * 0.2,
  },
  conteinerBalao: {},
  balaoDeFala: {
    width: width * 0.6,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 30,
  },
  seta: {
    position: "absolute",
    left: "99%",
    marginTop: -20,
    transform: [{ rotate: "122deg" }],
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#f2f2f2",
  },
  imageContainer: {
    marginLeft: width * 0.01,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
  },
});
