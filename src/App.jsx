import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Consultation from "./componentss/consultation";
import LuxuryWedding from "./componentss/luxurywedding";
import ReceptionNight from "./componentss/receptionnight";
import ElegantEngagement from "./componentss/elegantengagement";
import CorporateEvent from "./componentss/corporateevent";
import MemorableBirthday from "./componentss/memorablebirthday";
import DestinationWedding from "./componentss/destinationwedding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation/>}/>
        <Route path="/luxury-wedding" element={<LuxuryWedding />} />
        <Route path="/destination-wedding" element={<DestinationWedding />} />
         <Route path="/elegant-engagement" element={<ElegantEngagement />} />
        <Route path="/reception-night" element={<ReceptionNight />} />
        <Route path="/corporate-event" element={<CorporateEvent />} />
        <Route path="/memorable-birthday" element={<MemorableBirthday />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;