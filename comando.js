document.getElementById('rolagem').addEventListener('click', () => {
    document.getElementById('secao').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const {nome} = card. dataset;
        ('${nome}');
   });
});