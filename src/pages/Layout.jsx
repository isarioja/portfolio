import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Loading, Navbar } from "../components";
import { getPortfolio } from "../services/apiPortfolio";

export const loader = async () => {
  const response = await getPortfolio();
  return { 
    repositoryUrl: response.fields.repositoryUrl,  
    linkedinProfileUrl: response.fields.linkedinProfileUrl,
    githubProfileUrl: response.fields.githubProfileUrl
  }
}

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main>
        {
          isLoading 
            ?
            <section className="min-h-screen grid place-items-center">
              <Loading />
            </section>
            : 
            <Outlet />
        }

      </main>
      <Footer />
    </div>
  )
}
