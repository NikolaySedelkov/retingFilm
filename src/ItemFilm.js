import Star from "./Star.js"

var name = ["shopping_cart_checkout", "settings_accessibility", "terminal", "php", "vpn_key_off", "group"]; 
function ItemFilm({count}){
    let nameFilm = name[Math.floor(Math.random() * name.length)];
    return (
        <div className="conteiner__item-film">
            <div>
                <span className="material-symbols-outlined">{nameFilm}</span>
                <div>{nameFilm}</div>
            </div>
            <div>
                {count?<Star count={count}/>:<Star/>}
            </div>
        </div>
    )
}

ItemFilm.defaultProps = {
    count: null
};

export default ItemFilm;