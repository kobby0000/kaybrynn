import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";


// pages 
import { 
  Home,
  // About,
  Contact,
  // Music,
  Gallery,
 } from "./pages/Index";


 //Lyalots
import RootLayout from "./layouts/RootLayout";
import LayoutTwo from "./layouts/LayoutTwo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"   >
      <Route element={<RootLayout/>}>
      <Route index element= {<Home />} />
      {/* <Route path="/biography" element= {<About />} /> */}
      <Route path="/apply_ticket" element= {<Contact />} />
      {/* <Route path="/music_videos" element= {<Music />} /> */}
      {/* <Route path="/Gallery" element= {<Gallery />} /> */}
      </Route>

      <Route path="/"  element={<LayoutTwo/>}>
      <Route index element= {<Home />} />
      <Route path="/Gallery" element= {<Gallery />} />
      </Route>
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
