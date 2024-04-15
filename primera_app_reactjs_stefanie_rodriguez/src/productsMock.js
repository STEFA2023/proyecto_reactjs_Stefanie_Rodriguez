
export const products = [
    {
        id: "1",
        title: "Remera",
        price: 2500,
        description: "Elaborada en algodon",
        img: "https://res.cloudinary.com/deed7lfnh/image/upload/v1709419942/samples/woman-on-a-football-field.jpg",
        stock: 5,
        category: "sport"
    },
    {
        id: "2",
        title: "Pantalón",
        price: 1800,
        description: "Elaborado en algodón",
        img: "https://res.cloudinary.com/deed7lfnh/image/upload/v1709695162/algr4_1612789898_l3gudu.jpg",
        stock: 3,
        category: "sport"
    },
    {
        id: "3",
        title: "Zapatos",
        price: 3500,
        description: "Elaborados con suela ortopédica",
        img: "https://res.cloudinary.com/deed7lfnh/image/upload/v1709694922/716suvSTBnL._AC_SY575__jhbjom.jpg",
        stock: 7,
        category: "formal"
    },
    {
        id: "4",
        title: "Camisa",
        price: 2000,
        description: "Elaborada en popelina de alta calidad",
        img: "https://res.cloudinary.com/deed7lfnh/image/upload/v1709695032/A09T7144-scaled-1-1366x2048_lujrvj.jpg",
        stock: 10,
        category: "formal"
    },
];




export const getProduct = (id) => {

    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            const item = products.find(product => product.id === id);
            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject(`No se encuentra el articulo con el id ${id}`);
                }
            }, 2000)

        } else {
            reject("No hay productos")
        }
    })
}