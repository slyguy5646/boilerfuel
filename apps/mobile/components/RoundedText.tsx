import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";

export function RoundedText({
  children,
  size,
  color,
  style,
  numberOfLines,
}: {
  children: ReactNode;
  size?: number;
  color?: string;
  style?: TextStyle;
  numberOfLines?: number;
}) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        ...style,
        color: color || style?.color,
        fontSize: size || style?.fontSize,
        fontFamily: "sfProRoundedSemibold",
      }}
    >
      {children}
    </Text>
  );
}
