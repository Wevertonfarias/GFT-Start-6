quatXP = '';
nomeHeroi = '';

switch (quatXp){
    case 'Se XP for menor do que 1.000':
        console.log('Ferro')
        break

    case 'Se XP for menor do que 1.001 e 2.000':
        console.log('Broze')
        break
    
        case 'Se XP for entre 2.001 e 5.000':
            console.log('Prata')
            break        
        
        case 'Se XP for entre 5.001 e 7.000 ':
                console.log('Ouro')
                break

        case 'Se XP for entre 7.001 e 8.000':
            console.log('Platina')
                break
        case 'Se XP for entre 8.001 e 9.000':
                console.log('Ascendente')
                break

        case 'Se XP for entre 9.001 e 10.000':
                console.log('Imortal')
                break

        case 'Se XP for maior ou igual a 10.001':
            console.log('Radiante')
                break        
}

console.log('O Herói {nomeHeroi} está no nível de {quatXP }');