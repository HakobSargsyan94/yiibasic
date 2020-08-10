<?php

namespace app\models;

use app\models\User;
use app\models\CommentUpload;
use Yii;

/**
 * This is the model class for table "comments".
 *
 * @property int $id
 * @property int|null $user_id
 * @property int|null $task_id
 * @property string|null $comment
 * @property int|null $like
 */
class Comments extends \yii\db\ActiveRecord
{
    public $img;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'comments';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'task_id', 'like', 'reply'], 'integer'],
            [['comment'], 'string'],
            [['img', 'comment'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'task_id' => 'Task ID',
            'comment' => 'Comment',
            'like' => 'Like',
            'reply' => 'Reply',
        ];
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser () {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getImage () {
        return $this->hasMany(CommentUpload::className(), ['comment_id' => 'id']);
    }

    public function getLikes () {
        return $this->hasOne(Comlikes::className(), ['com_id' => 'id', ])->where(['user_id' => $_SESSION['__id'] ]);
    }
}
