use master;
go

CREATE DATABASE EmocionesBD;
GO

USE EmocionesBD;
GO

CREATE TABLE Usuarios (
    IdUsuario INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(40) NOT NULL,
    Apellido VARCHAR(40) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
	Rol VARCHAR(20) NOT NULL CHECK (Rol IN ('ADMIN','USUARIO')),
    Estado BIT DEFAULT 1,
    FechaRegistro DATETIME DEFAULT GETDATE()
);




CREATE TABLE Emociones (
    IdEmocion INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(40) NOT NULL UNIQUE
);

INSERT INTO Emociones (Nombre) VALUES
('Alegría'),
('Amor'),
('Calma'),
('Confianza'),
('Enojo'),
('Miedo'),
('Nostalgia'),
('Sorpresa'),
('Tristeza');



CREATE TABLE Comentarios (
    IdEntrada INT PRIMARY KEY IDENTITY(1,1),
    IdUsuario INT NOT NULL,
    IdEmocion INT NOT NULL,
    Intensidad INT NOT NULL CHECK (Intensidad BETWEEN 1 AND 5),
    Nota VARCHAR(MAX) NULL,
    Fecha DATE DEFAULT CAST(GETDATE() AS DATE),

    CONSTRAINT FK_Diario_Usuario 
        FOREIGN KEY (IdUsuario) 
        REFERENCES Usuarios(IdUsuario)
        ON DELETE CASCADE,

    CONSTRAINT FK_Diario_Emocion 
        FOREIGN KEY (IdEmocion) 
        REFERENCES Emociones(IdEmocion)
);


CREATE TABLE Frases(
    IdFrase INT PRIMARY KEY IDENTITY (1,1),
    IdEmocion INT NOT NULL,
    Texto VARCHAR(400) NOT NULL,

    CONSTRAINT FK_Frases_Emocion
        FOREIGN KEY (IdEmocion)
        REFERENCES Emociones(IdEmocion)
        ON DELETE CASCADE
);