const FilmInfo = () => {
    const [id, setId] = React.useState(1);
    const [film, setFilm] = React.useState({});
    
    return (         
        <section className="block">
               <div>
                   <button
                       onClick={() => {setId((prevId) => prevId + 1)}}
                       className="custom-button"
                   >
                   Следующий фильм…
                   </button>                    
                   <h3>Идентификатор фильма: {id}</h3>
               </div>
               
               {film.name && <h1>{film.name}</h1>}
           </section>
    )
}


export default FilmInfo;

Первым шагом конвертируем компонент в функциональный. Чтобы компонент начал рендериться, добавим все необходимые данные. Для этого воспользуемся хуком useSstate, чтобы добавить поддержку состояния. Если сейчас нажимать на кнопку, то мы увидим, что всё работает корректно. Счётчик обновляется, но данные о фильмах пока не загружаются. Чтобы исправить это, воспользуемся новым хуком useState.