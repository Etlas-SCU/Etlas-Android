import { UserProvider } from "./Context";
import { UserDataProvider } from "./DataContext";
import { ArticlesProvider } from "./ArticlesContext";
import { ToursProvider } from "./ToursContext";
import { FavArticlesProvider } from "./FavArticlesContext";
import { FavMonumentsProvider } from './FavMonumentsContext';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';


export default function MainContext({ children }) {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <UserProvider>
                <UserDataProvider>
                    <ArticlesProvider>
                        <FavArticlesProvider>
                            <FavMonumentsProvider>
                                <ToursProvider>
                                    {children}
                                </ToursProvider>
                            </FavMonumentsProvider>
                        </FavArticlesProvider>
                    </ArticlesProvider>
                </UserDataProvider>
            </UserProvider>
        </SafeAreaProvider>
    )
}