-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2023 at 01:19 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `horarios_sena`
--

-- --------------------------------------------------------

--
-- Table structure for table `ambientes`
--

CREATE TABLE `ambientes` (
  `idambientes` int(11) NOT NULL,
  `ambiente_name` varchar(45) DEFAULT NULL,
  `ambiente_codigo` varchar(45) DEFAULT NULL,
  `ubicacion` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `responsable` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `asignacion/dia/hora`
--

CREATE TABLE `asignacion/dia/hora` (
  `idasignacion/dia/hora` int(11) NOT NULL,
  `id_asignacion` int(11) DEFAULT NULL,
  `id_dia` int(11) DEFAULT NULL,
  `id_hora` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `asignaciones`
--

CREATE TABLE `asignaciones` (
  `idasignaciones` int(11) NOT NULL,
  `asignacion_codigo` varchar(45) DEFAULT NULL,
  `fehca_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `id_ficha` int(11) DEFAULT NULL,
  `id_resultado` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_ambiente` int(11) DEFAULT NULL,
  `id_instructor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `competencias`
--

CREATE TABLE `competencias` (
  `idcompetencias` int(11) NOT NULL,
  `competencia_codigo` varchar(45) DEFAULT NULL,
  `competencia_name` varchar(45) DEFAULT NULL,
  `competenciascol` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `cant_horas` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dias`
--

CREATE TABLE `dias` (
  `iddias` int(11) NOT NULL,
  `dia_name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ficha/competencia`
--

CREATE TABLE `ficha/competencia` (
  `id` int(11) NOT NULL,
  `id_ficha` int(11) DEFAULT NULL,
  `id_competencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fichas`
--

CREATE TABLE `fichas` (
  `idfichas` int(11) NOT NULL,
  `ficha_codigo` varchar(45) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `id_programa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `horas`
--

CREATE TABLE `horas` (
  `idhoras` int(11) NOT NULL,
  `hora` time DEFAULT NULL,
  `jornada` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `instructor_info`
--

CREATE TABLE `instructor_info` (
  `idinstructor_info` int(11) NOT NULL,
  `horas_contrato` int(11) DEFAULT NULL,
  `fecha_inicio_contrato` date DEFAULT NULL,
  `fecha_fin_contrato` date DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `programas`
--

CREATE TABLE `programas` (
  `idprogramas` int(11) NOT NULL,
  `programa_codigo` varchar(45) DEFAULT NULL,
  `programa_name` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `nivel` varchar(45) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resultados`
--

CREATE TABLE `resultados` (
  `idresultados` int(11) NOT NULL,
  `resultado_codigo` varchar(45) DEFAULT NULL,
  `resultado_name` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `cant_horas` varchar(45) DEFAULT NULL,
  `id_competencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `idroles` int(11) NOT NULL,
  `role_type_name` varchar(45) DEFAULT NULL,
  `create` tinyint(4) DEFAULT 0,
  `read` tinyint(4) DEFAULT 0,
  `update` tinyint(4) DEFAULT 0,
  `delete` tinyint(4) DEFAULT 0,
  `iduser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUsuarios` int(11) NOT NULL,
  `Documento` int(11) NOT NULL,
  `full_name` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `iduser_info` int(11) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `phone_number` int(11) DEFAULT NULL,
  `cell_phone_number` int(11) DEFAULT NULL,
  `url_img` varchar(90) DEFAULT NULL,
  `profession` varchar(45) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `iduser_type` int(11) NOT NULL,
  `user_type_name` varchar(45) DEFAULT NULL,
  `user_typecol` varchar(45) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ambientes`
--
ALTER TABLE `ambientes`
  ADD PRIMARY KEY (`idambientes`);

--
-- Indexes for table `asignacion/dia/hora`
--
ALTER TABLE `asignacion/dia/hora`
  ADD PRIMARY KEY (`idasignacion/dia/hora`),
  ADD KEY `id_asignacion` (`id_asignacion`),
  ADD KEY `id_dia` (`id_dia`),
  ADD KEY `id_hora` (`id_hora`);

--
-- Indexes for table `asignaciones`
--
ALTER TABLE `asignaciones`
  ADD PRIMARY KEY (`idasignaciones`),
  ADD KEY `id_ficha_idx` (`id_ficha`),
  ADD KEY `id_resultado_idx` (`id_resultado`),
  ADD KEY `id_ambiente_idx` (`id_ambiente`),
  ADD KEY `id_user_idx` (`id_usuario`),
  ADD KEY `id_fichas_idx` (`id_ficha`),
  ADD KEY `id_resultados_idx` (`id_resultado`),
  ADD KEY `id_ambientes_idx` (`id_ambiente`),
  ADD KEY `id_users_idx` (`id_usuario`),
  ADD KEY `id_instructor` (`id_instructor`);

--
-- Indexes for table `competencias`
--
ALTER TABLE `competencias`
  ADD PRIMARY KEY (`idcompetencias`);

--
-- Indexes for table `dias`
--
ALTER TABLE `dias`
  ADD PRIMARY KEY (`iddias`);

--
-- Indexes for table `ficha/competencia`
--
ALTER TABLE `ficha/competencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idficha_idx` (`id_ficha`),
  ADD KEY `id_competencia_idx` (`id_competencia`);

--
-- Indexes for table `fichas`
--
ALTER TABLE `fichas`
  ADD PRIMARY KEY (`idfichas`),
  ADD KEY `id_programa_idx` (`id_programa`);

--
-- Indexes for table `horas`
--
ALTER TABLE `horas`
  ADD PRIMARY KEY (`idhoras`);

--
-- Indexes for table `instructor_info`
--
ALTER TABLE `instructor_info`
  ADD PRIMARY KEY (`idinstructor_info`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `programas`
--
ALTER TABLE `programas`
  ADD PRIMARY KEY (`idprogramas`);

--
-- Indexes for table `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`idresultados`),
  ADD KEY `id_competencia_idx` (`id_competencia`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idroles`),
  ADD KEY `id_usuarios_idx` (`iduser`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsuarios`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`iduser_info`),
  ADD KEY `idUser_idx` (`idUser`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`iduser_type`),
  ADD KEY `idUser_idx` (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `iduser_type` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asignacion/dia/hora`
--
ALTER TABLE `asignacion/dia/hora`
  ADD CONSTRAINT `asignacion/dia/hora_ibfk_1` FOREIGN KEY (`id_asignacion`) REFERENCES `asignaciones` (`idasignaciones`),
  ADD CONSTRAINT `asignacion/dia/hora_ibfk_2` FOREIGN KEY (`id_dia`) REFERENCES `dias` (`iddias`),
  ADD CONSTRAINT `asignacion/dia/hora_ibfk_3` FOREIGN KEY (`id_hora`) REFERENCES `horas` (`idhoras`);

--
-- Constraints for table `asignaciones`
--
ALTER TABLE `asignaciones`
  ADD CONSTRAINT `asignaciones_ibfk_1` FOREIGN KEY (`id_ficha`) REFERENCES `fichas` (`idfichas`),
  ADD CONSTRAINT `asignaciones_ibfk_2` FOREIGN KEY (`id_ambiente`) REFERENCES `ambientes` (`idambientes`),
  ADD CONSTRAINT `asignaciones_ibfk_3` FOREIGN KEY (`id_resultado`) REFERENCES `resultados` (`idresultados`),
  ADD CONSTRAINT `asignaciones_ibfk_4` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`idUsuarios`),
  ADD CONSTRAINT `asignaciones_ibfk_5` FOREIGN KEY (`id_instructor`) REFERENCES `instructor_info` (`idinstructor_info`);

--
-- Constraints for table `ficha/competencia`
--
ALTER TABLE `ficha/competencia`
  ADD CONSTRAINT `id_competencia` FOREIGN KEY (`id_competencia`) REFERENCES `competencias` (`idcompetencias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_ficha` FOREIGN KEY (`id_ficha`) REFERENCES `fichas` (`idfichas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `fichas`
--
ALTER TABLE `fichas`
  ADD CONSTRAINT `id_programa` FOREIGN KEY (`id_programa`) REFERENCES `programas` (`idprogramas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `instructor_info`
--
ALTER TABLE `instructor_info`
  ADD CONSTRAINT `instructor_info_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`idUsuarios`);

--
-- Constraints for table `resultados`
--
ALTER TABLE `resultados`
  ADD CONSTRAINT `idcompetencias` FOREIGN KEY (`id_competencia`) REFERENCES `competencias` (`idcompetencias`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `idUsuarios` FOREIGN KEY (`iduser`) REFERENCES `users` (`idUsuarios`);

--
-- Constraints for table `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUsuarios`);

--
-- Constraints for table `user_type`
--
ALTER TABLE `user_type`
  ADD CONSTRAINT `user_type_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUsuarios`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
