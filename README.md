# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

**chat-space データベース設計**

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|
|groupname|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|text||null: false|
|text|text||null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users

## group-usersテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
