import { useState } from "react";

import s from './SearchMovieForm.module.css'

import search from 'img/search.svg'

export default function SearchMovieForm({ setQuery, setSearchParams }) {
    const [searchQuery, setSearchQuery] = useState("");


    return <form className={s.form} onSubmit={e => {
        e.preventDefault();
        setQuery(searchQuery);
        setSearchParams({ query: searchQuery });
        e.reset();
    }}>
        <input className={s.input} placeholder="Search for any moives here" type="text" name="input" value={searchQuery} onChange={e => {setSearchQuery(e.target.value.trim())} }/>
        <button className={s.button} type="submit"><img src={search} alt=""/></button>
    </form>
};