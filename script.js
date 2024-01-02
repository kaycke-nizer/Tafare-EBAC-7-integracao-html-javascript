form.addEventListener('submit', function(event){
    event.preventDefault();

    const numero_1 = Number(document.getElementById('numero_1').value);
    const numero_2 = Number(document.getElementById('numero_2').value);

    document.getElementById('resultado').classList.remove('escondido');

    var mensagem = document.getElementById('resultado');

    if (numero_1 > numero_2) {
        mensagem.textContent = 'CUIDADO! O elemento A é maior que o elemento B!';
        mensagem.classList.remove('aviso_positivo');
        mensagem.classList.add('aviso_negativo');
        
    } else if (numero_1 < numero_2) {
        mensagem.textContent = 'Muito bem, elemento B é maior que o elemento A!';
        mensagem.classList.remove('aviso_negativo');
        mensagem.classList.add('aviso_positivo');

    } else {
        mensagem.textContent = 'Ambos os elementos tem o mesmo valor.';
        mensagem.classList.remove('aviso_negativo');
        mensagem.classList.remove('aviso_positivo');
    }
})