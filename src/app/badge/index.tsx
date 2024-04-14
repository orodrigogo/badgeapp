import {
  ImageBackground,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native"
import { MotiView } from "moti"

import { styles } from "./styles"

export function Badge() {
  const dimensions = useWindowDimensions()
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.motiView}
        from={{
          opacity: 0,
          translateY: -dimensions.height,
          rotateZ: "50deg",
          rotateY: ["180deg", "360deg"],
        }}
        animate={{
          opacity: 1,
          rotateZ: "0deg",
          rotateY: "0deg",
          translateY: 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          rotateZ: {
            damping: 15,
            mass: 3,
          },
        }}
      >
        <View style={styles.badge}>
          <Image style={styles.band} source={require("@/assets/band.png")} />

          <ImageBackground
            style={styles.background}
            source={require("@/assets/header.png")}
            resizeMode="cover"
          >
            <View style={styles.header}>
              <Text style={styles.company}>Nome da empresa</Text>
              <Text style={styles.id}>#1234567</Text>
            </View>

            <View style={styles.content}>
              <Image
                style={styles.image}
                source={require("@/assets/avatar.jpeg")}
              />

              <Text style={styles.name}>Rodrigo Gonçalves</Text>
              <Text style={styles.email}>rodrigo@email.com</Text>
            </View>
          </ImageBackground>
        </View>
      </MotiView>
    </View>
  )
}
