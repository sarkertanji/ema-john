import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPrivider from "./component/context/AuthPrivider";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import Login from "./component/LogIn/Login";
import NotFound from "./component/NotFound/NotFound";
import OrderReview from "./component/OrderReview/OrderReview";
import PlaceoOrder from "./component/PlaceOrder/PlaceoOrder";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Register from "./component/Register/Register";
import Shop from "./component/shop/Shop";

function App() {
  return (
    <div>
      <AuthPrivider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Shop></Shop>} />
            <Route path="/shop" element={<Shop></Shop>} />
            <Route path="/review" element={<OrderReview></OrderReview>} />
            <Route
              path="/inventory"
              element={
                <PrivateRoute>
                  <Inventory />
                </PrivateRoute>
              }
            />
            <Route
              path="/placeOrder"
              element={
                <PrivateRoute>
                  <PlaceoOrder />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </AuthPrivider>
    </div>
  );
}

export default App;
