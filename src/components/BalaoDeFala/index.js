import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function SpeechBubble({ message }) {
  const [displayText, setDisplayText] = useState("");
  const [textComplete, setTextComplete] = useState(false);

  const animateText = () => {
    const text = message || ''
    var i = 0

    setTextComplete(false)
    setDisplayText('')

    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[i]);
      i++;
      if (i === text.length) {
        clearInterval(interval)
        setTextComplete(true)
      }
    }, 70)
  }

  useEffect(() => {
    animateText()
  }, [])

  const handleImagePress = () => {
    if (textComplete) {
      animateText()
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: 'row',
        marginBottom: 35,
        marginRight: -80,
      }}
    >
      <View style={{
        marginBottom: 50
      }}>
        <View style={styles.balaoDeFala}>
          <Text>
            {displayText}
          </Text>
        </View>
        <View style={styles.seta} />
      </View>
      <TouchableOpacity onPress={() => handleImagePress()}>
        <Image
          source={require("../../../assets/dog.webp")}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  balaoDeFala: {
    position: 'relative',
    width: 220,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  seta: {
    position: 'absolute',
    top: '50%',
    right: -15,
    marginTop: -30,
    transform: 'rotate(122deg)',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#f2f2f2',
  },
})