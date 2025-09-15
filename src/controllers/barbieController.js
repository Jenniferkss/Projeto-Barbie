import dados from "../models/dados.js"
const {barbies} = dados; 

const getAllBarbies = (req,res) => {
    const resultado = barbies;
    res.status(200).json({
        total: resultado.lenght,
        barbies: resultado
    })
};

const getBarbiesById = (req,res)=> {
    let id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === id);
    res.status(200).json({
        sucess:true,
        barbie : barbie
    })
};

const createBarbie = (req,res) => {
    const {nome,profissao,anoLancamento} = req.body;

    if(!nome || !profissao){
        return res.status(400).json({
            sucess: false, 
            message: "Nome e profissão sao obrigatórios"
        })
    }

    const novaBarbie = {
    id: barbies.length +1,
    nome: nome,
    profissao: profissao,
    anoLancamento: anoLancamento
}

barbies.push(novaBarbie);
res.status(201).json({
    sucess:true, 
    message:"Barbie cadastrado com sucesso!",
    barbie: novaBarbie
})
};

const deleteBarbie = (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "ID deve ser um número válido!"
        });
    }

    const idParaApagar = parseInt(id);
    
    const barbieParaRemover = barbies.find(b => b.id === idParaApagar);
    if (!barbieParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Barbie com ID ${id} não encontrado para remoção!`
        });
    }

    const barbieFiltrado = barbies.filter(barbie => barbie.id !== idParaApagar);
    
    barbies.splice(0, barbies.length, ...barbieFiltrado);

    res.status(200).json({
        success: true,
        message: `Barbie ${barbieParaRemover.nome} (ID: ${id}) foi removido dos registros.`,
        barbieRemovida: barbieParaRemover
    });
};


export {getAllBarbies,getBarbiesById,createBarbie,deleteBarbie}