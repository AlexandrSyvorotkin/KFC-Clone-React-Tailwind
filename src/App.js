import './App.css';
import Header from "./components/Layout/Header/Header";
import Categories from "./components/Categories";
import Footer from "./components/Layout/Footer/Footer";
import {useEffect} from "react";
import {fetchGoods} from "./redux/features/goodsSlice";
import {useDispatch} from "react-redux";
import Menu from "./components/Layout/Menu/Menu";


function App() {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGoods())
    }, [dispatch])

    return (
        <>
            <Header/>
            <Categories/>
            <Menu/>
            <Footer/>
        </>
    );
}

export default App;
