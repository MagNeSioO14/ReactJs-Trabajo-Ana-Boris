import MOCK_DATA from "../data/MOCK_DATA.json";

export const pedirDatos=() => {
    return new Promise ((resolve, rejact) => {
        setTimeout (() => {
            resolve(MOCK_DATA)
        }, 500)
    })
}