
const ItemCount = ({ max, counter, setCounter, agregar }) => {

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }
    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    return (
        <div>
            <div className="separar">
                <span>Cantidad</span>
                <div>
                    <button onClick={handleRestar} className="btn btnColor">-</button>
                    <span className="mx-2">{counter}</span>
                    <button onClick={handleSumar} className="btn btnColor">+</button>
                </div>
            </div>

            <div>
                <button onClick={agregar} className="btn btnAgregar">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
