-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 08 2018 г., 13:26
-- Версия сервера: 10.1.26-MariaDB
-- Версия PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `university`
--

-- --------------------------------------------------------

--
-- Структура таблицы `building`
--

CREATE TABLE `building` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `building`
--

INSERT INTO `building` (`id`, `name`, `photo`) VALUES
(1, 'Институт физики КФУ', ''),
(2, '2й Корпус', ''),
(3, 'Институт экономики', '');

-- --------------------------------------------------------

--
-- Структура таблицы `classroom`
--

CREATE TABLE `classroom` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `id_building` int(11) NOT NULL,
  `seats` int(11) NOT NULL,
  `floor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `classroom`
--

INSERT INTO `classroom` (`id`, `name`, `photo`, `id_building`, `seats`, `floor`) VALUES
(1, '1010', '', 2, 50, 10),
(2, '808', '', 2, 25, 8),
(3, '308b', '', 3, 70, 3),
(4, '905', '', 2, 30, 9),
(5, '809', '', 2, 20, 8),
(6, '1006', '', 2, 30, 10),
(7, '1113', '', 2, 40, 11),
(8, '1111', '', 2, 30, 11),
(9, '811', '', 2, 30, 8),
(10, '216', '', 2, 100, 2),
(11, '1008', '', 2, 30, 10);

-- --------------------------------------------------------

--
-- Структура таблицы `current_schedule`
--

CREATE TABLE `current_schedule` (
  `id` int(11) NOT NULL,
  `id_schedule` int(11) NOT NULL,
  `date` date NOT NULL,
  `photo` varchar(255) NOT NULL,
  `stats` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `id_institute` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `department`
--

INSERT INTO `department` (`id`, `id_institute`, `name`) VALUES
(1, 4, 'Кафедра прикладной математики'),
(2, 4, 'Кафедра вычислительной математики'),
(3, 4, 'Кафедра математической статистики'),
(4, 4, 'Кафедра системного анализа и информационных технологий'),
(5, 3, 'Кафедра гражданского права'),
(6, 1, 'Кафедpа математического анализа'),
(9, 4, 'Кафедра анализа данных и исследования операций'),
(10, 6, 'Кафедра финансов'),
(11, 6, 'Кафедра маркетинга');

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `id_program` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `id_program`, `name`) VALUES
(1, 2, '09401(1)'),
(2, 2, '09401(2)'),
(3, 2, '09402(1)'),
(4, 2, '09402(2)'),
(5, 2, '09403(1)'),
(6, 2, '09403(2)');

-- --------------------------------------------------------

--
-- Структура таблицы `institute`
--

CREATE TABLE `institute` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `institute`
--

INSERT INTO `institute` (`id`, `name`) VALUES
(1, 'Институт математики и механики им. Н.И. Лобачевского'),
(2, 'Институт физики'),
(3, 'Юридический факультет'),
(4, 'Институт вычислительной математики и информационных технологий'),
(5, 'Высшая школа информационных технологий и информационных систем\r\n'),
(6, 'Институт управления, экономики и финансов');

-- --------------------------------------------------------

--
-- Структура таблицы `lesson`
--

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `lesson`
--

INSERT INTO `lesson` (`id`, `name`) VALUES
(1, 'Управление IT сервисами и контентом(семинар)'),
(2, 'Теория расписаний(семинар)'),
(3, 'Дискретная оптимизация(семинар)'),
(4, 'Система поддержки принятия решения(семинар)'),
(5, 'Имитационное моделирование(семинар)'),
(6, 'Математические модели в логистике(семинар)'),
(7, 'Анализ данных(семинар)'),
(8, 'Информационные системы управления(семинар)'),
(11, 'Управление IT сервисами и контентом(лекция)'),
(12, 'Теория расписаний(лекция)'),
(13, 'Дискретная оптимизация(лекция)'),
(14, 'Система поддержки принятия решения(лекция)'),
(15, 'Имитационное моделирование(лекция)'),
(16, 'Математические модели в логистике(лекция)'),
(17, 'Анализ данных(лекция)'),
(18, 'Управление жизненным циклом информационных систем(семинар)'),
(19, 'Управление жизненным циклом информационных систем(лекция)'),
(20, 'Архитектура предприятия(семинар)'),
(21, 'Архитектура предприятия(лекция)'),
(22, 'Маркетинг(семинар)'),
(23, 'Маркетинг(лекция)');

-- --------------------------------------------------------

--
-- Структура таблицы `program`
--

CREATE TABLE `program` (
  `id` int(11) NOT NULL,
  `id_institute` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `program`
--

INSERT INTO `program` (`id`, `id_institute`, `name`) VALUES
(1, 4, 'Прикладная математика и информатика'),
(2, 4, 'Бизнес-информатика'),
(3, 4, 'Прикладная информатика '),
(4, 4, 'Информационные системы и технологии'),
(5, 1, 'Механика и математическое моделирование'),
(6, 2, 'Физика');

-- --------------------------------------------------------

--
-- Структура таблицы `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `id_lesson` int(11) NOT NULL,
  `id_teacher` int(11) NOT NULL,
  `id_groups` int(11) NOT NULL,
  `id_classroom` int(11) NOT NULL,
  `start` time NOT NULL,
  `end` time NOT NULL,
  `day` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `schedule`
--

INSERT INTO `schedule` (`id`, `id_lesson`, `id_teacher`, `id_groups`, `id_classroom`, `start`, `end`, `day`) VALUES
(1, 1, 1, 0, 2, '15:20:00', '16:50:00', 'Monday-count'),
(2, 1, 1, 0, 2, '15:20:00', '16:50:00', 'Monday-uncount'),
(3, 2, 2, 0, 4, '17:00:00', '18:30:00', 'Monday-uncount'),
(4, 3, 2, 0, 4, '17:00:00', '18:30:00', 'Monday-count'),
(5, 4, 4, 0, 2, '15:20:00', '16:50:00', 'Tuesday-uncount'),
(6, 5, 4, 0, 2, '15:20:00', '16:50:00', 'Tuesday-count'),
(7, 7, 5, 0, 5, '15:20:00', '16:50:00', 'Tuesday-uncount'),
(8, 6, 3, 0, 6, '17:00:00', '18:30:00', 'Tuesday'),
(9, 17, 5, 0, 7, '18:40:00', '20:10:00', 'Tuesday-count'),
(10, 7, 5, 0, 8, '13:40:00', '15:10:00', 'Wednesday-count'),
(11, 4, 4, 0, 2, '13:40:00', '15:10:00', 'Wednesday-uncount'),
(12, 4, 4, 0, 2, '13:40:00', '15:10:00', 'Wednesday-count'),
(13, 8, 6, 0, 9, '15:20:00', '16:50:00', 'Wednesday'),
(14, 14, 4, 0, 10, '17:00:00', '18:30:00', 'Wednesday-uncount'),
(15, 15, 4, 0, 10, '17:00:00', '18:30:00', 'Wednesday-count'),
(16, 13, 2, 0, 3, '13:40:00', '15:10:00', 'Thursday'),
(17, 12, 2, 0, 3, '15:20:00', '16:50:00', 'Thursday'),
(18, 11, 1, 0, 3, '17:00:00', '18:30:00', 'Thursday-uncount'),
(19, 19, 7, 0, 3, '17:00:00', '18:30:00', 'Thursday-count'),
(20, 16, 3, 0, 10, '08:30:00', '10:00:00', 'Saturday'),
(21, 21, 8, 0, 10, '10:10:00', '11:40:00', 'Saturday-uncount'),
(22, 23, 9, 0, 10, '10:10:00', '11:40:00', 'Saturday-count'),
(23, 20, 8, 0, 1, '11:50:00', '13:20:00', 'Saturday-uncount'),
(24, 18, 7, 0, 1, '11:50:00', '13:20:00', 'Saturday-count'),
(25, 22, 10, 0, 11, '13:40:00', '15:10:00', 'Saturday-count');

-- --------------------------------------------------------

--
-- Структура таблицы `schedule_group`
--

CREATE TABLE `schedule_group` (
  `id_schedule` int(11) NOT NULL,
  `id_group` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `schedule_group`
--

INSERT INTO `schedule_group` (`id_schedule`, `id_group`) VALUES
(1, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(5, 1),
(6, 1),
(7, 2),
(8, 1),
(8, 2),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(10, 1),
(11, 2),
(12, 2),
(13, 1),
(13, 2),
(14, 1),
(14, 2),
(14, 3),
(14, 4),
(14, 5),
(14, 5),
(15, 1),
(15, 2),
(15, 3),
(15, 4),
(15, 5),
(15, 6),
(16, 1),
(16, 2),
(16, 3),
(16, 4),
(16, 5),
(16, 6),
(17, 1),
(17, 2),
(17, 3),
(17, 4),
(17, 5),
(17, 6),
(18, 1),
(18, 2),
(18, 3),
(18, 4),
(18, 5),
(18, 6),
(19, 1),
(19, 2),
(19, 3),
(19, 4),
(19, 5),
(19, 6),
(20, 1),
(20, 2),
(20, 3),
(20, 4),
(20, 5),
(20, 6),
(21, 1),
(21, 2),
(21, 3),
(21, 4),
(21, 5),
(21, 6),
(22, 1),
(22, 2),
(22, 3),
(22, 4),
(22, 5),
(22, 6),
(23, 1),
(23, 2),
(24, 1),
(24, 2),
(25, 1),
(25, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `statistic`
--

CREATE TABLE `statistic` (
  `id_student` int(11) NOT NULL,
  `id_current_schedule` int(11) NOT NULL,
  `here` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `group_id` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `student`
--

INSERT INTO `student` (`id`, `name`, `surname`, `last_name`, `login`, `password`, `group_id`, `photo`) VALUES
(1, 'Лия', 'Азанчеева', 'Руслановна', 'alr', 'alr', 2, ''),
(2, 'Малика', 'Аминова', 'Игоревна', 'ami', 'ami', 2, ''),
(3, 'Екатерина', 'Белорусцева', 'Алексеевна', 'bei', 'bei', 1, ''),
(4, 'Наталья', 'Желтова', 'Сергеевна', 'jns', 'jns', 1, ''),
(5, 'Айвар', 'Исмагилов', 'Фаритович', 'iaf', 'iaf', 1, ''),
(6, 'Лилия', 'Исмаилова', 'Кадыровна', 'ilk', 'ilk', 2, ''),
(7, 'Лилия', 'Камалетдинова', 'Ильгизовна', 'kli', 'kli', 1, ''),
(8, 'Альбина', 'Каримова', 'Дамировна', 'kad', 'kad', 2, ''),
(9, 'Фирюза', 'Курбаналиева', 'Рустамовна', 'kfr', 'kfr', 2, ''),
(10, 'Камиля', 'Муллакаева', 'Рифовна', 'mkr', 'mkr', 1, ''),
(11, 'Дамир', 'Саматов', 'Ришатович', 'sdr', 'sdr', 2, ''),
(12, 'Анастасия', 'Сачкова', 'Андреевна', 'saa', 'saa', 1, ''),
(13, 'Екатерина', 'Седова', 'Александровна', 'sea', 'sea', 2, ''),
(14, 'Эльвина', 'Фазлыева', 'Рустемовна', 'fer', 'fer', 2, ''),
(15, 'Алена', 'Федорова', 'Сергеевна', 'fas', 'fas', 2, ''),
(16, 'Гузель', 'Хайбуллина', 'Фагимовна', 'hgf', 'hgf', 2, ''),
(17, 'Дмитрий', 'Хайруллин', 'Айратович', 'hda', 'hda', 1, ''),
(18, 'Алия', 'Шакирова', 'Ильясовна', 'shai', 'shai', 1, ''),
(19, 'Евгений', 'Рубцов', 'Игоревич', 'rei', 'rei', 2, '');

-- --------------------------------------------------------

--
-- Структура таблицы `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_department` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `surname`, `last_name`, `login`, `password`, `id_department`, `photo`) VALUES
(1, 'Виктор ', 'Бандеров', 'Викторович', 'bvv', 'bvv', 9, ''),
(2, 'Оксана ', 'Шульгина', 'Николаевна', 'shon', 'shon', 9, ''),
(3, 'Зульфия', 'Габидуллина', 'Равилевна', 'gzr', 'gzr', 9, ''),
(4, 'Евгения ', 'Шустова', 'Петровна', 'shep', 'shep', 9, ''),
(5, 'Ольга ', 'Кашина', 'Андреевна', 'koa', 'koa', 9, ''),
(6, 'Анатолий ', 'Остроумов', 'Павлович', 'oap', 'oap', 9, ''),
(7, 'Рамиль ', 'Тимерханов', 'Шавкатович', 'trsh', 'trsh', 10, ''),
(8, 'Виолетта ', 'Чебакова', 'Юрьевна', 'chvy', 'chvy', 9, ''),
(9, 'Елена ', 'Рольбина', 'Сергеевна', 'res', 'res', 11, ''),
(10, 'Роман ', 'Палякин', 'Борисович', 'prb', 'prb', 11, '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `building`
--
ALTER TABLE `building`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `current_schedule`
--
ALTER TABLE `current_schedule`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `institute`
--
ALTER TABLE `institute`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `building`
--
ALTER TABLE `building`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `classroom`
--
ALTER TABLE `classroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `current_schedule`
--
ALTER TABLE `current_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `institute`
--
ALTER TABLE `institute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `lesson`
--
ALTER TABLE `lesson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `program`
--
ALTER TABLE `program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
