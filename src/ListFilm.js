import ItemFilm from "./ItemFilm.js"

function ListFilm({count}){
    return (
        <div className="block__list-film">
            {
                count?<ItemFilm count={count}/>:<ItemFilm/>
            }
        </div>
    )
}

ListFilm.defaultProps = {
    count: null
};

export default ListFilm;