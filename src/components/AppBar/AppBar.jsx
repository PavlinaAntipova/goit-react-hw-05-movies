import Navigation from "components/Navigation";

import s from './AppBar.module.css'

export default function AppBar() {

    const className = name => `${s.box} ${name}`
    return (<>
        <header className={s.header}>
            <Navigation />
            <div className={className(s.firstBox)}></div>
            <div className={className(s.secondBox)}></div>
        </header>
     
        </>
  );
};