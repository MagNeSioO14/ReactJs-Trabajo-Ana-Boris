

const ItemDetail = ({ item }) => {

    return (
        <div className="produCuerpo">
            <div className="produTamaño produOrden">
                <img src={item.imagen} alt={item.titulo} />
                <p className="descripcionP">{item.descripcion}</p>
            </div>

            <div className="produTamaño">
                <h3>{item.titulo}</h3>
                <p>{item.precio}</p>
                <span><strong>10%</strong> de descuento pagando por transferencia bancaria</span>
                <div>
                    <form>
                        <div className="separar">
                            <label for="">Talle:</label>
                            <select name="Atributo" id="">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">Xl</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="separar">
                        <label>Cantidad:</label>
                        <input type="number" max={item.stock}/>
                    </div>

                    <div>
                        <button className="btnAgregar">Agregar al carrito</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail