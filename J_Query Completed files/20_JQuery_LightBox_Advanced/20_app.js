lc_lightbox('.elem', {

    // whether to display a single element or compose a gallery
    gallery     : true,

    // attribute grouping elements - use false to create a gallery with all fetched elements
    gallery_hook  : 'rel',

    // if a selector is found, set true to handle automatically DOM changes
    live_elements : true,

    // whether to preload all images on document ready
    preload_all   : false,

    // force elements type
    global_type   : 'image',

    // attribute containing element's source
    src_attr    : 'href',

    // attribute containing the title - is possible to specify a selector with this syntax: "> .selector" or "> span"
    title_attr    : 'title',

    // attribute containing the description - is possible to specify a selector with this syntax: "> .selector" or "> span"
    txt_attr    : 'data-lcl-txt',

    // attribute containing the author - is possible to specify a selector with this syntax: "> .selector" or "> span"
    author_attr   : 'data-lcl-author',

    // whether to enable slideshow
    slideshow   : true,

    // animation duration for lightbox opening and closing / 1000 = 1sec
    open_close_time : 500,

    // overlay's animation advance (on opening) and delay (on close) to window / 1000 = sec
    ol_time_diff  : 100,

    // elements fading animation duration in millisecods / 1000 = 1sec
    fading_time   : 150,

    // sizing animation duration in millisecods / 1000 = 1sec
    animation_time  : 300,

    // slideshow interval duration in milliseconds / 1000 = 1sec
    slideshow_time  : 6000,

    // autoplay slideshow - bool
    autoplay    : true,

    // whether to display elements counter
    counter     : true,

    // whether to display a progressbar when slideshow runs
    progressbar   : true,

    // whether to create a non-stop pagination cycling elements
    carousel    : true,

    // Lightbox maximum width.
    // Use a responsive percent value or an integer for static pixel value
    max_width   : '93%',

    // Lightbox maximum height.
    // Use a responsive percent value or an integer for static pixel value
    max_height    : '93%',

    // overlay opacity / value between 0 and 1
    ol_opacity    : 0.7,

    // background color of the overlay
    ol_color    : '#111',

    // overlay patterns - insert the pattern name or false
    ol_pattern    : false,

    // width of the lightbox border in pixels
    border_w    : 1,

    // color of the lightbox border
    border_col    : 'darkgray',

    // width of the lightbox padding in pixels
    padding     : 0,

    // lightbox border radius in pixels
    radius      : 4,

    // whether to apply a shadow around lightbox window
    shadow      : true,

    // whether to hide page's vertical scroller
    remove_scrollbar: true,

    // custom classes added to wrapper - for custom styling/tracking
    wrap_class    : '',

    // light / dark / Minimal
    skin      : 'light',

    // over / under / lside / rside
    data_position : 'over',

    // inner / outer
    cmd_position  : 'inner',

    // set closing button position for inner commands - normal/corner
    ins_close_pos : 'normal',

    // set arrows and play/pause position - normal/middle
    nav_btn_pos   : 'normal',

    // whether to hide texts on lightbox opening - bool or int (related to browser's smaller side)
    txt_hidden    : 500,

    // bool / whether to display titles
    show_title    : true,

    // bool / whether to display descriptions
    show_descr    : true,

    // bool / whether to display authors
    show_author   : true,

    // enables thumbnails navigation (requires elements poster or images)
    thumbs_nav    : true,

    // print type icons on thumbs if types are mixed
    tn_icons    : true,

    // whether to hide thumbs nav on lightbox opening - bool or int (related to browser's smaller side)
    tn_hidden   : 500,

    // width of the thumbs for the standard lightbox
    thumbs_w    : 110,

    // height of the thumbs for the standard lightbox
    thumbs_h    : 110,

    // attribute containing thumb URL to use or false to use thumbs maker
    thumb_attr    : false,

    // script baseurl to create thumbnails (use src=%URL% w=%W% h=%H%)
    thumbs_maker_url: false,

    // Allow the user to expand a resized image. true/false
    fullscreen    : true,

    // resize mode of the fullscreen image - smart/fit/fill
    fs_img_behavior : 'fit',

    // when directly open in fullscreen mode - bool or int (related to browser's smaller side)
    fs_only     : 500,

    // whether to trigger or nor browser fullscreen mode
    browser_fs_mode : true,

    // bool
    socials     : true,

    // bool / allow text hiding
    txt_toggle_cmd  : true,

    // bool / whether to add download button
    download    : true,

    // bool / Allow touch interactions for mobile (requires AlloyFinger)
    touchswipe    : true,

    // bool / Allow elements navigation with mousewheel
    mousewheel    : true,

    // enable modal mode (no closing on overlay click)
    modal     : false,

    // whether to avoid right click on lightbox
    rclick_prevent  : false

});