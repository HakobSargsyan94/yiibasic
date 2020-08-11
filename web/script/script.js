$(document).ready(()=>{

    function checkButton () {
        let check = $('.likeButton').attr('data-type');
        if (check) {
            $('.likeButton').find('button').css('color' , '#25af36');
        } else {
            $('.likeButton').find('button').css('color' , 'grey');
        }
    }
    checkButton();
    function checkButtonCom () {
        let check = $('.buttonSetColor').attr('data-type');
        if (check) {
            $('.buttonSetColor').find('button').css('color' , '#25af36');
        } else {
            $('.buttonSetColor').find('button').css('color' , 'grey');
        }
    }
    checkButtonCom();


    $('body').on('click','.likeButton', function() {
        let id = $('.headNews').attr('data-id');
        $.ajax({
            url: 'index.php?r=site/detailnews&id='+id,
            method: 'post',
            dataType: 'JSON',
            data: {data: id},
            success: function (response) {
                if (response.response == true) {
                    $('.buttonSetColor').css('color','#25af36');
                    let countLikes = Number($('.likesCount')[0].innerText) + 1;
                    $('.likesCount').html(countLikes);
                } else {
                    $('.buttonSetColor').css('color','#808080');
                    let countLikes = Number($('.likesCount')[0].innerText) - 1;
                    $('.likesCount').html(countLikes);
                }
            },
            error: function () {
            }
        });
    });

    $('body').on('click','.likeButtonComment', function() {
        let self = $(this);
        let comId = $(this).closest('.commentsPlace').attr('data-commentId');
        $.ajax({
            url: 'index.php?r=site/comment-likes',
            method: 'post',
            dataType: 'JSON',
            data: {commentId : comId},
            success: function (response) {
                if (response) {
                    self.css('color','#25af36');
                    let countLikes = Number(self.closest('.commentsPlace').find('.countLikesComment')[0].innerText) + 1;
                    self.closest('.commentsPlace').find($('.countLikesComment')).html(countLikes);
                } else {
                    self.css('color','#d2d2d2');
                    let countLikes = Number(self.closest('.commentsPlace').find('.countLikesComment')[0].innerText) - 1;
                    self.closest('.commentsPlace').find($('.countLikesComment')).html(countLikes);
                }
            },
            error: function () {

            }
        });
    });

    $('body').on('click', '.sendComment', function () {
        let imgHTML = [];
        let form = document.getElementById('comment-form');
        var form_data = new FormData(form);
        let name = $('.logout')[0].innerText;
        let genName = name.slice(8,-1);
        let id = $('.headNews').attr('data-id');
        let comId = $('.replyValue').val();
        let res = $('#comment-form').find('.field-comments-comment').find('textarea').val();
        if(res == '') {
            return false;
        }
        $.ajax({
            url: 'index.php?r=site%2Fadd-comment&id='+id+'&comId='+comId,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function (response){
                $.each( response, function( key, value ) {
                    for (let i =0 ; i < value.length; i++) {
                        let checkFile = value[i].slice(20,-1);
                        if (checkFile == '.xls' || checkFile == '.xlsx') {
                            imgHTML += `<div><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
\t width='15' height='15' viewBox='0 0 548.291 548.291' style='enable-background:new 0 0 548.291 548.291;'
\t xml:space='preserve'>
<g>
\t<path d='M486.206,196.121H473.04v-63.525c0-0.396-0.062-0.795-0.109-1.2c-0.021-2.52-0.829-4.997-2.556-6.96L364.657,3.677
\t\tc-0.033-0.031-0.064-0.042-0.085-0.075c-0.63-0.704-1.364-1.29-2.143-1.796c-0.229-0.154-0.461-0.283-0.702-0.419
\t\tc-0.672-0.365-1.387-0.672-2.121-0.893c-0.2-0.052-0.379-0.134-0.577-0.186C358.23,0.118,357.401,0,356.562,0H96.757
\t\tC84.894,0,75.256,9.649,75.256,21.502v174.613H62.092c-16.971,0-30.732,13.756-30.732,30.733v159.812
\t\tc0,16.961,13.761,30.731,30.732,30.731h13.164V526.79c0,11.854,9.638,21.501,21.501,21.501h354.776
\t\tc11.853,0,21.501-9.647,21.501-21.501V417.392h13.166c16.966,0,30.729-13.764,30.729-30.731V226.854
\t\tC516.93,209.872,503.176,196.121,486.206,196.121z M96.757,21.502h249.054v110.006c0,5.94,4.817,10.751,10.751,10.751h94.972
\t\tv53.861H96.757V21.502z M314.576,314.661c-21.124-7.359-34.908-19.045-34.908-37.544c0-21.698,18.11-38.297,48.116-38.297
\t\tc14.331,0,24.903,3.014,32.442,6.413l-6.411,23.2c-5.091-2.446-14.146-6.037-26.598-6.037s-18.488,5.662-18.488,12.266
\t\tc0,8.115,7.171,11.696,23.58,17.921c22.446,8.305,33.013,20,33.013,37.921c0,21.323-16.415,39.435-51.318,39.435
\t\tc-14.524,0-28.861-3.769-36.031-7.737l5.843-23.77c7.738,3.958,19.627,7.927,31.885,7.927c13.218,0,20.188-5.47,20.188-13.774
\t\tC335.894,324.667,329.858,320.13,314.576,314.661z M265.917,343.9v24.157h-79.439V240.882h28.877V343.9H265.917z M94.237,368.057
\t\tH61.411l36.788-64.353l-35.473-62.827h33.021l11.125,23.21c3.774,7.736,6.606,13.954,9.628,21.135h0.367
\t\tc3.027-8.115,5.477-13.775,8.675-21.135l10.756-23.21h32.827l-35.848,62.066l37.74,65.103h-33.202l-11.515-23.022
\t\tc-4.709-8.855-7.73-15.465-11.316-22.824h-0.375c-2.645,7.359-5.845,13.969-9.811,22.824L94.237,368.057z M451.534,520.968H96.757
\t\tV417.392h354.776V520.968z M451.728,368.057l-11.512-23.022c-4.715-8.863-7.733-15.465-11.319-22.825h-0.366
\t\tc-2.646,7.36-5.858,13.962-9.827,22.825l-10.551,23.022h-32.836l36.788-64.353l-35.471-62.827h33.02l11.139,23.21
\t\tc3.77,7.736,6.593,13.954,9.618,21.135h0.377c3.013-8.115,5.459-13.775,8.671-21.135l10.752-23.21h32.835l-35.849,62.066
\t\tl37.733,65.103h-33.202V368.057z'/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></div>${value[i]}`;
                        } else if (checkFile == '.doc' || checkFile == '.docx') {
                            imgHTML += `<div><svg version='1.1'  id='Capa_1'  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
                                         width='15' height='15' viewBox='0 0 548.29 548.291' style='enable-background:new 0 0 548.29 548.291;'
                                         xml:space='preserve'>
                                    <g>
                                        <path d='M486.2,196.124h-13.164V132.59c0-0.396-0.064-0.795-0.116-1.196c-0.021-2.523-0.824-5-2.551-6.963L364.656,3.677
                                            c-0.031-0.031-0.064-0.042-0.085-0.075c-0.629-0.704-1.364-1.29-2.141-1.796c-0.231-0.154-0.462-0.283-0.704-0.418
                                            c-0.672-0.366-1.386-0.671-2.121-0.892c-0.199-0.055-0.377-0.134-0.576-0.188C358.229,0.118,357.4,0,356.562,0H96.757
                                            C84.893,0,75.256,9.649,75.256,21.502v174.616H62.093c-16.972,0-30.733,13.753-30.733,30.73v159.812
                                            c0,16.961,13.761,30.731,30.733,30.731h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777
                                            c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.966,0,30.729-13.764,30.729-30.731V226.854
                                            C516.93,209.872,503.166,196.124,486.2,196.124z M96.757,21.502h249.053v110.006c0,5.943,4.818,10.751,10.751,10.751h94.973v53.864
                                            H96.757V21.502z M354.739,298.02c0,48.877-29.634,78.505-73.208,78.505c-44.229,0-70.106-33.392-70.106-75.849
                                            c0-44.677,28.528-78.069,72.537-78.069C329.736,222.607,354.739,256.88,354.739,298.02z M64.345,373.432V227.037
                                            c12.384-1.995,28.525-3.102,45.562-3.102c28.305,0,46.657,5.089,61.033,15.921c15.48,11.503,25.216,29.861,25.216,56.174
                                            c0,28.53-10.392,48.21-24.764,60.373c-15.704,13.05-39.591,19.238-68.786,19.238C85.125,375.642,72.746,374.536,64.345,373.432z
                                             M451.534,520.962H96.757v-103.57h354.777V520.962z M453.16,348.447c10.174,0,21.455-2.223,28.085-4.867l5.093,26.315
                                            c-6.196,3.108-20.127,6.409-38.258,6.409c-51.528,0-78.069-32.063-78.069-74.526c0-50.853,36.267-79.171,81.375-79.171
                                            c17.47,0,30.751,3.538,36.726,6.638l-6.861,26.754c-6.851-2.872-16.362-5.531-28.309-5.531c-26.758,0-47.55,16.147-47.55,49.316
                                            C405.387,329.642,423.082,348.447,453.16,348.447z'/>
                                        <path d='M160.322,297.137c0.221-30.968-17.917-47.331-46.88-47.331c-7.52,0-12.396,0.661-15.265,1.329v97.532
                                            c2.868,0.665,7.52,0.665,11.724,0.665C140.417,349.548,160.322,332.739,160.322,297.137z'/>
                                        <path d='M247.032,300.004c0,29.202,13.714,49.765,36.269,49.765c22.782,0,35.827-21.68,35.827-50.646
                                            c0-26.768-12.824-49.758-36.048-49.758C260.311,249.371,247.032,271.043,247.032,300.004z'/>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    </svg></div>${value[i]}`;
                        } else if (checkFile == '.rar') {
                            imgHTML += `<div><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
\t width='15' height='15' viewBox='0 0 548.291 548.291' style='enable-background:new 0 0 548.291 548.291;'
\t xml:space='preserve'>
<g>
\t<path d='M270.082,281.054c-2.871-9.531-5.725-21.441-8.105-30.969h-0.48c-2.375,9.528-4.756,21.675-7.38,30.969l-9.525,34.053
\t\th35.498L270.082,281.054z'/>
\t<path d='M486.201,196.121h-13.166v-63.525c0-0.396-0.062-0.795-0.115-1.196c-0.021-2.523-0.825-5-2.552-6.964L364.657,3.677
\t\tc-0.033-0.031-0.064-0.042-0.085-0.075c-0.63-0.704-1.364-1.29-2.143-1.796c-0.229-0.154-0.461-0.283-0.702-0.418
\t\tc-0.672-0.366-1.387-0.671-2.121-0.892c-0.2-0.055-0.379-0.136-0.577-0.188C358.23,0.118,357.401,0,356.562,0H96.757
\t\tC84.894,0,75.256,9.649,75.256,21.502v174.613H62.092c-16.971,0-30.732,13.756-30.732,30.733v159.812
\t\tc0,16.968,13.761,30.731,30.732,30.731h13.164V526.79c0,11.854,9.638,21.501,21.501,21.501h354.776
\t\tc11.853,0,21.501-9.647,21.501-21.501V417.392h13.166c16.966,0,30.729-13.764,30.729-30.731V226.854
\t\tC516.93,209.877,503.167,196.121,486.201,196.121z M96.757,21.507h249.054v110.01c0,5.939,4.817,10.75,10.751,10.75h94.972v53.861
\t\tH96.757V21.507z M336.771,383.469h-39.076l-12.379-41.208h-45.977l-11.428,41.208h-37.633l49.061-160.544h47.636L336.771,383.469z
\t\t M94.511,320.351v63.118H58.544V225.074c11.67-1.913,29.063-3.338,48.353-3.338c23.821,0,40.501,3.57,51.929,12.623
\t\tc9.52,7.617,14.771,18.819,14.771,33.586c0,20.485-14.527,34.538-28.344,39.542v0.717c11.198,4.526,17.384,15.235,21.434,30.013
\t\tc5.003,18.1,9.998,39.06,13.105,45.254h-37.155c-2.625-4.529-6.441-17.615-11.197-37.396
\t\tc-4.289-20.007-11.192-25.492-25.964-25.723H94.511z M451.534,520.968H96.757V417.392h354.776V520.968z M442.315,383.469
\t\tc-2.625-4.529-6.436-17.615-11.202-37.396c-4.278-20.007-11.196-25.492-25.952-25.723H394.2v63.118h-35.97V225.074
\t\tc11.675-1.913,29.051-3.338,48.347-3.338c23.828,0,40.495,3.57,51.933,12.623c9.528,7.617,14.777,18.819,14.777,33.586
\t\tc0,20.485-14.541,34.538-28.356,39.542v0.717c11.201,4.526,17.396,15.235,21.438,30.013c5.009,18.1,10.006,39.06,13.109,45.254
\t\tH442.315z'/>
\t<path d='M137.626,271.046c0-14.771-10.002-22.153-26.677-22.4c-8.816,0-13.814,0.714-16.444,1.192v44.297h14.294
\t\tC126.913,294.146,137.626,285.095,137.626,271.046z'/>
\t<path d='M410.64,248.651c-8.824,0-13.815,0.714-16.446,1.192v44.303h14.294c18.09,0,28.82-9.051,28.82-23.1
\t\tC437.308,256.274,427.313,248.893,410.64,248.651z'/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></div>${value[i]}`;
                        }else if (checkFile == '.pdf') {
                            imgHTML += `<div><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
\t width='15' height='15' viewBox='0 0 550.801 550.801' style='enable-background:new 0 0 550.801 550.801;'
\t xml:space='preserve'>
<g>
\t<path d='M280.821,252.316c-7.414,0-12.44,0.712-15.077,1.426v47.625c3.117,0.717,6.945,0.959,12.206,0.959
\t\tc19.388,0,31.348-9.813,31.348-26.324C309.298,261.167,299.01,252.316,280.821,252.316z'/>
\t<path d='170.245,276.002c0-14.835-10.28-23.686-28.468-23.686c-7.412,0-12.44,0.712-15.077,1.426v47.625
\t\tc3.116,0.717,6.95,0.959,12.205,0.959C158.291,302.326,170.245,292.513,170.245,276.002z'/>
\t<path d='M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694
\t\tc-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419
\t\tc-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2
\t\tc-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545
\t\tc0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601
\t\tV419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605
\t\th250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M345.432,275.044c0,15.796-5.263,29.191-14.829,38.283
\t\tc-12.456,11.718-30.881,16.991-52.421,16.991c-4.78,0-9.088-0.248-12.437-0.718v57.671h-36.136V228.14
\t\tc11.248-1.911,27.05-3.354,49.302-3.354c22.488,0,38.524,4.311,49.288,12.928C338.492,245.854,345.432,259.25,345.432,275.044z
\t\t M90.563,387.271V228.14c11.249-1.911,27.05-3.354,49.302-3.354c22.491,0,38.525,4.311,49.288,12.928
\t\tc10.296,8.14,17.231,21.537,17.231,37.331c0,15.796-5.26,29.191-14.829,38.283c-12.454,11.723-30.879,16.991-52.418,16.991
\t\tc-4.781,0-9.089-0.248-12.443-0.718v57.671H90.563z M453.601,523.353H97.2V419.302h356.4V523.353z M480.41,256.619h-44.033v130.652
\t\tH399.77V256.619h-43.316v-30.628H480.41V256.619z'/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></div>${value[i]}`;
                        }else if (checkFile == '.ppt') {
                            imgHTML += `<div><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
\t width='550.801px' height='550.801px' viewBox='0 0 550.801 550.801' style='enable-background:new 0 0 550.801 550.801;'
\t xml:space='preserve'>
<g>
\t<path d='M280.821,252.316c-7.414,0-12.44,0.712-15.077,1.426v47.625c3.117,0.717,6.945,0.959,12.206,0.959
\t\tc19.388,0,31.348-9.813,31.348-26.324C309.298,261.167,299.01,252.316,280.821,252.316z'/>
\t<path d='M170.245,276.002c0-14.835-10.28-23.686-28.468-23.686c-7.412,0-12.44,0.712-15.077,1.426v47.625
\t\tc3.116,0.717,6.95,0.959,12.205,0.959C158.291,302.326,170.245,292.513,170.245,276.002z'/>
\t<path d='M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694
\t\tc-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419
\t\tc-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2
\t\tc-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545
\t\tc0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601
\t\tV419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605
\t\th250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M345.432,275.044c0,15.796-5.263,29.191-14.829,38.283
\t\tc-12.456,11.718-30.881,16.991-52.421,16.991c-4.78,0-9.088-0.248-12.437-0.718v57.671h-36.136V228.14
\t\tc11.248-1.911,27.05-3.354,49.302-3.354c22.488,0,38.524,4.311,49.288,12.928C338.492,245.854,345.432,259.25,345.432,275.044z
\t\t M90.563,387.271V228.14c11.249-1.911,27.05-3.354,49.302-3.354c22.491,0,38.525,4.311,49.288,12.928
\t\tc10.296,8.14,17.231,21.537,17.231,37.331c0,15.796-5.26,29.191-14.829,38.283c-12.454,11.723-30.879,16.991-52.418,16.991
\t\tc-4.781,0-9.089-0.248-12.443-0.718v57.671H90.563z M453.601,523.353H97.2V419.302h356.4V523.353z M480.41,256.619h-44.033v130.652
\t\tH399.77V256.619h-43.316v-30.628H480.41V256.619z'/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></div>${value[i]}`;
                        }else {
                            imgHTML += `<img src='/uploads/${value[i]}' style="margin-right: 5px" alt='asd' width='70' height='70'>`;
                        }
                    }
                });
                let htm = `<div class='commentsPlace' style='margin-bottom: 15px;font-size: 16px;background-color: #ffffff;padding:5px;border-radius: 5px'>
                                <div class="commentUserName">${genName}</div>
                                <div class="greyPlaceComment">
                                <div>${res}</div>
                                ${imgHTML}
                                </div>
                          </div>`;

                $('.commentAppend').append(htm);
                $('.field-comments-comment').find('textarea').val(' ');
            },
            error: function () {

            }
        });
    });



    let checkOpenClose = true;
    $('body').on('click','.arrowForEditDeleteComment' , function () {
        $('.editDeleteComment').css('display','none');
        if (checkOpenClose) {
            console.log(1);
            $(this).closest('.popupNearComment').find('.editDeleteComment').css('display','block');
            checkOpenClose = false;
        } else {
            console.log(2);
            $(this).closest('.popupNearComment').find('.editDeleteComment').hide();
            checkOpenClose = true;
        }
    });
    $('body').on('click' , '.editComment' , function () {
        let commentId = $(this).closest('.commentsPlace').attr('data-commentid');
        $(this).closest('.commentsPlace ').find('.editCommentText').show();
        $(this).closest('.commentsPlace').find('.textComment').find('span').css('display' , 'none');
    });





    $('body').on('click','.deleteComment', function() {
        let self = $(this);
        let comId = $(this).closest('.commentsPlace').attr('data-commentId');
        console.log(comId);
        $.ajax({
            url: 'index.php?r=site/deletecomment&id='+comId,
            method: 'post',
            dataType: 'JSON',
            data: {commentId : comId},
            success: function (response) {
                if (response) {
                    self.closest('.commentsPlace').hide();
                } else {
                    alert('Try again :( ');
                }
            },
            error: function () {

            }
        });
    });

    $('body').on('click', '.cancelButtonForEdit' ,function () {
        $(this).closest('.editCommentText').hide();
        $(this).closest('.commentsPlace').find('.editDeleteComment').css('display' , 'none');
    });

    $('body').on('click','.saveButtonForEdit', function() {
        let self = $(this);
        let comId = $(this).closest('.commentsPlace').attr('data-commentId');
        let comVal = $(this).closest('.commentsPlace').find('.commentText').val();
        $.ajax({
            url: 'index.php?r=site/updatecomment&id='+comId,
            method: 'get',
            dataType: 'JSON',
            data: {newVal : comVal},
            success: function (response) {
                if (response) {
                    self.closest('.commentsPlace').find('.textComment').html(comVal);
                    self.closest('.commentsPlace').find('.editCommentText').hide();
                    self.closest('.commentsPlace').find('.changedComment').html(`<span style="display: inline-block; color: #ff9c9c; font-size: 12px; margin-left: 12px;">Changed!</span> `);
                    self.closest('.commentsPlace').find('.textComment').css('display' , 'block');
                    self.closest('.commentsPlace').find('.editDeleteComment').css('display' , 'none');

                } else {
                    alert('Try again :( ');
                }
            },
            error: function () {

            }
        });
    });

    $('body').on('click','.replyButton', function() {
        $('html').animate({ scrollTop: 15000}, 300);
        let self = $(this);

        let comId = $(this).closest('.commentsPlace').attr('data-commentId');
        let user_name = self.closest('.commentsPlace').find('.commentUserName')[0].innerText;
        $('.userNameReply').html(user_name);
        $('.replyValue').val(comId);

    });

    function delComments () {
        $('.forRemove').remove();
    }
    delComments();

    /*$('.sendComment').on('click', function() {
        var file_data = $('#comment-form').prop('Upload')[0];
        var form_data = new FormData();
        form_data.append('Upload', file_data);
        alert(form_data);
        $.ajax({
            url: 'upload.php', // point to server-side PHP script
            dataType: 'text',  // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(php_script_response){
                alert(php_script_response); // display response from the PHP script, if any
            }
        });
    });*/
    /*$('body').on('click', '.sendComment', function (e) {
        e.preventDefault();
        $.ajax({
            url: "index.php?r=site%2Fadd-comment&id='+id",
            type: "POST",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            beforeSend : function()
            {
                //$("#preview").fadeOut();
                $("#err").fadeOut();
            },
            success: function(data)
            {
                if(data=='invalid')
                {
                    // invalid file format.
                    $("#err").html("Invalid File !").fadeIn();
                }
                else
                {
                    // view uploaded file.
                    $("#preview").html(data).fadeIn();
                    $("#form")[0].reset();
                }
            },
            error: function(e)
            {
                $("#err").html(e).fadeIn();
            }
        });
    });*/

    $('textarea').emojiPicker();
    $('#input-default').emojiPicker();

    $('#input-custom-size').emojiPicker({
        width: '300px',
        height: '200px'
    });

    $('#input-left-position').emojiPicker({
        position: 'left'
    });

    $('#create').click(function(e) {
        e.preventDefault();
        $('#text-custom-trigger').emojiPicker({
            width: '300px',
            height: '200px',
            button: false
        });
    });

    $('#toggle').click(function(e) {
        e.preventDefault();
        $('#text-custom-trigger').emojiPicker('toggle');
    });

    $('#destroy').click(function(e) {
        e.preventDefault();
        $('#text-custom-trigger').emojiPicker('destroy');
    })

    // keyup event is fired
    $(".emojiable-question, .emojiable-option").on("keyup", function () {
        //console.log("emoji added, input val() is: " + $(this).val());
    });
});