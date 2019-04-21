# DB設計

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|

### Associaton
- has_many :members
- has_many :users, through: :members
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|string|null: false|
|passward|string|null: false|

### Association
- has_many :masseages
- has_many :members
- has_many :groups, through: :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|integer|null: false|
|group_id|interger|null: false, foreign_key: true|
|user_id|interger|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

