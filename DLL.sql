-- Project Name : portfolio-cms
-- Date/Time    : 2024/10/12 9:06:52
-- Author       : Masaki Tsunekawa
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

/*
  << 注意！！ >>
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
  この機能は A5:SQL Mk-2でのみ有効であることに注意してください。
*/

-- 貸出ログ
-- * RestoreFromTempTable
create table product_logs (
  id INT not null comment 'id'
  , workers_id INT not null comment '従業員ID'
  , date_of_update DATETIME not null comment '発生日時'
  , products_id INT not null comment '製品ID'
  , previous_status INT not null comment '変更前製品状態'
  , current_status INT not null comment '変更後製品状態'
  , constraint product_logs_PKC primary key (id)
) comment '貸出ログ' ;

-- 部署マスタ
-- * RestoreFromTempTable
create table departments (
  id INT not null comment 'id'
  , name VARCHAR(255) not null comment '部署名'
  , status TINYINT comment '有効区分'
  , note VARCHAR(255) comment '備考'
  , date_of_insert VARCHAR(255) comment '追加日時'
  , insert_workers_id INT comment '追加者'
  , date_of_update VARCHAR(255) comment '更新日時'
  , update_workers_id INT comment '更新者'
  , constraint departments_PKC primary key (id)
) comment '部署マスタ' ;

-- 従業員マスタ
-- * RestoreFromTempTable
create table workers (
  id INT not null comment 'id'
  , code VARCHAR(255) not null comment '従業員コード'
  , name VARCHAR(255) comment '氏名'
  , departments_id INT not null comment '部署ID'
  , division INT comment '権限区分'
  , status TINYINT comment '有効区分'
  , note VARCHAR(255) comment '備考'
  , date_of_insert DATETIME comment '追加日時'
  , insert_workers_id INT comment '追加者'
  , date_of_update DATETIME comment '更新日時'
  , update_workers_id INT comment '更新者'
  , constraint workers_PKC primary key (id)
) comment '従業員マスタ' ;

-- 製品マスタ
-- * RestoreFromTempTable
create table products (
  id INT not null comment 'id'
  , name VARCHAR(255) comment '名前'
  , quantity DECIMAL comment '数量'
  , item_condition INT comment '製品状態'
  , status TINYINT comment '有効区分'
  , note VARCHAR(255) comment '備考'
  , date_of_insert DATETIME comment '追加日時'
  , insert_workers_id INT comment '追加者'
  , date_of_update DATETIME comment '更新日時'
  , update_workers_id INT comment '更新者'
  , constraint products_PKC primary key (id)
) comment '製品マスタ' ;

