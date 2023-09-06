function trocaSwitch(){
    const html = document.documentElement
    // verificar se no documento tem a classe claro
    if (html.classList.contains('claro')) {
        // como o documento tem a classe claro, remover
        html.classList.remove('claro')
    }
    else {
        // como o documento não tem a classe claro, adicionar
        html.classList.add('claro')
    }
}
