-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 12-Fev-2022 às 16:47
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `next_soft`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `registros`
--

DROP TABLE IF EXISTS `registros`;
CREATE TABLE IF NOT EXISTS `registros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(20) NOT NULL,
  `nome` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `bairro` varchar(225) NOT NULL,
  `cidade` varchar(225) NOT NULL,
  `estado` varchar(225) NOT NULL,
  `numero` varchar(225) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `registros`
--

INSERT INTO `registros` (`id`, `cpf`, `nome`, `email`, `telefone`, `complemento`, `bairro`, `cidade`, `estado`, `numero`, `logradouro`) VALUES
(1, '12345678910', 'Kaio Kalleb', 'kaiokalleb97@gmail.com', '11958652617', 'Casa', 'Jd. Imperador', 'São Paulo', 'São Paulo', '32', 'Rua Natalino Almeida de Sousa');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
