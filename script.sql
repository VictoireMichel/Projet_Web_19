create table categories
(
    idCat   int auto_increment
        primary key,
    nom     varchar(20) not null,
    details varchar(50) not null
);

create table fournisseurs
(
    idFourn int          not null
        primary key,
    nom     varchar(20)  not null,
    adresse varchar(100) not null,
    idCat   int          not null,
    constraint fournisseurs_ibfk_1
        foreign key (idCat) references categories (idCat)
);

create index idCat
    on fournisseurs (idCat);

create table produits
(
    id      int auto_increment
        primary key,
    nom     varchar(20) not null,
    idCat   int         not null,
    idFourn int         null,
    origine varchar(30) null,
    constraint fk_produits_categorie
        foreign key (idCat) references categories (idCat),
    constraint produits_ibfk_1
        foreign key (idFourn) references fournisseurs (idFourn)
);

create index idFourn
    on produits (idFourn);

create table utilisateurs
(
    idUser    int          not null
        primary key,
    pseudo    varchar(50)  not null,
    mdp       varchar(50)  not null,
    email     varchar(20)  not null,
    adresse   varchar(100) not null,
    telephone varchar(15)  not null
);


