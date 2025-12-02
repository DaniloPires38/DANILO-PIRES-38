-- Inserir Categorias
INSERT INTO Categoria (idCategoria, nomeCategoria) VALUES
(1, 'Camisetas'),
(2, 'Calças Jeans'),
(3, 'Vestidos'),
(4, 'Acessórios');

-- Inserir Produtos
INSERT INTO Produto (idProduto, nomeProduto, descricao, precoUnitario, idCategoria) VALUES
(101, 'Camiseta Premium Algodão', 'Camiseta de algodão pima, cor branca', 79.90, 1),
(102, 'Calça Jeans Slim Fit', 'Jeans azul escuro, corte slim', 159.90, 2),
(103, 'Vestido Floral Verão', 'Vestido leve com estampa floral', 99.90, 3),
(104, 'Boné Trucker Preto', 'Boné estilo trucker, tela preta', 45.00, 4),
(105, 'Camiseta Listrada Casual', 'Camiseta de malha com listras horizontais', 69.90, 1);

-- Inserir Clientes
INSERT INTO Cliente (idCliente, nome, email, telefone) VALUES
(1, 'Ana Silva', 'ana.silva@email.com', '11987654321'),
(2, 'Bruno Mendes', 'bruno.mendes@email.com', '21998765432'),
(3, 'Carla Oliveira', 'carla.o@email.com', '31976543210');

-- Inserir Vendas (Transações)
-- Venda 1: Ana compra Camiseta e Calça
INSERT INTO Venda (idVenda, idCliente, dataVenda, valorTotal) VALUES
(1, 1, '2025-11-28', 239.80);

-- Venda 2: Bruno compra Vestido e Acessório
INSERT INTO Venda (idVenda, idCliente, dataVenda, valorTotal) VALUES
(2, 2, '2025-11-29', 144.90);

-- Inserir Itens de Venda (Detalhes dos Produtos Vendidos)
-- Itens da Venda 1
INSERT INTO ItemVenda (idVenda, idProduto, quantidade, precoUnitarioVenda) VALUES
(1, 101, 1, 79.90),
(1, 102, 1, 159.90);

-- Itens da Venda 2
INSERT INTO ItemVenda (idVenda, idProduto, quantidade, precoUnitarioVenda) VALUES
(2, 103, 1, 99.90),
(2, 104, 1, 45.00);