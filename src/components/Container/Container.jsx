import s from './Container.module.css'

export default function Container({ children }) {
    return (<div className={s.Container}>{children}</div>
  );
};