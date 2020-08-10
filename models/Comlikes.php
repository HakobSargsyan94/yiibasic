<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "comlikes".
 *
 * @property int $id
 * @property int|null $user_id
 * @property int|null $com_id
 */
class Comlikes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'comlikes';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'com_id'], 'integer'],
            [['user_id', 'com_id'], 'unique', 'targetAttribute' => ['user_id', 'com_id']],
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
            'com_id' => 'Com ID',
        ];
    }
}
