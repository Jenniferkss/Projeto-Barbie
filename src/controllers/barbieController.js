import dados from "../models/dados.js"
const {barbies} = dados; 

const getAllBarbies = (req,res) => {
    const resultado = barbies;
    res.status(200).json({
        total: resultado.lenght,
        barbies: resultado
    })
}

const getBarbiesById = (req,res)=> {
    let id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === id);
    res.status(200).json({
        sucess:true,
        barbie : barbie
    })
}



export {getAllBarbies,getBarbiesById}