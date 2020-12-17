create table package (
	id SERIAL NOT NULL PRIMARY KEY,
	imageId VARCHAR(255) NOT NULL,
	destination VARCHAR(255) NOT NULL,
	price BIGINT NOT NULL,
	description VARCHAR(511) NOT NULL,
	cuotas INT NOT NULL,
	highlight BOOLEAN NOT NULL	
	
);


insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image1.jpg', 'Buenos Aires, Argentina', 50450.99,'Vuelo Flexible',12, false);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image2.jpg', 'Tucuman, Argentina', 10450.99,'Vuelo Flexible',12, false);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image3.jpg', 'Sao Pablo, Brasil', 30450.99,'Vuelo Flexible',12, true);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image4.jpg','New York, USA', 70450,'Vuelo Flexible',12, true);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image5.jpg', 'Santiago, Chile', 100000,'Vuelo Flexible',12, false);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image6.jpg', 'Paris, Francia', 300000,'Vuelo Flexible',12, false);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image7.jpg', 'Lima, Peru', 52000,'Vuelo Flexible',12, true);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image8.jpg', 'Ciudad de Mexico, Mexico', 88000,'Vuelo Flexible',12, false);

insert into package (imageId, destination, price, description,cuotas, highlight)
values ('image9.jpg', 'Caracas, Venezuela', 10000,'Vuelo Flexible',12, true);

create table subscriber (
	id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(255) NOT NULL	
);

insert into subscriber(email)
values ('mail1@gmail.com');

insert into subscriber(email)
values ('mail2@gmail.com');

insert into subscriber(email)
values ('mail3@gmail.com');

insert into subscriber(email)
values ('mail4@gmail.com');

insert into subscriber(email)
values ('mail5@gmail.com');

insert into subscriber(email)
values ('mail6@gmail.com');

insert into subscriber(email)
values ('mail7@gmail.com');

insert into subscriber(email)
values ('mail8@gmail.com');

insert into subscriber(email)
values ('mail9@gmail.com');

insert into subscriber(email)
values ('mail10@gmail.com');


create table contact (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,	
	msg VARCHAR(511) NOT NULL,
	destination VARCHAR(255)
);

insert into contact (name, email, msg, destination)
values ( 'Juan','juan@gmail.com', 'Quiero Info', 'Buenos Aires, Argentina');

insert into contact (name, email, msg, destination)
values ( 'Pablo','pablo@gmail.com', 'Quiero Info', 'Caracas, Venezuela');

insert into contact (name, email, msg, destination)
values ( 'Martina','martina@gmail.com', 'Quiero Info', 'Lima, Peru');



create table newsletter (
	id SERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	imageId VARCHAR(255) NOT NULL
);

insert into newsletter (title, description, imageId)
values ('VIAJA DE LA MEJOR MANERA', 'Suscribite a nuestro newsletter y enterate de los mejores vuelos y beneficios semanales', 'newsletter.jpg');



create table slider (
	id SERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	imageid VARCHAR(255) NOT NULL
);

insert into slider (title, description, imageId)
values ('Este es el título', 'Esta es la descripcion', 'slide1.jpg');

insert into slider (title, description, imageId)
values ('Este es el título', 'Esta es la descripcion', 'slide2.jpg');

insert into slider (title, description, imageId)
values ('Este es el título', 'Esta es la descripcion', 'slide3.jpg');





create table admin_user (
	id SERIAL NOT NULL PRIMARY KEY,
	adm_user VARCHAR(255) NOT NULL,
	adm_password VARCHAR(255) NOT NULL
);

insert into admin_user (adm_user, adm_password)
values ('admin', '$2a$10$ILhSxv0OeuBw/eRhensFhudreabMLAlZNfE5EJD4C.J7WzOorYnCa');



