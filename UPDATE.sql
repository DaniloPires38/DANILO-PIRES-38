-- UPDATE 1: Aumentar preço dos Acessórios em 10%
UPDATE Produto
SET precoUnitario = precoUnitario * 1.10
WHERE idCategoria = (SELECT idCategoria FROM Categoria WHERE nomeCategoria = 'Acessórios');

-- UPDATE 2: Corrigir e-mail do Cliente 'Bruno Mendes'
UPDATE Cliente
SET email = 'bruno.mendes.novo@email.com'
WHERE nome = 'Bruno Mendes';

-- UPDATE 3: Corrigir descrição do Produto ID 105
UPDATE Produto
SET descricao = 'Camiseta de malha casual, listras em preto e branco'
WHERE idProduto = 105;