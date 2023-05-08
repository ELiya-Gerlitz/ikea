-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2023 at 07:50 PM
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
-- Database: `ikea`
--

-- --------------------------------------------------------

--
-- Table structure for table `furniture`
--

CREATE TABLE `furniture` (
  `code` int(11) NOT NULL,
  `furnitureTypeId` int(40) NOT NULL,
  `dimensions` varchar(50) NOT NULL,
  `color` varchar(30) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furniture`
--

INSERT INTO `furniture` (`code`, `furnitureTypeId`, `dimensions`, `color`, `price`) VALUES
(11, 2, 'transcendental', 'Binyomin', '0'),
(13, 4, '20 X 50 X 30', 'salmon', '147'),
(14, 4, '20 X 50 X 30', 'gold', '147'),
(15, 2, '20 X 50 X 30', 'copper', '147'),
(16, 2, '185 X 60 ', 'Binyomin', '147'),
(17, 2, '20 X 50 X 30', 'pistachio', '147');

-- --------------------------------------------------------

--
-- Table structure for table `furnituretype`
--

CREATE TABLE `furnituretype` (
  `furnitureTypeId` int(11) NOT NULL,
  `furnitureType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furnituretype`
--

INSERT INTO `furnituretype` (`furnitureTypeId`, `furnitureType`) VALUES
(1, 'Tables'),
(2, 'Chairs'),
(3, 'Closets'),
(4, 'Dressers'),
(5, 'Beds');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `username`, `password`) VALUES
(1, 'Eliya', 'Gerliyz', '90X120X60', 'pinkheartshearts'),
(2, 'Eliya', 'Gerlitz', 'ELiya1992', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`code`),
  ADD KEY `furnituretypeName` (`furnitureTypeId`);

--
-- Indexes for table `furnituretype`
--
ALTER TABLE `furnituretype`
  ADD PRIMARY KEY (`furnitureTypeId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `furniture`
--
ALTER TABLE `furniture`
  MODIFY `code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `furnituretype`
--
ALTER TABLE `furnituretype`
  MODIFY `furnitureTypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `furniture`
--
ALTER TABLE `furniture`
  ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`furnitureTypeId`) REFERENCES `furnituretype` (`furnitureTypeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
