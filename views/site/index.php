<?php

/* @var $this yii\web\View */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;

?>


<?php





$img = Yii::getAlias('@web'.'/images/Screenshot_2.png');
echo "<div  class=' row'>
<div class='col-sm-3'>
<img src='$img' style='position: absolute;top: 123px;left: 100px;height: 756px;' alt='asdasd'>
</div>

<div class=' col-sm-6'>
<div style=\"margin-top: 64px\">
    <h1 class=\"vernagir\">
        Բարի գալուստ Blog News.am!
    </h1>
</div>";
foreach ($posts['fivePost'] as $post) {
    $date = $post['current_date'];
    $img = $post['img'];
    $title = $post['title'];
    $id = $post['id'];
    $url = Url::to(['site/detailnews', 'id' => $id]);
    echo "

<div class='postsPlace row' style='margin-top: 15px'>
<a href='$url'>
    <div class='col-md-4'>
    <img  src='http://yiib.loc/uploads/category/$img' class='img-responsive' alt='img' >
    </div>
    <div class='col-md-5'>
    <h3 class='titlePlace'>$title</h3>
        <div class='createDate'>Post is created at : $date</div>
    </div>
    </a>
</div>




";


}
echo "<div class='container-fluid'>
<div class='row'>
<div class='col-sm-6' style='text-align: center;color: #2aabd2;'><h3>6 Ամենա հայտնի գրառումները</h3></div>
<div class='col-sm-6' style='text-align: center;color: #2aabd2;'><h3>Լրահոս</h3></div>
</div>
</div>";
$img = Yii::getAlias('@web'.'/images/Screenshot_1.png');
echo "</div>
<div class='col-sm-3'>
<img src='$img ' class='img-responsive' style='position: absolute;top: 123px;left: 100px;height: 756px;' alt='asdasd'></div>


</div>
";
echo "<div  class='row'>
<div class='col-sm-3'>

</div>";
echo "<div class='col-sm-3 scrollbar' id='style-15' style='height: 500px; overflow-y: auto'>";

/*foreach ($mostPopular as $post) {
    $date = $post['current_date'];
    $img = $post['img'];
    $title = $post['title'];
    $id = $post['id'];
    $url = Url::to(['site/detailnews', 'id' => $id]);
    echo "

<a href='$url' >
<div class='postsPlace ' >
<div class='row'>
    <div class='col-md-4'>
    <img src='http://yiib.loc/uploads/category/$img' class='img-responsive' alt='img' >
    </div>
    <div class='col-md-5'>
    <h5 class='titlePlace' style='font-size: 14px'>$title</h5>
        <div class='createDate' style='font-size: 12px'>Post is created at : $date</div>
    </div>
</div>
</div>
</a>


";


}*/
echo "</div>";
echo "<div >
<div class='col-sm-3 scrollbar' id='style-15' style='height: 500px; overflow-y: auto'>
";
/*foreach ($posts['allPosts'] as $post) {
    $date = $post['current_date'];
    $img = $post['img'];
    $title = $post['title'];
    $id = $post['id'];
    $url = Url::to(['site/detailnews', 'id' => $id]);
    echo "

<a href='$url' >
<div class='postsPlace ' >
<div class='row'>
    <div class='col-md-4'>
    <img src='http://yiib.loc/uploads/category/$img' class='img-responsive' alt='img' >
    </div>
    <div class='col-md-5'>
    <h5 class='titlePlace' style='font-size: 14px'>$title</h5>
        <div class='createDate' style='font-size: 12px'>Post is created at : $date</div>
    </div>
</div>
</div>
</a>


";


}*/
echo "
</div>

<div class='col-sm-3'>

</div>

</div>
</div>";

?>