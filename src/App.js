import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Error404 from "./pages/Error404";
import ErrorBoundary from "./wrappers/ErrorBoundary";

//import custom wrappers
import ScrollToTop from "./wrappers/ScrollToTop";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import Watermark from "./components/Watermark";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop>
					{/* <LeftNavbar /> */}
					<Routes>
						<Route path="/*" element={
                        <div>
                            <Navbar />
                            <Background />
                            <Watermark />
                            <ErrorBoundary >
                                <Home/> 
                            </ErrorBoundary>
                        </div>                        
                        } />
						<Route // best to remove this route so users don't see an unrelated page
							exact
							path="/"
							element={<Navigate to="/myaipets" />}
						/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
}

export default App;
