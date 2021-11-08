let dinheiro_na_carteira = parseInt(prompt("Digite o valor do seu saldo"))
let valor_compra = parseInt(prompt("Digite o valor da sua compra"))
let mensagem = dinheiro_na_carteira - valor_compra

if (dinheiro_na_carteira >= valor_compra) {
    dinheiro_na_carteira = dinheiro_na_carteira - valor_compra
    alert(`Sua compra foi aprovada! Seu saldo atual é de R$${mensagem},00`)
}

else {
    alert("Dinheiro insuficiente! Infelizmente não foi possível fazer o pagamento.")
}