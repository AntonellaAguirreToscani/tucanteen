use tucanteen;
-- Inserts TIPO-PRODUCTO

insert into e01_type_product values(1,'bebidas');
insert into e01_type_product values(2,'plato');
insert into e01_type_product values(3,'menu');
insert into e01_type_product values(4,'sandwiches');
insert into e01_type_product values(5,'postres');

-- Inserts PRODUCTO
SELECT * FROM e01_product;
insert into e01_product values(1,'Coca-Cola','Ligth 500ml',90,'./assets/icon/coca-cola.png',1);
insert into e01_product values(2,'Pizza Napolitana','Chica',210,'./assets/icon/piza.jpg',2);
insert into e01_product values(3,'Coca-Cola','Original 500ml',90,'./assets/icon/coca-cola.png',1);
insert into e01_product values(4,'Lasagna','Verdura',250,'./assets/icon/imagenlasaña.jpg',2);
insert into e01_product values(5,'Spaguetti','Salsa Bolognesa',180,'./assets/icon/fideosconsalsa.jpg',2);
insert into e01_product values(6,'Polenta','c/Salsa Mixta',100,'./assets/icon/polenta.jpg',2);
insert into e01_product values(7,'Pastel de Papas','Casero',150,'./assets/icon/pastel-papas.jpg',3);
insert into e01_product values(8,'Ñoquis','c/salsa Mixta',100,'./assets/icon/ñoquis.jpg',3);
insert into e01_product values(9,'Sandwich','Completo',360,'./assets/icon/completo.png',4);
insert into e01_product values(10,'Sandwich','Ligth',290,'./assets/icon/sandwich-light.jpg',4);
insert into e01_product values(11,'Sandich Miga','x 4',150,'./assets/icon/sandwich-miga.jpg',4);
insert into e01_product values(12,'Sandwich','Pollo',200,'./assets/icon/sandwich-pollo.jpg',4);
insert into e01_product values(13,'Bocha Helado','Frutilla',90,'./assets/icon/bochahelado.png',5);
insert into e01_product values(14,'Tarta','Frutos rojos',170,'./assets/icon/food/tartafrutos.jpg',5);
insert into e01_product values(15,'Torta','Chocolate',190,'./assets/icon/food/tartachoco.jpg',5);
insert into e01_product values(16,'Muffin','Vainilla',100,'./assets/icon/muffin.jpg',5);
