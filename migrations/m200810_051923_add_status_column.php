<?php

use yii\db\Migration;

/**
 * Class m200810_051923_add_status_column
 */
class m200810_051923_add_status_column extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('comments', 'status', $this->integer()->defaultValue(0));
        $this->addColumn('comments', 'reply', $this->integer()->defaultValue(0));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m200810_051923_add_status_column cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m200810_051923_add_status_column cannot be reverted.\n";

        return false;
    }
    */
}
