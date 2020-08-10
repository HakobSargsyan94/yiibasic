-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 10, 2020 at 11:58 AM
-- Server version: 5.7.29
-- PHP Version: 7.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yii2basic`
--

-- --------------------------------------------------------

--
-- Table structure for table `comlikes`
--

CREATE TABLE `comlikes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `com_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comlikes`
--

INSERT INTO `comlikes` (`id`, `user_id`, `com_id`) VALUES
(11, 1, 6),
(9, 1, 8),
(44, 1, 23),
(77, 1, 24),
(224, 1, 46),
(188, 1, 49),
(219, 1, 54),
(183, 1, 61),
(167, 1, 63),
(161, 1, 65),
(195, 1, 66),
(152, 1, 67),
(31, 4, 20),
(30, 4, 22),
(29, 4, 23),
(33, 4, 24),
(32, 4, 31);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `comment` text,
  `like` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '0',
  `reply` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `task_id`, `comment`, `like`, `status`, `reply`) VALUES
(35, 1, 3, 'Inchvor comment', 0, 0, 0),
(36, 1, 3, ' qwe qwe qwe qwe ', 0, 0, 0),
(37, 1, 3, 'qwe qwe ', 0, 0, 0),
(38, 1, 3, 'qweqwe qwe ', 0, 0, 0),
(39, 1, 3, 'werwer wer ', 0, 0, 0),
(40, 1, 3, 'qwe qwe ', 0, 0, 0),
(41, 1, 3, 'qwe qwe qwe ', 0, 0, 0),
(42, 1, 3, 'qwe qwe qwe qwe ', 0, 0, 0),
(43, 1, 3, 'qwe qwe qwe ', 0, 0, 0),
(44, 1, 3, 'qwe qwe qwe qwe ', 0, 0, 0),
(45, 1, 3, 'qwe qwe qwe qwe ', 0, 0, 0),
(46, 1, 3, 'q we qwe qwe qwe qwe ', 1, 0, 0),
(47, 1, 3, 'qwe qwe qwe qwe ', 0, 1, 0),
(48, 1, 3, 'qwe qwe qwe ', 0, 1, 0),
(49, 1, 3, 'qwe qwe qwe qwe ', 1, 1, 0),
(50, 1, 3, 'qwe qwe qwe qwe ', 0, 1, 0),
(51, 1, 3, 'qwe qwe qwe ', 0, 1, 0),
(52, 1, 3, 'qwe qwe qwe qwe ', 0, 1, 0),
(53, 1, 3, 'qwe qwe qwe ', 0, 1, 0),
(54, 1, 3, 'qwe qwe qwe ', 1, 0, 0),
(55, 1, 3, 'qwe qwe qwe ', 0, 0, 0),
(56, 1, 3, 'qwe qwe qwe qwe qw', 0, 1, 0),
(57, 1, 3, 'qwe qwe qwe ', 0, 1, 0),
(58, 1, 3, 'qwe qwe qwe ', 0, 1, 0),
(59, 1, 3, 'qwe qwe qwe qwe ', 0, 1, 0),
(60, 1, 3, 'qwe qwe qwe ', 0, 1, 0),
(61, 1, 3, 'qwe qwe qwe ', 1, 1, 0),
(62, 1, 3, 'TEST FOR HTM qwe qwe Lqwe qwe ', 0, 2, 0),
(63, 1, 3, 'qwe qwe qwe qwe qw', 1, 0, 0),
(64, 1, 3, 'qwe qwe qwe qwe ', 0, 1, 0),
(65, 1, 3, 'COMMENT', 1, 2, 0),
(66, 1, 3, 'NEW qqwe qwwe qwe qwe qwe', 1, 2, 0),
(67, 1, 3, 'Normal comment', 1, 2, 0),
(68, 1, 3, 'qwe qwe qwe qwe qwe ', 0, 0, 0),
(69, 1, 3, 'wqe qwe qwe ', 0, 2, 0),
(70, 1, 3, 'qwe qwe qwe qwe ', 0, 0, 0),
(71, 1, 3, 'e qwe qwe qwe qwe ', 0, 0, 0),
(72, 1, 3, 'eq we qwe ', 0, 0, 0),
(73, 1, 3, 'Changed with we qwe qwe ', 0, 2, 0),
(74, 1, 3, 'qwe qwe qwe qwe ', 0, 1, 0),
(75, 1, 3, 'qwe qwe ', 0, 0, 0),
(76, 1, 3, 'qwe qwe ', 0, 0, 0),
(77, 1, 3, 'qwe qwe qwe qwe ', 0, 0, 76),
(78, 1, 3, 'qwe qwe qwe ', 0, 0, 72),
(79, 1, 3, 'qwe qwe qwe qwe qwe qw eqwe qwe ', 0, 0, 78),
(80, 4, 3, ' qwe qwe qwe qwe qwe ', 0, 0, 79),
(81, 4, 3, ' we qwe qwe qwe ', 0, 1, 79),
(82, 4, 3, 'eqw qwe qwe ', 0, 0, 80);

-- --------------------------------------------------------

--
-- Table structure for table `comment_upload`
--

CREATE TABLE `comment_upload` (
  `comment_id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment_upload`
--

INSERT INTO `comment_upload` (`comment_id`, `file_name`) VALUES
(1, '0.098489001596616200.jpg'),
(1, '0.107386001596616200.jpg'),
(2, '0.338329001596616643.jpg'),
(2, '0.345283001596616643.jpg'),
(3, '0.790664001596640417.jpg'),
(3, '0.794497001596640417.png'),
(4, '0.218437001596640476.doc'),
(5, '0.319502001596641789.xlsx'),
(6, '0.552834001596642030.pdf'),
(10, '0.437218001596694084.jpg'),
(11, '0.620723001596695496.jpg'),
(11, '0.626044001596695496.jpg'),
(11, '0.627746001596695496.jpg'),
(12, '0.016108001596695541.jpg'),
(13, '0.813697001596695578.jpg'),
(13, '0.818979001596695578.jpg'),
(14, '0.006211001596695639.jpg'),
(14, '0.010217001596695639.jpg'),
(15, '0.733438001596695688.jpg'),
(15, '0.737453001596695688.jpg'),
(17, '0.622200001596695724.jpg'),
(17, '0.625843001596695724.jpg'),
(18, '0.516915001596695748.jpg'),
(18, '0.525176001596695748.jpg'),
(19, '0.899755001596695758.jpg'),
(19, '0.905131001596695758.jpg'),
(20, '0.571051001596695797.jpg'),
(20, '0.575151001596695797.jpg'),
(21, '0.493013001596695847.jpg'),
(21, '0.497785001596695847.jpg'),
(22, '0.835822001596696018.jpg'),
(22, '0.840391001596696018.jpg'),
(23, '0.638982001596696133.jpg'),
(23, '0.645357001596696133.jpg'),
(31, '0.393039001596700206.jpg'),
(31, '0.397798001596700206.jpg'),
(33, '0.819912001596702580.jpg'),
(33, '0.824543001596702580.jpg'),
(33, '0.826329001596702580.jpg'),
(35, '0.044408001596704445.jpg'),
(35, '0.049171001596704445.jpg'),
(35, '0.051154001596704445.jpg'),
(36, '0.805136001596704448.jpg'),
(36, '0.811822001596704448.jpg'),
(36, '0.813668001596704448.jpg'),
(38, '0.315717001596706376.doc'),
(39, '0.237381001596706440.xlsx'),
(41, '0.403892001596709608.xlsx'),
(42, '0.676868001596709640.xlsx'),
(43, '0.509510001596709666.xlsx'),
(44, '0.934745001596709684.xlsx'),
(45, '0.181599001596709700.xlsx'),
(46, '0.647557001596709725.xlsx'),
(47, '0.549663001596709737.xlsx'),
(48, '0.143664001596709791.xlsx'),
(49, '0.102654001596709837.xlsx'),
(50, '0.679827001596709850.xlsx'),
(51, '0.173628001596709907.xlsx'),
(52, '0.059709001596709954.xlsx'),
(53, '0.055039001596709989.xlsx'),
(54, '0.828145001596710054.xlsx'),
(55, '0.003150001596710140.xlsx'),
(56, '0.603905001596710152.xlsx'),
(57, '0.269545001596710165.xlsx'),
(58, '0.007427001596710183.xlsx'),
(59, '0.603719001596710209.xlsx'),
(60, '0.972241001596710346.xlsx'),
(61, '0.101930001596710386.xlsx'),
(62, '0.581447001596710407.xlsx'),
(63, '0.917946001596710420.xlsx'),
(64, '0.904308001596710732.xlsx'),
(64, '0.912923001596710732.xlsx'),
(64, '0.916419001596710732.xlsx'),
(65, '0.662246001596710789.xlsx'),
(65, '0.667435001596710789.xlsx'),
(66, '0.591733001596710832.xlsx'),
(66, '0.595805001596710832.xlsx'),
(67, '0.590931001596711552.xlsx'),
(67, '0.594744001596711552.xlsx'),
(68, '0.333595001596711688.xlsx'),
(68, '0.339881001596711688.xlsx'),
(68, '0.341768001596711688.xlsx'),
(69, '0.221917001596711738.xlsx'),
(69, '0.226546001596711738.xlsx'),
(69, '0.228573001596711738.xlsx'),
(70, '0.121729001596787240.doc'),
(71, '0.780129001596787260.xlsx'),
(71, '0.785162001596787260.xlsx'),
(72, '0.423894001596795531.xlsx'),
(73, '0.318367001597038618.jpg'),
(74, '0.849460001597038627.jpg'),
(79, '0.474570001597047738.jpg'),
(79, '0.479142001597047738.png'),
(80, '0.971289001597047840.png');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `task_id`) VALUES
(58, 100, 3);

-- --------------------------------------------------------

--
-- Table structure for table `migration`
--

CREATE TABLE `migration` (
  `version` varchar(180) NOT NULL,
  `apply_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migration`
--

INSERT INTO `migration` (`version`, `apply_time`) VALUES
('m000000_000000_base', 1596608431),
('m200805_062637_create_test_table', 1596608825),
('m200805_062859_create_comlikes_tables', 1596608962),
('m200805_063021_create_likes_table', 1596609087),
('m200805_063215_create_comment_upload_table', 1596609181),
('m200805_063423_create_comments_table', 1596609293),
('m200805_063610_create_posts_table', 1596609567),
('m200805_082245_create_comments_table', 1596615893),
('m200810_051923_add_status_column', 1597036882);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text,
  `current_date` datetime DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `text` text,
  `title` varchar(255) DEFAULT NULL,
  `like` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `comment`, `current_date`, `img`, `text`, `title`, `like`, `status`) VALUES
(2, NULL, '', NULL, '15966121665f2a5e4676bd29.78143949.jpg', 'qwe', 'q', 0, 1),
(3, NULL, '', '2020-08-05 10:24:04', '15966122545f2a5e9ec98415.55363101.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'w', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `test` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `auth_key` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '10',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `verification_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `auth_key`, `password_hash`, `password_reset_token`, `email`, `status`, `created_at`, `updated_at`, `verification_token`) VALUES
(1, 'Hakob', 'gox4q1Y-EzGwppobq6qTZcWxx9gi0Upu', '$2y$10$Pk0jpVfRJh/Q8lZbVXufoeoDBIxvU/N5UHZSlD..ecrpWE.Y5BpB.', '', 'hakobsargsyan94@mail.ru', 10, 1595946727, 1595946727, 'ryy-62J-m_ncr6szQqxDecLVo2MeM2vY_1595946727'),
(4, 'Ashot', 'gox4q1Y-EzGwppobq6qTZcWxx9gi0Upw', '$2y$10$Pk0jpVfRJh/Q8lZbVXufoeoDBIxvU/N5UHZSlD..ecrpWE.Y5BpB.', '123', 'ashot@mail.ru', 10, 1595946728, 1595946728, 'ryy-62J-m_ncr6szQqxDecLVo2MeM2vY_1595946723');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comlikes`
--
ALTER TABLE `comlikes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_project_id_projectsub` (`user_id`,`com_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment_upload`
--
ALTER TABLE `comment_upload`
  ADD PRIMARY KEY (`comment_id`,`file_name`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migration`
--
ALTER TABLE `migration`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password_reset_token` (`password_reset_token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comlikes`
--
ALTER TABLE `comlikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
