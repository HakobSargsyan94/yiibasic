<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%comment_upload}}`.
 */
class m200805_063215_create_comment_upload_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%comment_upload}}', [
            'comment_id' => $this->integer(),
            'file_name' => $this->string(),
        ]);

        $this->addPrimaryKey('comment_file_pk','{{%comment_upload}}',['comment_id', 'file_name']);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%comment_upload}}');
    }
}
