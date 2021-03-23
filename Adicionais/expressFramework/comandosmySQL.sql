
>mysql -h localhost -u root -p /* ENTRAR/LOGIN NO MYSQL */

SHOW DATABASES; /* MOSTRA TODOS OS BANCOS DE DADOS*/

CREATE DATABASE nomeDoBancoDeDados; /* CRIA UM BANCO DE DADOS */

USE nomeDoBancoDeDados; /* USA UM BANCO DE DADOS ESCOLHIDO*/

CREATE TABLE nomeDaTabela( /* CRIA UMA TABELA */
    id INT,
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
); 

show tables; /* MOSTRA TODAS AS TABELAS */

describe nomeDaTabela; /* MOSTRA DENTRO DE UMA TABELA ESPECIFICADA */

INSERT INTO nomeDaTabela(id, nome, email, idade) VALUES(
    0001,"Rafael M","emailqualquer@email.com",20); /*INSERE DADOS EM UMA TABAELA ESPECIFICADA */

SELECT * FROM nomeDaTabela; /* MOSTRA TODOS OS DADOS DA TABELA ESPECIFICADA */
/* É POSSIVEL COLOCAR UMA CONDIÇÃO POR EXEMPLO */
SELECT * FROM nomeDaTabela WHERE idade = 20; 
/* Que NO CASO IRÁ MOSTRAR TODOS O USUARIOS COM 20 ANOS DESSA TABELA*/

DELETE FROM nomeDaTabela; /* IRÁ DELETAR TODA A TABELA */
/* WHERE FUNCIONA COMO UMA CONDIÇÃO*/
DELETE FROM nomeDaTabela WHERE nome = "Victor"; 
/* IRÁ APAGAR TODAS AS LINHAS COM NOME VICTOR E AS OUTRAS COLUNAS DA MESMA LINHA*/

UPDATE nomeDaTabela SET nome = "Marcos", email = "batata@gmail.com" WHERE Id = 0001;
/* IRÁ ALTERAR PARA O NOME "Marcos" e o email para "batata@gmail.com" onde o id "0001" está localizado.*/

