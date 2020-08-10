<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "posts".
 *
 * @property int $id
 * @property int|null $user_id
 * @property string|null $comment
 * @property string|null $current_date
 * @property string|null $img
 * @property string|null $text
 * @property string|null $title
 * @property int|null $like
 * @property int|null $status
 */
class Posts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'posts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'like', 'status'], 'integer'],
            [['comment', 'text'], 'string'],
            [['current_date'], 'safe'],
            [['img', 'title'], 'string', 'max' => 255],
            [['img'], 'file', 'extensions' => 'png, jpg, jpeg'],
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
            'comment' => 'Comment',
            'current_date' => 'Current Date',
            'img' => 'Img',
            'text' => 'Text',
            'title' => 'Title',
            'like' => 'Like',
            'status' => 'Status',
        ];
    }
    public function getPosts($user_id=null,$post_id=null){
        $premiseType['fivePost'] = Posts::find()->orderBy(['id'=> SORT_DESC])->where(['status' => 1])->limit(4)->all();
        $premiseType['allPosts'] = Posts::find()->orderBy(['id'=> SORT_DESC])->where(['status' => 1])->all();
        return $premiseType;
    }
}
