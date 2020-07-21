$(document).ready(function () {




    // слайдер со слайдерами 



    $('.scrl').slick({
        settings: "unslick",
        responsive: [{
                breakpoint: 5024,
                settings: "unslick",
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    infinite: false,
                    prevArrow: $('.sins-left'),
                    nextArrow: $('.sins-right'),
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".scrl").on('afterChange', function (event, slick, currentSlide) {
        $("#cp").text(currentSlide + 1);
    });
    var texts = document.querySelectorAll(".scrl .idslide"),
        suball = texts.length;
    $('.num-slides').append(suball);

    


    // END слайдер со слайдерами 





    var windowsize = $(window).width();

    $(window).resize(function () {
        var windowsize = $(window).width();
    });


    if (windowsize < 992) {

        // Слайдер1 для мобильной версии
        // Слайдер1 для мобильной версии
        // Слайдер1 для мобильной версии
        // Слайдер1 для мобильной версии

        $("#gallery1").unitegallery({
            gallery_theme: "compact",
            theme_panel_position: "bottom",
            theme_hide_panel_under_width: null, //hide panel under certain browser width, if null, don't hide
            // gallery options
            gallery_width: 900, //gallery width  
            gallery_height: 320, //gallery height
            gallery_min_width: 290, //gallery minimal width when resizing
            gallery_min_height: 300, //gallery minimal height when resizing
            gallery_skin: "default", //default, alexis etc... - the global skin of the gallery. Will change all gallery items by default.
            gallery_images_preload_type: "minimal",
            gallery_autoplay: false, //true / false - begin slideshow autoplay on start
            gallery_control_thumbs_mousewheel: false, //true,false - enable / disable the mousewheel
            gallery_control_keyboard: true, //true,false - enable / disble keyboard controls
            gallery_carousel: true, //true,false - next button on last image goes to first image.
            gallery_preserve_ratio: true, //true, false - preserver ratio when on window resize
            gallery_debug_errors: true, //show error message when there is some error on the gallery area.
            gallery_background_color: "", //set custom background color. If not set it will be taken from css.

            //slider options: 
            slider_control_swipe: true, //true,false - enable swiping control
            slider_control_zoom: false, //true, false - enable zooming control
            slider_zoom_max_ratio: 6, //max zoom ratio

            slider_enable_arrows: true, //enable arrows onslider element
            slider_arrows_skin: "", //skin of the slider arrows, if empty inherit from gallery skin
            slider_arrow_left_align_hor: "right", //left, center, right - left arrow horizonal align
            slider_arrow_left_align_vert: "bottom", //top, middle, bottom - left arrow vertical align
            slider_arrow_left_offset_hor: 16, //left arrow horizontal offset
            slider_arrow_left_offset_vert: 100, //left arrow vertical offset

            slider_arrow_right_align_hor: "right", //left, center, right - right arrow horizontal algin
            slider_arrow_right_align_vert: "bottom", //top, middle, bottom - right arrow vertical align
            slider_arrow_right_offset_hor: 16, //right arrow horizontal offset 
            slider_arrow_right_offset_vert: 30, //right arrow vertical offset

            slider_progresspie_type_fill: false, //false is stroke, true is fill - the progress pie type, stroke of fill

            slider_enable_fullscreen_button: true, //true,false - enable fullscreen button onslider element
            slider_fullscreen_button_skin: "", //skin of the slider fullscreen button, if empty inherit from gallery skin
            slider_fullscreen_button_align_hor: "right", //left, center, right - fullscreen button horizonatal align
            slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
            slider_fullscreen_button_offset_hor: 10, //fullscreen button horizontal offset 
            slider_fullscreen_button_offset_vert: 20, //fullscreen button vertical offset

            slider_enable_zoom_panel: true, //true,false - enable the zoom buttons, works together with zoom control.
            slider_zoompanel_skin: "", //skin of the slider zoom panel, if empty inherit from gallery skin    
            slider_zoompanel_align_hor: "right", //left, center, right - zoom panel horizontal align
            slider_zoompanel_align_vert: "top", //top, middle, bottom - zoom panel vertical align
            slider_zoompanel_offset_hor: 12, //zoom panel horizontal offset 
            slider_zoompanel_offset_vert: 10, //zoom panel vertical offset

            slider_controls_always_on: true, //true,false - controls are always on, false - show only on mouseover
            slider_controls_appear_ontap: false, //true,false - appear controls on tap event on touch devices
            slider_enable_text_panel: false, //true,false - enable the text panel
            slider_textpanel_always_on: false, //true,false - text panel are always on, false - show only on mouseover
            //thumbs options
            thumb_width: 125, //thumb width
            thumb_height: 65, //thumb height
            thumb_fixed_size: true, //true,false - fixed/dynamic thumbnail width
            thumb_image_overlay_effect: false, //true,false - images overlay effect on normal state only

            strippanel_padding_top: 10, //space from top of the panel
            strippanel_padding_bottom: 0, //space from bottom of the panel
            strippanel_padding_left: 0, //space from left of the panel
            strippanel_padding_right: 0, //space from right of the panel

            strippanel_enable_buttons: false, //enable buttons from the sides of the panel
            strip_thumbs_align: "center", //left, center, right, top, middle, bottom - the align of the thumbs when they smaller then the strip size.
            strip_space_between_thumbs: 10, //space between thumbs
            strip_control_avia: false, //avia control - move the strip according strip moseover position
            strip_control_touch: true, //touch control - move the strip by dragging it  
        });
        // Конец Слайдер1 для мобильной версии
        // Конец Слайдер1 для мобильной версии
        // Конец Слайдер1 для мобильной версии
        // Конец Слайдер1 для мобильной версии



        // Слайдер2 для мобильной версии
        // Слайдер2 для мобильной версии
        // Слайдер2 для мобильной версии
        // Слайдер2 для мобильной версии

        $("#gallery2").unitegallery({
            gallery_theme: "compact",
            theme_panel_position: "bottom",
            theme_hide_panel_under_width: null, //hide panel under certain browser width, if null, don't hide
            // gallery options
            gallery_width: 900, //gallery width  
            gallery_height: 320, //gallery height
            gallery_min_width: 290, //gallery minimal width when resizing
            gallery_min_height: 300, //gallery minimal height when resizing
            gallery_skin: "default", //de
            gallery_images_preload_type: "minimal",
            gallery_autoplay: false, //true / false - begin slideshow autoplay on start
            gallery_control_thumbs_mousewheel: false, //true,false - enable / disable the mousewheel
            gallery_control_keyboard: true, //true,false - enable / disble keyboard controls
            gallery_carousel: true, //true,false - next button on last image goes to first image.
            gallery_preserve_ratio: true, //true, false - preserver ratio when on window resize
            gallery_debug_errors: true, //show error message when there is some error on the gallery area.
            gallery_background_color: "", //set custom background color. If not set it will be taken from css.

            //slider options: 
            slider_control_swipe: true, //true,false - enable swiping control
            slider_control_zoom: false, //true, false - enable zooming control
            slider_zoom_max_ratio: 6, //max zoom ratio

            slider_enable_arrows: true, //enable arrows onslider element
            slider_arrows_skin: "", //skin of the slider arrows, if empty inherit from gallery skin
            slider_arrow_left_align_hor: "right", //left, center, right - left arrow horizonal align
            slider_arrow_left_align_vert: "bottom", //top, middle, bottom - left arrow vertical align
            slider_arrow_left_offset_hor: 16, //left arrow horizontal offset
            slider_arrow_left_offset_vert: 100, //left arrow vertical offset

            slider_arrow_right_align_hor: "right", //left, center, right - right arrow horizontal algin
            slider_arrow_right_align_vert: "bottom", //top, middle, bottom - right arrow vertical align
            slider_arrow_right_offset_hor: 16, //right arrow horizontal offset 
            slider_arrow_right_offset_vert: 30, //right arrow vertical offset

            slider_progresspie_type_fill: false, //false is stroke, true is fill - the progress pie type, stroke of fill

            slider_enable_fullscreen_button: true, //true,false - enable fullscreen button onslider element
            slider_fullscreen_button_skin: "", //skin of the slider fullscreen button, if empty inherit from gallery skin
            slider_fullscreen_button_align_hor: "right", //left, center, right - fullscreen button horizonatal align
            slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
            slider_fullscreen_button_offset_hor: 10, //fullscreen button horizontal offset 
            slider_fullscreen_button_offset_vert: 20, //fullscreen button vertical offset

            slider_enable_zoom_panel: true, //true,false - enable the zoom buttons, works together with zoom control.
            slider_zoompanel_skin: "", //skin of the slider zoom panel, if empty inherit from gallery skin    
            slider_zoompanel_align_hor: "right", //left, center, right - zoom panel horizontal align
            slider_zoompanel_align_vert: "top", //top, middle, bottom - zoom panel vertical align
            slider_zoompanel_offset_hor: 12, //zoom panel horizontal offset 
            slider_zoompanel_offset_vert: 10, //zoom panel vertical offset

            slider_controls_always_on: true, //true,false - controls are always on, false - show only on mouseover
            slider_controls_appear_ontap: false, //true,false - appear controls on tap event on touch devices
            slider_enable_text_panel: false, //true,false - enable the text panel
            slider_textpanel_always_on: false, //true,false - text panel are always on, false - show only on mouseover
            //thumbs options
            thumb_width: 110, //thumb width
            thumb_height: 55, //thumb height
            thumb_fixed_size: true, //true,false - fixed/dynamic thumbnail width
            thumb_image_overlay_effect: false, //true,false - images overlay effect on normal state only

            strippanel_padding_top: 10, //space from top of the panel
            strippanel_padding_bottom: 0, //space from bottom of the panel
            strippanel_padding_left: 0, //space from left of the panel
            strippanel_padding_right: 0, //space from right of the panel

            strippanel_enable_buttons: false, //enable buttons from the sides of the panel
            strip_thumbs_align: "center", //left, center, right, top, middle, bottom - the align of the thumbs when they smaller then the strip size.
            strip_space_between_thumbs: 10, //space between thumbs
            strip_control_avia: false, //avia control - move the strip according strip moseover position
            strip_control_touch: true, //touch control - move the strip by dragging it  
        });

        // Конец Слайдер2 для мобильной версии
        // Конец Слайдер2 для мобильной версии
        // Конец Слайдер2 для мобильной версии
        // Конец Слайдер2 для мобильной версии





    } else {


        // Слайдер1 для широкой версии
        // Слайдер1 для широкой версии
        // Слайдер1 для широкой версии
        // Слайдер1 для широкой версии

        $("#gallery1").unitegallery({
            gallery_theme: "compact",
            theme_panel_position: "right",
            theme_hide_panel_under_width: null, //hide panel under certain browser width, if null, don't hide

            // gallery options
            gallery_width: 900, //gallery width  
            gallery_height: 320, //gallery height

            gallery_min_width: 400, //gallery minimal width when resizing
            gallery_min_height: 300, //gallery minimal height when resizing
            gallery_images_preload_type: "minimal",
            gallery_autoplay: false, //true / false - begin slideshow autoplay on start
            gallery_control_thumbs_mousewheel: false, //true,false - enable / disable the mousewheel
            gallery_control_keyboard: true, //true,false - enable / disble keyboard controls
            gallery_carousel: true, //true,false - next button on last image goes to first image.
            //slider options: 
            slider_scale_mode: "fill",
            slider_scale_mode_media: "fill", //fit, down, full scale mode on media items
            slider_item_padding_top: 0, //padding top of the slider item
            slider_item_padding_bottom: 0, //padding bottom of the slider item
            slider_item_padding_left: 0, //padding left of the slider item
            slider_item_padding_right: 0, //padding right of the slider item


            slider_control_swipe: true, //true,false - enable swiping control
            slider_control_zoom: false, //true, false - enable zooming control
            slider_zoom_max_ratio: 6, //max zoom ratio

            slider_enable_arrows: true, //enable arrows onslider element
            slider_arrows_skin: "", //skin of the slider arrows, if empty inherit from gallery skin

            slider_arrow_left_align_hor: "right", //left, center, right - left arrow horizonal align
            slider_arrow_left_align_vert: "bottom", //top, middle, bottom - left arrow vertical align
            slider_arrow_left_offset_hor: 16, //left arrow horizontal offset
            slider_arrow_left_offset_vert: 100, //left arrow vertical offset

            slider_arrow_right_align_hor: "right", //left, center, right - right arrow horizontal algin
            slider_arrow_right_align_vert: "bottom", //top, middle, bottom - right arrow vertical align
            slider_arrow_right_offset_hor: 16, //right arrow horizontal offset 
            slider_arrow_right_offset_vert: 30, //right arrow vertical offset
            // est voprosi
            slider_enable_progress_indicator: true, //enable progress indicator element
            // slider_progress_indicator_type: "pie",   //pie, pie2, bar (if pie not supported, it will switch to bar automatically)
            slider_progress_indicator_align_hor: "left", //left, center, right - progress indicator horizontal align
            slider_progress_indicator_align_vert: "top", //top, middle, bottom - progress indicator vertical align
            slider_progress_indicator_offset_hor: 16, //progress indicator horizontal offset 
            slider_progress_indicator_offset_vert: 36, //progress indicator vertical offset
            slider_progresspie_type_fill: false, //false is stroke, true is fill - the progress pie type, stroke of fill
            slider_enable_play_button: false, //true,false - enable play / pause button onslider element

            slider_enable_fullscreen_button: true,
            slider_fullscreen_button_align_hor: "right", //left, center, right - fullscreen button horizonatal align
            slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
            slider_fullscreen_button_offset_hor: 10, //fullscreen button horizontal offset 
            slider_fullscreen_button_offset_vert: 20, //fullscreen button vertical offset

            slider_enable_zoom_panel: true, //true,false - enable the zoom buttons, works together with zoom control.
            slider_zoompanel_skin: "", //skin of the slider zoom panel, if empty inherit from gallery skin    
            slider_zoompanel_align_hor: "right", //left, center, right - zoom panel horizontal align
            slider_zoompanel_align_vert: "top", //top, middle, bottom - zoom panel vertical align
            slider_zoompanel_offset_hor: 12, //zoom panel horizontal offset 
            slider_zoompanel_offset_vert: 10, //zoom panel vertical offset

            slider_controls_always_on: true, //true,false - controls are always on, false - show only on mouseover
            slider_controls_appear_ontap: false, //true,false - appear controls on tap event on touch devices

            slider_enable_text_panel: false, //true,false - enable the text panel
            slider_textpanel_always_on: false, //true,false - text panel are always on, false - show only on mouseover

            thumb_width: 88, //thumb width
            thumb_height: 55, //thumb height
            thumb_fixed_size: false, //true,false - fixed/dynamic thumbnail width

            thumb_image_overlay_effect: false, //true,false - images overlay effect on normal state only

            strippanel_padding_top: 0, //space from top of the panel
            strippanel_padding_bottom: 0, //space from bottom of the panel

            strippanel_padding_left: 0, //space from left of the panel
            strippanel_padding_right: 0, //space from right of the panel

            strippanel_enable_buttons: false, //enable buttons from the sides of the panel
            strip_control_avia: false, //avia control - move the strip according strip moseover position

        });


        // Конец Слайдер1 для широкой версии
        // Конец Слайдер1 для широкой версии
        // Конец Слайдер1 для широкой версии
        // Конец Слайдер1 для широкой версии





        //  Слайдер2 для широкой версии
        //  Слайдер2 для широкой версии
        //  Слайдер2 для широкой версии
        //  Слайдер2 для широкой версии

        $("#gallery2").unitegallery({
            gallery_theme: "compact",
            theme_panel_position: "right",
            theme_hide_panel_under_width: null, //hide panel under certain browser width, if null, don't hide

            // gallery options
            gallery_width: 900, //gallery width  
            gallery_height: 320, //gallery height

            gallery_min_width: 400, //gallery minimal width when resizing
            gallery_min_height: 300, //gallery minimal height when resizing
            gallery_images_preload_type: "minimal",
            gallery_autoplay: false, //true / false - begin slideshow autoplay on start
            gallery_control_thumbs_mousewheel: false, //true,false - enable / disable the mousewheel
            gallery_control_keyboard: true, //true,false - enable / disble keyboard controls
            gallery_carousel: true, //true,false - next button on last image goes to first image.
            //slider options: 
            slider_scale_mode: "fill",
            slider_scale_mode_media: "fill", //fit, down, full scale mode on media items
            slider_item_padding_top: 0, //padding top of the slider item
            slider_item_padding_bottom: 0, //padding bottom of the slider item
            slider_item_padding_left: 0, //padding left of the slider item
            slider_item_padding_right: 0, //padding right of the slider item


            slider_control_swipe: true, //true,false - enable swiping control
            slider_control_zoom: false, //true, false - enable zooming control
            slider_zoom_max_ratio: 6, //max zoom ratio

            slider_enable_arrows: true, //enable arrows onslider element
            slider_arrows_skin: "", //skin of the slider arrows, if empty inherit from gallery skin

            slider_arrow_left_align_hor: "right", //left, center, right - left arrow horizonal align
            slider_arrow_left_align_vert: "bottom", //top, middle, bottom - left arrow vertical align
            slider_arrow_left_offset_hor: 16, //left arrow horizontal offset
            slider_arrow_left_offset_vert: 100, //left arrow vertical offset

            slider_arrow_right_align_hor: "right", //left, center, right - right arrow horizontal algin
            slider_arrow_right_align_vert: "bottom", //top, middle, bottom - right arrow vertical align
            slider_arrow_right_offset_hor: 16, //right arrow horizontal offset 
            slider_arrow_right_offset_vert: 30, //right arrow vertical offset
            // est voprosi
            slider_enable_progress_indicator: true, //enable progress indicator element
            // slider_progress_indicator_type: "pie",   //pie, pie2, bar (if pie not supported, it will switch to bar automatically)
            slider_progress_indicator_align_hor: "left", //left, center, right - progress indicator horizontal align
            slider_progress_indicator_align_vert: "top", //top, middle, bottom - progress indicator vertical align
            slider_progress_indicator_offset_hor: 16, //progress indicator horizontal offset 
            slider_progress_indicator_offset_vert: 36, //progress indicator vertical offset
            slider_progresspie_type_fill: false, //false is stroke, true is fill - the progress pie type, stroke of fill
            slider_enable_play_button: false, //true,false - enable play / pause button onslider element

            slider_enable_fullscreen_button: true,
            slider_fullscreen_button_align_hor: "right", //left, center, right - fullscreen button horizonatal align
            slider_fullscreen_button_align_vert: "top", //top, middle, bottom - fullscreen button vertical align
            slider_fullscreen_button_offset_hor: 10, //fullscreen button horizontal offset 
            slider_fullscreen_button_offset_vert: 20, //fullscreen button vertical offset

            slider_enable_zoom_panel: true, //true,false - enable the zoom buttons, works together with zoom control.
            slider_zoompanel_skin: "", //skin of the slider zoom panel, if empty inherit from gallery skin    
            slider_zoompanel_align_hor: "right", //left, center, right - zoom panel horizontal align
            slider_zoompanel_align_vert: "top", //top, middle, bottom - zoom panel vertical align
            slider_zoompanel_offset_hor: 12, //zoom panel horizontal offset 
            slider_zoompanel_offset_vert: 10, //zoom panel vertical offset

            slider_controls_always_on: true, //true,false - controls are always on, false - show only on mouseover
            slider_controls_appear_ontap: false, //true,false - appear controls on tap event on touch devices

            slider_enable_text_panel: false, //true,false - enable the text panel
            slider_textpanel_always_on: false, //true,false - text panel are always on, false - show only on mouseover

            thumb_width: 88, //thumb width
            thumb_height: 55, //thumb height
            thumb_fixed_size: false, //true,false - fixed/dynamic thumbnail width

            thumb_image_overlay_effect: false, //true,false - images overlay effect on normal state only

            strippanel_padding_top: 0, //space from top of the panel
            strippanel_padding_bottom: 0, //space from bottom of the panel

            strippanel_padding_left: 0, //space from left of the panel
            strippanel_padding_right: 0, //space from right of the panel

            strippanel_enable_buttons: false, //enable buttons from the sides of the panel
            strip_control_avia: false, //avia control - move the strip according strip moseover position

        });
        // Конец Слайдер2 для широкой версии
        // Конец Слайдер2 для широкой версии
        // Конец Слайдер2 для широкой версии
        // Конец Слайдер2 для широкой версии




    };






});