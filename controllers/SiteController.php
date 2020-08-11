<?php
namespace app\controllers;

use app\models\EntryForm;
use app\models\Words;
use app\models\User;
use app\models\Comlikes;
use app\models\Comment;
use app\models\Comments;
use app\models\CommentUpload;
use app\models\Likes;
use app\models\Posts;
use app\models\ResendVerificationEmailForm;
use app\models\VerifyEmailForm;
use Yii;
use yii\base\InvalidArgumentException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\models\LoginForm;
use app\models\PasswordResetRequestForm;
use app\models\ResetPasswordForm;
use app\models\SignupForm;
use app\models\ContactForm;
use yii\web\UploadedFile;

/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'signup'],
                'rules' => [
                    [
                        'actions' => ['signup'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
//        $mostpopular = Posts::find()->orderBy(['like' => SORT_DESC])->limit(6)->where(['position' => 1])->all();
        $model = new Posts();
        $posts = $model->getPosts();
        return $this->render('index',['posts' => $posts ]);
    }

    /**
     * Logs in a user.
     *
     * @return mixed
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            $model->password = '';
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Thank you for contacting us. We will respond to you as soon as possible.');
            } else {
                Yii::$app->session->setFlash('error', 'There was an error sending your message.');
            }
            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Displays about page.
     *
     * @return mixed
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    /**
     * Signs user up.
     *
     * @return mixed
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post()) && $model->signup()) {
            Yii::$app->session->setFlash('success', 'Thank you for registration. Please check your inbox for verification email.');
            return $this->goHome();
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {
        $model = new PasswordResetRequestForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');

                return $this->goHome();
            } else {
                Yii::$app->session->setFlash('error', 'Sorry, we are unable to reset password for the provided email address.');
            }
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    /**
     * Resets password.
     *
     * @param string $token
     * @return mixed
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidArgumentException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'New password saved.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    /**
     * Verify email address
     *
     * @param string $token
     * @throws BadRequestHttpException
     * @return yii\web\Response
     */
    public function actionVerifyEmail($token)
    {
        try {
            $model = new VerifyEmailForm($token);
        } catch (InvalidArgumentException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
        if ($user = $model->verifyEmail()) {
            if (Yii::$app->user->login($user)) {
                Yii::$app->session->setFlash('success', 'Your email has been confirmed!');
                return $this->goHome();
            }
        }

        Yii::$app->session->setFlash('error', 'Sorry, we are unable to verify your account with provided token.');
        return $this->goHome();
    }

    /**
     * Resend verification email
     *
     * @return mixed
     */
    public function actionResendVerificationEmail()
    {
        $model = new ResendVerificationEmailForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');
                return $this->goHome();
            }
            Yii::$app->session->setFlash('error', 'Sorry, we are unable to resend verification email for the provided email address.');
        }

        return $this->render('resendVerificationEmail', [
            'model' => $model
        ]);
    }

    public function actionSay($message = 'Привет')
    {
        return $this->render('say', ['message' => $message]);
    }

    public function actionEntry()
    {
        $model = new EntryForm();

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            // данные в $model удачно проверены
            // делаем что-то полезное с $model ...
            return $this->render('entry-confirm', ['model' => $model]);
        } else {
            // либо страница отображается первый раз, либо есть ошибка в данных
            return $this->render('entry', ['model' => $model]);
        }
    }


    public function actionPolitics($message = 'Քաղաքականություն')
    {
        $postFind = Posts::find()->where(['category_id'=> 1, 'position' => 1])->all();
        return $this->render('politics', ['message' => $postFind]);
    }


    public function actionEconomy($message = 'Տնտեսություն')
    {
        $postFind = Posts::find()->where(['category_id'=> 2, 'position' => 1])->all();
        return $this->render('economy', ['message' => $postFind]);
    }


    public function actionSociety($message = 'Հասարակություն')
    {
        $postFind = Posts::find()->where(['category_id'=> 3, 'position' => 1])->all();
        return $this->render('society', ['message' => $postFind]);
    }


    public function actionBiznes($message = 'Շոու Բիզնես')
    {
        $postFind = Posts::find()->where(['category_id'=> 4, 'position' => 1])->all();
        return $this->render('biznes', ['message' => $postFind]);
    }


    public function actionThoughts($message = 'Մտքեր')
    {
        $postFind = Posts::find()->where(['category_id'=> 5, 'position' => 1])->all();
        return $this->render('thoughts', ['message' => $postFind]);
    }

    public function actionDetailnews($id=null)
    {

        $check = Likes::find()->where(['user_id' => $_SESSION['__id'] , 'task_id' => $id] )->all();
        $model = new Comments();
        $comments = Comments::find()->where(['task_id' =>$id])->orderBy(['id' => SORT_ASC])->all();

//        $user = User::findOne(2);
        if ($model->load(Yii::$app->request->post()) && $model->validate() ) {
            $model->save();
        }
        if(Yii::$app->request->post('data') && Yii::$app->request->isAjax){
            $check = Likes::find()->all();
            if (!is_null($_SESSION['__id']) && !is_null(Yii::$app->request->post('data'))  ) {
                $model = new Likes();
                $model->user_id = $_SESSION['__id'];
                $model->task_id = Yii::$app->request->post('data');
                if ($model->save()) {
                    $data = Yii::$app->request->post('data');
                    $post = new Posts();
                    $post->getPosts($_SESSION['__id'],$data);
                    $like = Posts::find()->where(['id' => $data])->one();
                    $like->like = $like->like +1;
                    $response = $like->save();
                    echo json_encode(['response'=> $response]);exit;
                } else {
                    $data = Yii::$app->request->post('data');
                    $likes = Likes::find()->where(['user_id' => $_SESSION['__id'], 'task_id' => Yii::$app->request->post('data')] )->one();
                    $likes->delete();
                    $like = Posts::find()->where(['id' => $data])->one();
                    $like->like = $like->like -1;
                    $like->save();
                    echo json_encode(['response'=> $response]);exit;
                }
            }

        }
        $postFind = Posts::find()->where(['id'=> $id,'status'=>1])->one();
        return $this->render('detailnews', ['res' => $postFind, 'model' => $model, 'comments' => $comments,'check' => $check,]);
    }



    public function actionCommentLikes()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        if ( Yii::$app->request->post()) {
            $comId = $_POST['commentId'];
            $us_id = Yii::$app->user->id;
            $likeComment = new Comlikes();
            $likeComment->user_id = $us_id;
            $likeComment->com_id = $comId;
            $likes = Comlikes::find()->where(['user_id' => $us_id, 'com_id' => $comId] )->one();
            if (!$likes) {
                $likeComment->save();
                $like = Comments::find()->where(['id' => $comId])->one();
                $like->like = $like->like +1;
                $like->save();
                return true;
            } else {
                $likes->delete();
                $like = Comments::find()->where(['id' => $comId])->one();
                $like->like = $like->like-1;
                $like->save();
                return false;
            }
        }

    }



    public function actionAddComment ($id=null,$comId=null) {

        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
       /* $commentWords = $_POST['Comments']['comment'];
        $comment = explode(' ',$commentWords);
        $word = Words::find()->all();
       foreach ($word as $words) {
           for ($i = 0 ; $i < count($comment); $i++ ) {
               if (strtolower($comment[$i]) == strtolower($words['word'])) {
                   return false;
               }
           }
       }*/

        if(Yii::$app->request->isAjax) {
            $comment = new Comments();

            $post = Yii::$app->request->post('Comments');
            $comment->comment = $post['comment'];
            $comment->user_id = $post['user_id'];
            $comment->task_id = $post['task_id'];
            $comment->reply = $comId;
            if($comment->save()) {


                if (!is_dir('uploads')) {
                    mkdir('uploads', 0777, true);
                }
                $dir = 'uploads';
                $img = [];

                foreach ($_FILES['Comments']['name']['img'] as $key => $val) {
                    $ext = pathinfo($val, PATHINFO_EXTENSION);
                    $name = microtime() . '.' . $ext;
                    $name = str_replace(' ', '', $name);
                    $uploadfile = $dir . '/' . $name;
                    if (move_uploaded_file($_FILES['Comments']['tmp_name']['img'][$key], $uploadfile)) {
                        $commentUpload = new CommentUpload();
                        $commentUpload->file_name = $name;
                        $commentUpload->comment_id = $comment->id;
                        $commentUpload->save();
                        $img[]  = $name;
                    }

                }
                return ['response' => $img];

            }
        }
    }

    public function actionDeletecomment ($id=null) {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        if(Yii::$app->request->get()) {
                $comments = Comments::find()->where(['id' => $id])->one();
                $comments->status = 1;
                $response = $comments->update();
            echo json_encode(['response'=> $response]);exit;
        } else {
            echo json_encode(['response'=> 'try again']);exit;
        }
    }
    public function actionUpdatecomment ($id=null) {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $res = Yii::$app->request->get();
        if($res) {
            $comments = Comments::find()->where(['id' => $id])->one();
            $comments->status = 2;
            $comments->comment = $res['newVal'];
            $response = $comments->update();
            echo json_encode(['response'=> $response]);exit;
        } else {
            echo json_encode(['response'=> 'Try again']);exit;
        }
    }


    public function actionAddLike () {
        $model = new Comments();
        if ($model->load(Yii::$app->request->post()) && $model->validate() ) {
            $model->save(false);
        }

    }
}
