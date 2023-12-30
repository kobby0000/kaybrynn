import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";


// pages 
import { 
  Home,
  About,
  Contact,
  Music,
  Gallery
 } from "./pages/Index";


 //Lyalots
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout/>} >
      <Route index element= {<Home />} />
      <Route path="/biography" element= {<About />} />
      <Route path="/contact_us" element= {<Contact />} />
      <Route path="/music_videos" element= {<Music />} />
      <Route path="/Gallery" element= {<Gallery />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
