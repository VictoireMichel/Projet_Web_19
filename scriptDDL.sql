create schema if not exists prototype_web collate utf8mb4_0900_ai_ci;

create table if not exists categories
(
	id int auto_increment
		primary key,
	nom varchar(30) not null,
	details varchar(100) not null
);

create table if not exists fournisseurs
(
	id int auto_increment
		primary key,
	nom varchar(30) not null,
	adresse varchar(100) not null,
	idCat int not null,
	constraint fournisseurs_ibfk_1
		foreign key (idCat) references categories (id)
);

create index idCat
	on fournisseurs (idCat);

create table if not exists produits
(
	id int auto_increment
		primary key,
	nom varchar(30) not null,
	idCat int not null,
	idFourn int not null,
	origine varchar(30) not null,
	constraint fk_produits_categorie
		foreign key (idCat) references categories (id),
	constraint produits_ibfk_1
		foreign key (idFourn) references fournisseurs (id)
);

create index idFourn
	on produits (idFourn);

create table if not exists utilisateurs
(
	id int auto_increment
		primary key,
	nom varchar(30) null,
	prenom varchar(30) null,
	genre varchar(10) null,
	email varchar(80) null,
	mdp varchar(300) null,
	adresse varchar(100) null,
	telephone varchar(20) null
);

create table if not exists administrateurs
(
	id int auto_increment
		primary key,
	idUti int not null,
	role varchar(50) null,
	constraint administrateurs_utilisateurs_id_fk
		foreign key (idUti) references utilisateurs (id)
);

