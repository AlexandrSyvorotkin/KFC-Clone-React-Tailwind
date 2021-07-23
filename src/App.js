import './App.css';
import Header from "./components/Layout/Header/Header";
import Categories from "./components/Categories";
import Footer from "./components/Layout/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Menu from "./components/Layout/Menu/Menu";


function App() {

    const [menu, setMenu] = useState([])
    const [isLoaded, setIsloaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/db.json')
            .then(({data}) => {
                setMenu(data)
                setIsloaded(true)
            })
    }, [])

    return (
        <>
            <Header/>
            {/*<Categories />*/}
            {/*{isLoaded && <Menu menu={menu}/>}*/}
            <Footer/>

        </>
    );
};

export default App;
