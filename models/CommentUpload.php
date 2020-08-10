<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "comment_upload".
 *
 * @property int $comment_id
 * @property string $file_name
 */
class CommentUpload extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'comment_upload';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['comment_id', 'file_name'], 'required'],
            [['comment_id'], 'integer'],
            [['file_name'], 'string', 'max' => 255],
            [['comment_id', 'file_name'], 'unique', 'targetAttribute' => ['comment_id', 'file_name']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'comment_id' => 'Comment ID',
            'file_name' => 'File Name',
        ];
    }
}
