import { apiKey } from "./constants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import Root from "./pages/Root";
import { loader as MovieLoader } from "./pages/Home";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route
        path="/detail/:imdbID"
        element={<SingleMovieDetail />}
        loader={SingleMovieLoader}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
