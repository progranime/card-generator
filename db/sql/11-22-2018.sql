/*
SQLyog Ultimate v12.14 (64 bit)
MySQL - 10.1.25-MariaDB : Database - cardgenerator
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cardgenerator` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `cardgenerator`;

/*Table structure for table `brand` */

DROP TABLE IF EXISTS `brand`;

CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sequence` int(11) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `brand` */

insert  into `brand`(`id`,`name`,`sequence`,`is_delete`) values 
(1,'midas',1,0),
(2,'klarkteknik',2,0),
(3,'labgruppen',3,0),
(4,'lake',4,0),
(5,'tannoy',5,0),
(6,'turbosound',6,0),
(7,'tcelectronic',7,0),
(8,'tchelicon',8,0),
(9,'behringer',9,0),
(10,'bugera',10,0),
(11,'coolaudio',11,0),
(12,'auratone',12,0);

/*Table structure for table `brand_list` */

DROP TABLE IF EXISTS `brand_list`;

CREATE TABLE `brand_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_list_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `brand_list_id` (`brand_list_id`),
  CONSTRAINT `brand_list_ibfk_1` FOREIGN KEY (`brand_list_id`) REFERENCES `product_division` (`brand_list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `brand_list` */

insert  into `brand_list`(`id`,`brand_list_id`,`name`,`is_delete`) values 
(1,1,'behringer',0),
(2,1,'tcelectronic',0),
(3,1,'tchelicon',0),
(4,1,'tannoy',0),
(5,1,'bugera',0),
(6,2,'midas',0),
(7,2,'klarkteknik',0),
(8,2,'labgruppen',0),
(9,2,'lake',0),
(10,2,'tannoy',0),
(11,2,'turbosound',0),
(12,3,'tannoy',0);

/*Table structure for table `card` */

DROP TABLE IF EXISTS `card`;

CREATE TABLE `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `picture` longtext,
  `position` varchar(255) NOT NULL,
  `location` text,
  `product_division_id` int(11) NOT NULL,
  `status_id` int(11) DEFAULT '1',
  `create_by` varchar(255) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `division_id` (`product_division_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `card_ibfk_1` FOREIGN KEY (`product_division_id`) REFERENCES `product_division` (`id`) ON DELETE CASCADE,
  CONSTRAINT `card_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;

/*Data for the table `card` */

insert  into `card`(`id`,`name`,`picture`,`position`,`location`,`product_division_id`,`status_id`,`create_by`,`create_date`,`update_by`,`update_date`,`is_delete`) values 
(77,'Eren Yeager updated','/images/dp/1542768456777-eren.jpg','Attack Titan updated','Wall Maria updated',2,2,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(78,'Momo-Chan updated','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,5,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(79,'Momo-Chan 2','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,1,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(80,'Momo-Chan 3','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,3,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(81,'Momo-Chan 4','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,5,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(82,'Momo-Chan 5','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,1,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(83,'Momo-Chan 6','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,1,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(84,'Momo-Chan 7','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,1,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(85,'Momo-Chan 8','/images/dp/1542773583400-momo.jpg','Dancer','Korea',3,1,'jeremy.espinosa','2018-11-21','jeremy.espinosa','2018-11-21',0),
(86,'Kelvin Barsana','/images/dp/1542787824711-nancy.jpg','Web Specialist','Manila',4,3,'kelvin.barsana','2018-11-21','jeremy.espinosa','2018-11-21',0);

/*Table structure for table `contact` */

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_id` int(11) NOT NULL,
  `cellphone` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `skype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `card_id` (`card_id`),
  CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;

/*Data for the table `contact` */

insert  into `contact`(`id`,`card_id`,`cellphone`,`telephone`,`email`,`skype`) values 
(60,77,'123456 updated','654321 updated','eren@gmail.com.up','eren@skype.com. updated'),
(61,78,'123','321','momo@gmail.com','momo@skype.com'),
(62,79,'123','321','momo@gmail.com','momo@skype.com'),
(63,80,'123','321','momo@gmail.com','momo@skype.com'),
(64,81,'123','321','momo@gmail.com','momo@skype.com'),
(65,82,'123','321','momo@gmail.com','momo@skype.com'),
(66,83,'123','321','momo@gmail.com','momo@skype.com'),
(67,84,'123','321','momo@gmail.com','momo@skype.com'),
(68,85,'123','321','momo@gmail.com','momo@skype.com'),
(69,86,'0987654331','1234567','kelvin.barsana@gmail.com','kelvin@skype.com');

/*Table structure for table `product_division` */

DROP TABLE IF EXISTS `product_division`;

CREATE TABLE `product_division` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `brand_list_id` int(11) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `brand_list_id` (`brand_list_id`),
  CONSTRAINT `product_division_ibfk_1` FOREIGN KEY (`brand_list_id`) REFERENCES `product_division` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `product_division` */

insert  into `product_division`(`id`,`name`,`brand_list_id`,`is_delete`) values 
(1,'creation',1,0),
(2,'enterprise',2,0),
(3,'life',3,0),
(4,'generic',4,0);

/*Table structure for table `status` */

DROP TABLE IF EXISTS `status`;

CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `status` */

insert  into `status`(`id`,`name`,`is_delete`) values 
(1,'pending',0),
(2,'need info',0),
(3,'for printing',0),
(4,'for shipment',0),
(5,'closed',0);

/*Table structure for table `user_role` */

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `user_role` */

insert  into `user_role`(`id`,`name`,`role`) values 
(1,'jeremy.espinosa','admin'),
(2,'virn.abuda','printer');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
