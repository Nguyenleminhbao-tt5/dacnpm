import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import DefaultLayout from './components/Layout/DefaultLayout';
import DefaultLayout_AD from './components/Layout/DefaultLayout_AD';
import DefaultLayout_KH from './components/Layout/DefaultLayout_KH';

function App() {
  return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Content = route.component;
                        const Layout = DefaultLayout;
                        if (route.layout===1) Layout= DefaultLayout_AD;
                        else if (route.layout===2) 
                        {
                            return (
                            <Route
                                key={index}
                                path={route.path}
                                
                                element={
                                    
                                        <Content/>
                                   
                                }
                            />);
                        }; 
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                
                                element={
                                    <Layout>
                                        <Content/>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
