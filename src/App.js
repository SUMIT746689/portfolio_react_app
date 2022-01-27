 import style from './App.module.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header.js';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className={style.default}>
      <div className={style.container}>
        <div className={style.header}><Header/></div>
        <div className={style.menu}><Menu/></div>
        <div className={style.content}><Content/></div>
        <div className={style.footer}><Footer/></div>
      </div>
    </div>
  );
}

export default App;
