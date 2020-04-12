create table categories
(
    id      int auto_increment
        primary key,
    nom     varchar(20) not null,
    details varchar(50) not null
);

create table fournisseurs
(
    id      int auto_increment
        primary key,
    nom     varchar(20)  not null,
    adresse varchar(100) not null,
    idCat   int          not null,
    constraint fournisseurs_ibfk_1
        foreign key (idCat) references categories (id)
);

create index idCat
    on fournisseurs (idCat);

create table produits
(
    id      int auto_increment
        primary key,
    nom     varchar(20) not null,
    idCat   int         not null,
    idFourn int         not null,
    origine varchar(30) not null,
    constraint fk_produits_categorie
        foreign key (idCat) references categories (id),
    constraint produits_ibfk_1
        foreign key (idFourn) references fournisseurs (id)
);

create index idFourn
    on produits (idFourn);

create table utilisateurs
(
    id        int auto_increment
        primary key,
    pseudo    varchar(50)  not null,
    mdp       varchar(50)  not null,
    email     varchar(50)  not null,
    adresse   varchar(100) not null,
    telephone varchar(15)  not null
);


