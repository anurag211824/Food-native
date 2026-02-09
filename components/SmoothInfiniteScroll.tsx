import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

const iconDataSets = {
  set1: [
    { emoji: "🍕", color: "#FFE5CC" },
    { emoji: "🍔", color: "#F4D03F" },
    { emoji: "🍟", color: "#F8D7DA" },
    { emoji: "🌮", color: "#D5EDDA" },
    { emoji: "🍗", color: "#FADBD8" },
  ],
  set2: [
    { emoji: "🎮", color: "#D1ECF1" },
    { emoji: "🎧", color: "#E2E3E5" },
    { emoji: "☕", color: "#F4D03F" },
    { emoji: "🍿", color: "#FFE5CC" },
    { emoji: "🥤", color: "#F8D7DA" },
  ],
  set3: [
    { emoji: "🍰", color: "#FADBD8" },
    { emoji: "🍦", color: "#D1ECF1" },
    { emoji: "🍪", color: "#FFE5CC" },
    { emoji: "🎲", color: "#D5EDDA" },
    { emoji: "🕹️", color: "#E2E3E5" },
  ],
};

const ITEM_HEIGHT = 160;
const SCROLL_SPEED = 20; // pixels per second
const GAP = 10; // gap between items from styles

interface SmoothInfiniteScrollProps {
  scrollDirection?: "up" | "down";
  iconSet?: "set1" | "set2" | "set3";
}

const SmoothInfiniteScroll = ({
  scrollDirection = "down",
  iconSet = "set1",
}: SmoothInfiniteScrollProps) => {
  const translateY = useSharedValue(0);

  const iconData = iconDataSets[iconSet];
  const items = [...iconData, ...iconData, ...iconData]; // Triple for smoother looping
  const totalContentHeight = iconData.length * (ITEM_HEIGHT + GAP);

  useEffect(() => {
    const duration = (totalContentHeight / SCROLL_SPEED) * 1000;

    if (scrollDirection === "down") {
      translateY.value = withRepeat(
        withTiming(-totalContentHeight, { duration }),
        -1,
        false,
      );
    } else {
      translateY.value = withRepeat(
        withTiming(totalContentHeight, { duration }),
        -1,
        false,
      );
    }
  }, [scrollDirection, totalContentHeight, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.scrollViewWrapper}>
      <Animated.View style={[styles.itemsContainer, animatedStyle]}>
        {items.map((item, idx) => (
          <View
            key={idx}
            style={[styles.iconContainer, { backgroundColor: item.color }]}
          >
            <Text style={{ fontSize: 40 }}>{item.emoji}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
  },
  itemsContainer: {
    gap: GAP,
  },
  iconContainer: {
    width: 160,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
export default SmoothInfiniteScroll;
