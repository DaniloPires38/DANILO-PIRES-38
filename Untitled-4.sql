-- DELETE 1: Remover o Cliente ID 3
DELETE FROM Cliente
WHERE idCliente = 3;

-- DELETE 2: Remover o Produto ID 105
DELETE FROM Produto
WHERE idProduto = 105;

-- DELETE 3: Remover um Item de Venda específico (ex: Venda 2, Produto 104)
DELETE FROM ItemVenda
WHERE idVenda = 2 AND idProduto = 104;