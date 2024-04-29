import { brazillianState, shiftEntity } from './Enumerate.js'

const centroparto       = require('../resource/cnes_estabelecimentos_centrodepartonormal.json')
const centrosaude       = require('../resource/cnes_estabelecimentos_centrodesaude.json')
const farmacia          = require('../resource/cnes_estabelecimentos_farmacia.json')
const homecare          = require('../resource/cnes_estabelecimentos_homecare.json')
const hospital          = require('../resource/cnes_estabelecimentos_hospitalgeral.json')
const policlinica       = require('../resource/cnes_estabelecimentos_policlinica.json')
const postosaude        = require('../resource/cnes_estabelecimentos_postodesaude.json')
const prontoatendimento = require('../resource/cnes_estabelecimentos_prontoatendimento.json')
const prontosocorro     = require('../resource/cnes_estabelecimentos_prontosocorrogeral.json')


export const findByName = (text, pickers) => {
    let cnesList = []
    cnesList = mappingToJson(text, cnesList, pickers)

    var cnesJson = JSON.stringify(cnesList)
    return cnesJson
}

export const mappingToJson = (text, cnesList, pickers) => {
    let type  = pickers[0]
    let state = pickers[1]
    let time  = pickers[2]

    console.log(pickers)

    centroparto.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'CENTRO DE PARTO',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    centrosaude.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'CENTRO DE SAÚDE',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    farmacia.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'FARMÁCIA',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    homecare.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'HOME CARE',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    hospital.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'HOSPITAL',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    policlinica.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'POLICLÍNICA',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    postosaude.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'POSTO DE SAÚDE',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    prontoatendimento.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'PRONTO ATENDIMENTO',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    prontosocorro.map(c => {
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                cnesList.push({
                    "name": c.NO_FANTASIA,
                    "unity": 'PRONTO SOCORRO',
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO)
                })
            }
        }
    })
    return cnesList
}
