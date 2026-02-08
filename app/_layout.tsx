import { Nunito_400Regular, Nunito_700Bold, Nunito_900Black } from "@expo-google-fonts/nunito";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import "react-native-reanimated";
const queryClient = new QueryClient();
export default function RootLayout() {
  const [loaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if(!loaded){
    return null
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />;
    </QueryClientProvider>
  );
}
