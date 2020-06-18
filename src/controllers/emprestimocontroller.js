const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async create(request,response){
        const {cpf, uf,data_nascimento,valor,parcelas} = request.body;

        if(parcelas > 360){
            return response.json('Não podemos efetuar parcelas com prazo acima de 30 anos');
        }  else if(valor < 50000){
            return response.json('O valor mínimo para empréstimo é de 50.000 R$');
        }
        //Calculando todas as possíbilidades de erro
        let taxa_juros_simples = 0;

        if(uf == 'MG'){
            taxa_juros_simples = 0.01;
        } else if(uf == 'SP'){
            taxa_juros_simples = 0.008;
        } else if(uf == 'RJ'){
            taxa_juros_simples = 0.009;
        } else {
            taxa_juros_simples = 0.011;
        }

        let juros = valor * taxa_juros_simples * parcelas;

        valor_total = valor + juros;

        await prisma.emprestimo.create({
            data:{
                cpf,
                data_nascimento,
                parcelas,
                taxa_juros_simples,
                uf,
                valor,
                valor_total
            }
        })

        return response.json('Empréstimo aprovado');


    },
    async simular(request,response){
        const {cpf, uf,data_nascimento,valor,parcelas} = request.body;

        if(parcelas > 360){
            return response.json('Não podemos efetuar parcelas com prazo acima de 30 anos');
        } else if(valor < 50000){
            return response.json('O valor mínimo para empréstimo é de 50.000 R$');
        }
        //Calculando todas as possíbilidades de erro
        let taxa_juros_simples = 0;

        if(uf == 'MG'|| uf=='mg'  ){
            taxa_juros_simples = 0.01;
        } else if(uf == 'SP'|| uf ==' sp'){
            taxa_juros_simples = 0.008;
        } else if(uf == 'RJ'|| uf == 'rj'){
            taxa_juros_simples = 0.009;
        } else {
            taxa_juros_simples = 0.011;
        }

        let juros = valor * taxa_juros_simples * parcelas;

        valor_total = valor + juros;

        taxa_juros_simples *= 100;

        const numberformat = new Intl.NumberFormat();

        taxa_juros_simples = numberformat.format(taxa_juros_simples);

        const data = {
            valor,
            taxa_juros_simples,
            parcelas,
            valor_total
        }
        return response.json(data);



        
    }
};