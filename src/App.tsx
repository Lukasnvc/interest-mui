import AllRoutes from "./routes/AllRoutes";
import { UserProvider } from "./context/UserContext";

type Props = {}

const App = (props: Props) => {
  return (
    <UserProvider>
      <AllRoutes />
      </UserProvider>
  )
}

export default App