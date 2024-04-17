-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2024 a las 06:17:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `project_tecnoparque`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `COD` int(10) NOT NULL,
  `ID_usuarios` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `valor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descrip_libros`
--

CREATE TABLE `descrip_libros` (
  `COD_compra` int(10) NOT NULL,
  `COD_libros` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `valor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `COD` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `contrasena` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`COD`, `nombre`, `descripcion`, `correo`, `image`, `username`, `contrasena`) VALUES
(1, 'Empresa ABC', 'Esta empresa vende libros ', 'empresaABC@gmail.com', NULL, 'empresaABC', '$2a$12$RWTR9P27K2qIfMEa22daE.arq0m71B7CSnbW8BRzDqx9zeFWu1Wq6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `COD` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `costo` int(10) NOT NULL,
  `archivo` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `COD_tema` int(10) NOT NULL,
  `COD_empresa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`COD`, `titulo`, `descripcion`, `costo`, `archivo`, `image`, `COD_tema`, `COD_empresa`) VALUES
(10, 'Relato de una muerte anunciada', 'aqui hay una descripcion del libro', 50000, '', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `COD` int(10) NOT NULL,
  `tema` varchar(60) DEFAULT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`COD`, `tema`, `image`) VALUES
(1, 'Terror', ''),
(2, 'Comedia', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `nombre_c` varchar(200) NOT NULL,
  `numero_tarjeta` int(20) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `contrasena` varchar(200) NOT NULL,
  `correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `nombre_c`, `numero_tarjeta`, `image`, `username`, `contrasena`, `correo`) VALUES
(1036254225, 'Jose', 2147483647, NULL, 'jose', '$2b$05$z8UBM1h8JYe6RndJ4agjaub2VT03LYhj8ypWUJx2kcYOq.nzqWkGq', 'jose@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`COD`),
  ADD KEY `pk_usuarios_fk_compra` (`ID_usuarios`);

--
-- Indices de la tabla `descrip_libros`
--
ALTER TABLE `descrip_libros`
  ADD KEY `pk_compra_fk_descrip_libros` (`COD_compra`),
  ADD KEY `pk_libros_fk_descrip_libros` (`COD_libros`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`COD`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`COD`),
  ADD KEY `pk_tema_fk_libros` (`COD_tema`),
  ADD KEY `pk_empresa_fk_libros` (`COD_empresa`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`COD`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `pk_usuarios_fk_compra` FOREIGN KEY (`ID_usuarios`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `descrip_libros`
--
ALTER TABLE `descrip_libros`
  ADD CONSTRAINT `pk_compra_fk_descrip_libros` FOREIGN KEY (`COD_compra`) REFERENCES `compra` (`COD`),
  ADD CONSTRAINT `pk_libros_fk_descrip_libros` FOREIGN KEY (`COD_libros`) REFERENCES `libros` (`COD`);

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `pk_empresa_fk_libros` FOREIGN KEY (`COD_empresa`) REFERENCES `empresas` (`COD`),
  ADD CONSTRAINT `pk_tema_fk_libros` FOREIGN KEY (`COD_tema`) REFERENCES `temas` (`COD`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
