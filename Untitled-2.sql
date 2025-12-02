-- Consulta 1: Produtos da Categoria 'Camisetas', ordenados por preço
SELECT
    p.nomeProduto,
    p.precoUnitario
FROM Produto p
JOIN Categoria c ON p.idCategoria = c.idCategoria
WHERE c.nomeCategoria = 'Camisetas'
ORDER BY p.precoUnitario ASC;

-- Consulta 2: Nome do cliente e data de suas vendas
SELECT
    cli.nome AS NomeCliente,
    v.dataVenda
FROM Cliente cli
JOIN Venda v ON cli.idCliente = v.idCliente
ORDER BY cli.nome, v.dataVenda DESC;

-- Consulta 3: Os 5 produtos mais caros
SELECT nomeProduto, precoUnitario
FROM Produto
ORDER BY precoUnitario DESC
LIMIT 5;

-- Consulta 4: Detalhes da Venda ID 1
SELECT
    v.idVenda,
    cli.nome AS Cliente,
    p.nomeProduto,
    iv.quantidade,
    iv.precoUnitarioVenda
FROM Venda v
JOIN Cliente cli ON v.idCliente = cli.idCliente
JOIN ItemVenda iv ON v.idVenda = iv.idVenda
JOIN Produto p ON iv.idProduto = p.idProduto
WHERE v.idVenda = 1;