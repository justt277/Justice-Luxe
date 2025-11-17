import React, {useState} from 'react';
import Home from './home';
import About from './about';
import Contact from './contact';
import TimberlandUS from './assets/TimberlandUS.gif';

function SimpleRouter() {
    const [route, setRoute] = useState('home');
    
    function RenderComponent() {
        switch(route) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
       
}
   return(
            <div>   
                <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow-sm sticky-top ">
                    <a className='navbar-brand' href="#">
                        <img src={TimberlandUS} alt="50% off on all sneakers!" width="200" height="200" />
                    </a>
                 <div className="container-fluid bg-warning pt-2 pb-2 d-flex justify-content-between">
                    <a className="navbar-" href="#">MyApp</a>
                    <button onClick={() => setRoute('home')} className="btn btn-light btn-outline-primary btn-sm">Home</button>
                    <button onClick={() => setRoute('about')} className="btn btn-light btn-outline-primary btn-sm">About</button>
                    <button onClick={() => setRoute('contact')} className="btn btn-light btn-outline-primary btn-sm">Contact</button>
                </div>
                </nav>
                <RenderComponent />
            </div>
        )
}

export default SimpleRouter;