define(['jquery', 'bootstrap'], function ($) {
    $(document).ready(function () {
        console.log("chargement JS ajax-course.js OK");
 

        // Affiche dans la modal le modèle pour récupérer un exercice custom
        $('body').on('click', '.shower_this_course' , function (event) {

            let course_id = $(this).attr("data-course_id");
            let csrf_token = $("input[name='csrfmiddlewaretoken']").val();

            $.ajax(
                {
                    type: "POST",
                    dataType: "json",
                    data: {
                        'course_id': course_id,
                        csrfmiddlewaretoken: csrf_token
                    },
                    url: "../parcours_shower_course",
                    success: function (data) {

                        $('#get_course_title').html(data.title);
                        $('#get_course_body').html(data.html);
                    }
                }
            )
         });






        // Affiche dans la modal le modèle pour récupérer un exercice custom
        $('body').on('click', '.getter_course', function (event) {

            let course_id = $(this).attr("data-course_id");
            let csrf_token = $("input[name='csrfmiddlewaretoken']").val();
            let parcours_id = $(this).attr("data-parcours_id");
            let checkbox_value = "";
            let all_parcours = $(this).attr("data-all_parcours"); 

            $.ajax(
                {
                    type: "POST",
                    dataType: "json",
                    data: {
                        'course_id': course_id,
                        'parcours_id': parcours_id,
                        csrfmiddlewaretoken: csrf_token
                    },
                    url: "../parcours_get_course",
                    success: function (data) {

                        $('#get_course_result').html(data.html);

                    }
                }
            )
         });






        // Affiche dans la modal le modèle pour récupérer un exercice custom
        $('#get_course_result').on('click', ".clone_to" ,  function (event) {

            let course_id = $(this).attr("data-course_id");
            let csrf_token = $("input[name='csrfmiddlewaretoken']").val();
            var checkbox_value = "";
            let all_parcours = $(this).attr("data-all_parcours");
            let parcours_id = $(this).attr("data-parcours_id");


                $(":checkbox").each(function () {
                    var ischecked = $(this).is(":checked");
                    if (ischecked) {
                        checkbox_value += $(this).val() + "-";
                    }
                });
                

                if (checkbox_value == "") { alert('Vous devez sélectionner au moins un parcours.') ;   return false ;} 

                $.ajax(
                    {
                        type: "POST",
                        dataType: "json",
                        data: {
                            'course_id': course_id,
                            'parcours_id': parcours_id,
                            csrfmiddlewaretoken: csrf_token,
                            'checkbox_value' : checkbox_value,
                            'all_parcours' : all_parcours,
                        },
                        url: "../parcours_clone_course",
                        success: function (data) {

                            $('#title_parcours'+parcours_id).html(data.success);
                        }
                    }
                )
         });






        // Affiche dans la modal la liste des élèves du groupe sélectionné
        $('#id_level').on('change', function (event) {
            let id_level = $(this).val();
            let id_subject = $("#id_subject").val();
            let csrf_token = $("input[name='csrfmiddlewaretoken']").val();
            $("#loading").html("<i class='fa fa-spinner fa-pulse fa-fw'></i>");
            $("#loading").show(); 

            if (id_level > 0)
            {
                $.ajax(
                    {
                        type: "POST",
                        dataType: "json",
                        traditional: true,
                        data: {
                            'id_level': id_level,
                            'id_subject': id_subject,                        
                            csrfmiddlewaretoken: csrf_token
                        },
                        url : "../ajax/chargethemes",
                        success: function (data) {

                            themes = data["themes"]
                            $('select[name=theme]').empty("");
                            if (themes.length >0)

                            { for (let i = 0; i < themes.length; i++) {
                                        

                                        console.log(themes[i]);
                                        let themes_id = themes[i][0];
                                        let themes_name =  themes[i][1]  ;
                                        let option = $("<option>", {
                                            'value': Number(themes_id),
                                            'html': themes_name
                                        });
                                        $('select[name=theme]').append(option);
                                    }
                            }
                            else
                            {
                                        let option = $("<option>", {
                                            'value': 0,
                                            'html': "Aucun contenu disponible"
                                        });
                                $('select[name=theme]').append(option);
                            }

                            $("#loading").html("").hide(500); 
                        }
                    }
                )                
            }

        });
 



 
        $('select[name=theme]').on('change', function (event) {

            if (  $('select[name=level]').val() > 0 )
            {
                ajax_choice($('select[name=level]'),$('select[name=theme]'),$('select[name=subject]')) ;            
            }
            else 
            {   
                alert("Vous devez choisir un niveau."); return false;             
            }

        }); 


        $('select[name=level]').on('change', function (event) {

                ajax_choice($('select[name=level]'),$('select[name=theme]'),$('select[name=subject]')) ;            
        });






        function ajax_choice(param0, param1, param2){

            if ( param0.val() > 0 ) {var level_id = param0.val() ; console.log(level_id) ;  } else {var level_id = 0 ; console.log(level_id) ; }  
            if ( param1.val() > 0  ) {var theme_id = param1.val() ; console.log(theme_id) ; } else {var theme_id = [] ; console.log(theme_id) ; }  
            if ( param2.val() > 0  ) {var subject_id = param2.val() ; console.log(subject_id) ; } else {var subject_id = [] ; console.log(subject_id) ; } 

            let parcours_id = $("#parcours_id").val();
            let keywords = $("#keywords").val();
            let csrf_token = $("input[name='csrfmiddlewaretoken']").val();
 
            $("#loader").html("<i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i>");
            
 

            $.ajax(
                    {
                    type: "POST",
                    dataType: "json",
                    traditional: true,
                    data: {
                        'level_id': level_id,
                        'subject_id': subject_id,

                        'parcours_id': parcours_id,
                        'theme_id': theme_id,
                        'keywords': keywords,
                        csrfmiddlewaretoken: csrf_token
                    },
                    url:"../ajax_course_custom_show_shared",
                    success: function (data) {
 
                        $('#courses_details').html("").html(data.html);
                        $("#loader").html("").hide(); 
                        
                        }
                    }
                )

            }



 
        $('#keywords').on('keyup', function (event) {

            ajax_choice($('select[name=level]'),$('select[name=theme]'),$('select[name=subject]')) ;  

        }); 







    });

});

