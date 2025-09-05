import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./lib/data";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { RoundedText } from "./components/RoundedText";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     gcTime: 1000 * 60 * 60 * 24, // 24 hours
  //   },
  // },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    sfProRoundedSemibold: require("./assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    sfProRoundedMedium: require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    sfProRoundedRegular: require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
  });

  useEffect(() => {
    console.log("LOADED", loaded);
    if (loaded) SplashScreen.hide();
  }, [loaded]);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: asyncStoragePersister,
        // buster: currentlyRunning.updateId + " ",
      }}
    >
      <Content />
    </PersistQueryClientProvider>
  );
}

function Content() {
  const { data, status, error, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}
      >
        {isLoading && <RoundedText>Loading</RoundedText>}
        {!isLoading && (
          <View style={{ width: "100%", height: "100%", rowGap: 20 }}>
            {data?.diningCourts.map((d) => {
              const images = {
                ford: require("./assets/courts/ford.png"),
                earhart: require("./assets/courts/earhart.png"),
                hillenbrand: require("./assets/courts/hillenbrand.png"),
                windsor: require("./assets/courts/windsor.png"),
                wiley: require("./assets/courts/wiley.png"),
              };

              const image =
                d.name === "Ford"
                  ? require("./assets/courts/ford.png")
                  : d.name === "Earhart"
                  ? require("./assets/courts/earhart.png")
                  : d.name === "Hillenbrand"
                  ? require("./assets/courts/hillenbrand.png")
                  : d.name === "Windsor"
                  ? require("./assets/courts/windsor.png")
                  : require("./assets/courts/wiley.png");

              return (
                <View
                  style={{
                    width: "100%",
                  }}
                  key={d.id}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      columnGap: 8,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        columnGap: 8,
                      }}
                    >
                      <Image
                        source={image}
                        // src={image}
                        style={{ borderRadius: 999, width: 25, height: 25 }}
                      />
                      <RoundedText
                        style={{
                          fontSize: 28,
                        }}
                      >
                        {d.name}
                      </RoundedText>
                    </View>
                    {/* <RoundedText>{}</RoundedText> */}
                    <RoundedText>{d.lineLength}</RoundedText>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                      borderColor: "#e5e5e5",
                      padding: 5,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <RoundedText>See Today's Menu</RoundedText>
                  </TouchableOpacity>
                  <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ columnGap: 10 }}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#e5e5e5",
                      }}
                    >
                      <Image
                        source={require("./assets/burger.png")}
                        style={{ width: 150, height: 150, borderRadius: 10 }}
                      />
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#e5e5e5",
                      }}
                    >
                      <Image
                        source={require("./assets/burger.png")}
                        style={{ width: 150, height: 150, borderRadius: 10 }}
                      />
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#e5e5e5",
                      }}
                    >
                      <Image
                        source={require("./assets/burger.png")}
                        style={{ width: 150, height: 150, borderRadius: 10 }}
                      />
                    </View>
                  </ScrollView>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    paddingHorizontal: 20,

    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
