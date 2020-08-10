<?php

use yii\db\Migration;

/**
 * Class m200805_062859_create_comlikes_tables
 */
class m200805_062859_create_comlikes_tables extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%comLikes}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer(),
            'com_id' => $this->integer(),
        ]);
        $this->createIndex('unique_project_id_projectsub',
            'comLikes',
            ['user_id', 'com_id'],
            true);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m200805_062859_create_comlikes_tables cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m200805_062859_create_comlikes_tables cannot be reverted.\n";

        return false;
    }
    */
}
