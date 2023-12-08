-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2023 at 04:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fullstack`
--

-- --------------------------------------------------------

--
-- Table structure for table `robots`
--

CREATE TABLE `robots` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `robots`
--

INSERT INTO `robots` (`id`, `name`) VALUES
('gUIz_6XneCBlod0PpRwys', 'Fricky Fricky'),
('h6duGC6rSHtWsUSUB-Gkk', 'prova2'),
('HcpRBBt76zxV3LGkAoVd8', 'matteo');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(53, 'Alessandro', 'marco@gmail.it', '$2b$10$hhCVhGDs1hhY0pGXHnokC.EcCtwtmeFi7Aox7gsJNJjM20O9OeUG.'),
(57, 'Mauro', 'simona.casini89@gmail.it', '$2b$10$hhCVhGDs1hhY0pGXHnokC.VINVw3PHpoU66L44EMB32u9rD9raMfa');

-- --------------------------------------------------------

--
-- Table structure for table `users_robots`
--

CREATE TABLE `users_robots` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_robot` varchar(255) NOT NULL,
  `favorite` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_robots`
--

INSERT INTO `users_robots` (`id`, `id_user`, `id_robot`, `favorite`) VALUES
(9, 53, 'h6duGC6rSHtWsUSUB-Gkk', 1),
(11, 53, 'HcpRBBt76zxV3LGkAoVd8', 1),
(13, 57, 'gUIz_6XneCBlod0PpRwys', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `robots`
--
ALTER TABLE `robots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_robots`
--
ALTER TABLE `users_robots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User` (`id_user`),
  ADD KEY `FK_Robot` (`id_robot`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `users_robots`
--
ALTER TABLE `users_robots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users_robots`
--
ALTER TABLE `users_robots`
  ADD CONSTRAINT `FK_Robot` FOREIGN KEY (`id_robot`) REFERENCES `robots` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_User` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
