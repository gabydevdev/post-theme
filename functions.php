<?php
/**
 * Theme functions and definitions.
 *
 * @package post-theme
 */

if ( ! defined( '_P_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_P_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features.
 */
function _p_setup() {

	// Make theme available for translation.
	load_theme_textdomain( '_p', get_template_directory() . '/languages' );

	// Add RSS feed links to <head>.
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// Add support for post thumbnails.
	add_theme_support( 'post-thumbnails' );

	// Register navigation menus.
	register_nav_menus(
		array(
			'primary'  => __( 'Desktop Horizontal Menu', '_p' ),
			'expanded' => __( 'Desktop Expanded Menu', '_p' ),
			'mobile'   => __( 'Mobile Menu', '_p' ),
			'footer'   => __( 'Footer Menu', '_p' ),
			'social'   => __( 'Social Menu', '_p' ),
		)
	);

	// Add support for post formats.
	add_theme_support(
		'post-formats',
		array( 'link', 'gallery', 'image', 'quote', 'status', 'video' )
	);

	// Default core markup to HTML5.
	add_theme_support(
		'html5',
		array(
			'search-form',
			'gallery',
			'caption',
			'style',
			'script',
			'navigation-widgets',
		)
	);

	// Add support for custom logo.
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 100,
			'width'       => 350,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);

	// Block editor settings.
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );

	// Remove feed icon link from legacy RSS widget.
	add_filter( 'rss_widget_feed_link', '__return_empty_string' );
}
add_action( 'after_setup_theme', '_p_setup' );

/**
 * Set default content width.
 */
function _p_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_p_filter_content_width', 800 );
}
add_action( 'after_setup_theme', '_p_content_width', 0 );

/**
 * REQUIRED FILES
 * Include required files.
 */

// Menu functions and filters.
require get_template_directory() . '/inc/menu-functions.php';

/**
 * Register and enqueue styles.
 */
function _p_include_css_scripts() {
	// CSS dependency variable
	$main_css_dependency = apply_filters( '_p_filter_main_css_dependency', array() );

	// Hook to include additional scripts before theme's main style
	do_action( '_p_action_before_main_css' );

	// Default style
	wp_enqueue_style(
		'_p-main-style',
		get_theme_file_uri( '/assets/css/main.css' )
	);

	// Hook to include additional scripts after theme's main style
	do_action( '_p_action_after_main_css' );
}
add_action( 'wp_enqueue_scripts', '_p_include_css_scripts' );

/**
 * Register and enqueue script.
 */
function _p_include_js_scripts() {
	// JS dependency variable
	$main_js_dependency = apply_filters( '_p_filter_main_js_dependency', array() );

	// Hook to include additional scripts before theme's main script
	do_action( '_p_action_before_main_js', $main_js_dependency );

	// Enqueue theme's main script
	wp_enqueue_script(
		'_p-main-js',
		get_theme_file_uri( '/assets/js/main.js' ),
		$main_js_dependency,
		false,
		array(
			'strategy' => 'defer',
		)
	);

	// Hook to include additional scripts after theme's main script
	do_action( '_p_action_after_main_js' );
}
add_action( 'wp_enqueue_scripts', '_p_include_js_scripts' );

/**
 * Calculate classes for the main <html> element.
 */
function _p_the_html_classes() {
	$classes = apply_filters( '_p_html_classes', '' );

	if ( !$classes ) {
		return;
	}

	echo 'class="' . esc_attr( $classes ) . '"';
}

/**
 * Register sidebars for the theme.
 */
function _p_register_widget_areas() {

	register_sidebar(
		array(
			'id'            => 'header-top-1',
			'name'          => esc_html__( 'Header Top - Area One', '_p' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s header-widget">',
			'after_widget'  => '</div>',
		)
	);

	register_sidebar(
		array(
			'id'            => 'header-top-2',
			'name'          => esc_html__( 'Header Top - Area Two', '_p' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s header-widget">',
			'after_widget'  => '</div>',
		)
	);

	register_sidebar(
		array(
			'id'            => 'header-1',
			'name'          => esc_html__( 'Header - Area One', '_p' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s header-widget">',
			'after_widget'  => '</div>',
		)
	);

	register_sidebar(
		array(
			'id'            => 'header-2',
			'name'          => esc_html__( 'Header - Area Two', '_p' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s header-widget">',
			'after_widget'  => '</div>',
		)
	);

	register_sidebar(
		array(
			'id'            => 'footer-1',
			'name'          => esc_html__( 'Footer', '_p' ),
			'before_widget' => '<section class="footer-top-area">',
			'after_widget'  => '</section>',
		)
	);

	register_sidebar(
		array(
			'id'            => 'side-panel',
			'name'          => esc_html__( 'Offscreen Panel', '_p' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s header-widget">',
			'after_widget'  => '</div>',
		)
	);

	register_sidebar(
		array(
			'id'            => 'mobile-panel',
			'name'          => esc_html__( 'Mobile Panel', '_p' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s header-widget">',
			'after_widget'  => '</div>',
		)
	);
}
add_action( 'widgets_init', '_p_register_widget_areas' );

/**
 * Disable WordPress admin email verification.
 * https://www.intelliwolf.com/disable-wordpress-admin-email-verification
 */
add_filter( 'admin_email_check_interval', '__return_false' );

/**
 * Custom functions that act on the site header.
 */

/**
 * Generates the class attribute for the header element.
 *
 * @param  string $css_class Additional CSS class names to be added to the header element.
 */
function _p_header_class( $css_class = '' ) {
	// Separates class names with a single space, collates class names for body element.
	echo 'class="' . esc_attr( implode( ' ', _p_get_header_class( $css_class ) ) ) . '"';
}

/**
 * Retrieves the header classes for the current page.
 *
 * @param string $css_class Additional CSS classes to be added.
 *
 * @return array An array of unique CSS classes.
 */
function _p_get_header_class( $css_class = '' ) {

	$classes = array();

	// Default class for the site header.
	$classes[] = esc_attr('site-header');

	// Header layout class.
	$classes[] = esc_attr('header-' . get_theme_mod('header_layout', 'standard'));

	// Check if custom logo exists.
	if (has_custom_logo()) {
		$classes[] = esc_attr('has-logo');
	}

	// Add class for logo position.
	$classes[] = esc_attr('logo-' . get_theme_mod('logo_position_dropdown', 'left'));

	// Add class for menu position.
	$classes[] = esc_attr('menu-' . get_theme_mod('logo_position_dropdown', 'right'));

	// Do you want to show the site's title & tagline.
	if (( true === get_theme_mod( 'display_title_and_tagline', true ) )) {
		$classes[] = esc_attr('show-title-and-tagline');
	}

	if ( ! empty( $css_class ) ) {
		if ( ! is_array( $css_class ) ) {
			$css_class = preg_split( '#\s+#', $css_class );
		}
		$classes = array_merge( $classes, $css_class );
	} else {
		// Ensure that we always coerce class to being an array.
		$css_class = array();
	}

	$classes = array_map( 'esc_attr', $classes );

	/**
	 * Filters the list of CSS class names.
	 *
	 * @param string[] $classes   An array of class names.
	 * @param string[] $css_class An array of additional class names.
	 */
	$classes = apply_filters( '_p_header_class', $classes, $css_class );

	return array_unique( $classes );
}

/**
 * Get in touch panel toggler
 */
function _p_get_in_touch_toggler() {
	?>

	<button class="button" data-toggle="off-canvas" data-target="get-in-touch-panel">
		<?php esc_html_e( 'Work with us', '_p' ); ?>
	</button>

	<?php

}
add_action( '_p_action_after_header_widget_area', '_p_get_in_touch_toggler' );

/**
 * Mobile panel toggler
 */
function _p_mobile_menu_toggler() {
	?>

	<button class="button mobile-panel-toggler" data-toggle="off-canvas" data-target="mobile-panel">
		<?php esc_html_e( 'Menu', '_p' ); ?>
	</button>

	<?php

}
add_action( '_p_action_after_header_widget_area', '_p_mobile_menu_toggler' );

/**
 * Custom functions that act on the site footer.
 */

/**
 * Get in touch panel
 */
function _p_get_in_touch_panel() {
	?>

	<div id="get-in-touch-panel" class="get-in-touch-panel offscreen-panel">
		<div class="backdrop"></div>
		<div class="panel">
			<div class="panel-close">
				<span class="panel-close-text">
					<?php esc_html_e( 'Close', '_p' ) ?>
				</span>
				<button class="toggle panel-close-toggle">
					<span class="toggle-text"><?php _e( 'Close Menu', '_p' ); ?></span>
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button><!-- .nav-toggle -->
			</div>

			<div class="panel-content">
				<?php echo do_shortcode( '[elementor-template id="1957"]' ); ?>
			</div>
		</div>
	</div>

	<?php

}
add_action( '_p_after_site', '_p_get_in_touch_panel' );

/**
 * Mobile menu panel
 */
function _p_mobile_menu_panel() {
	?>

	<div id="mobile-panel" class="mobile-panel offscreen-panel">
		<div class="backdrop"></div>
		<div class="panel">
			<div class="panel-close">
				<span class="panel-close-text">
					<?php esc_html_e( 'Close', '_p' ) ?>
				</span>
				<button class="toggle close-toggle">
					<span class="screen-reader-text"><?php _e( 'Close', '_p' ); ?></span>
					<span class="toggle-icon"></span>
				</button><!-- .nav-toggle -->
			</div>
			<div class="panel-content">
				<nav class="mobile-menu" aria-label="menu">
					<ul class="vertical-menu list-unstyled nav nav-list">
						<?php
						$menu = has_nav_menu( 'mobile' ) ? 'mobile' : 'primary';

						wp_nav_menu(
							array(
								'theme_location' => $menu,
								'container'      => false,
								'items_wrap'     => '%3$s',
							)
						);
						?>
					</ul>
				</nav>
			</div>
		</div>
	</div>

	<?php

}
add_action( '_p_after_site', '_p_mobile_menu_panel' );

/**
 * SVG Gradient Collection
 */
function _p_svg_gradient_sprite_1() {
	?>
	<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" class="svg-gradient-sprite">
		<defs>
			<linearGradient id="g1" x1="0%" y1="0%" x2="50%" y2="100%">
				<stop stop-color="#3e126a" offset="0"></stop>
				<stop stop-color="#88227d" offset=".59"></stop>
				<stop stop-color="#d7336a" offset=".99"></stop>
			</linearGradient>
			<linearGradient id="g2" gradientUnits="userSpaceOnUse" x1="-21.67" y1="85.28" x2="60.56" y2="6.24">
				<stop stop-color="#3e126a" offset="0"></stop>
				<stop stop-color="#88227d" offset=".59"></stop>
				<stop stop-color="#d7336a" offset=".99"></stop>
			</linearGradient>
			<linearGradient id="g3" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop stop-color="#3e126a" offset="0%"></stop>
				<stop stop-color="#d7336a" offset="93%"></stop>
			</linearGradient>
			<radialGradient id="grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(24 17.50001 -19.85275 27.22662 2 6.5)">
			  <stop offset="0.182" stop-color="#3e126a"/>
			  <stop offset="0.682" stop-color="#88227d"/>
			  <stop offset="1" stop-color="#d7336a"/>
			</radialGradient>
		</defs>
	</svg>
	<?php

}
add_action( '_p_after_site', '_p_svg_gradient_sprite_1' );

/**
 * SVG Icons
 */

/**
 * Function that print svg html icon
 *
 * @param string $name - icon name
 * @param string $class_name - custom html tag class name
 */
function _p_render_svg_icon( $name, $class_name = '' ) {
	echo _p_get_svg_icon( $name, $class_name );
}

/**
 * Returns svg html
 *
 * @param  string $name - icon name
 * @param  string $class_name - custom html tag class name
 *
 * @return string|html
 */
function _p_get_svg_icon($name, $class_name = '') {
	$html = '';

	$class = isset( $class_name ) && ! empty( $class_name ) ? 'class="' . esc_attr( $class_name ) . '"' : '';

	switch($name) {
		case 'button-arrow':
			$html = '<svg xmlns="http://www.w3.org/2000/svg" ' . $class . ' xml:space="preserve" width="9" height="9" style="enable-background:new 0 0 9 9;fill:currentColor"><path d="M8 9V1.8l-7.1 7-.7-.7L7.3 1H0V0h9v9H8z"/><path d="M8 9V1.8l-7.1 7-.7-.7L7.3 1H0V0h9v9H8z"/></svg>';
			break;

		case 'highlight-arrow':
			$html = '<svg xmlns="http://www.w3.org/2000/svg" ' . $class . ' width="82" height="82"><path fill="currentColor" d="M75 82V11.9L5.1 81.7l-4.9-5L70 7H0V0h82v82Z"/><path fill="currentColor" d="M75 82V11.9L5.1 81.7l-4.9-5L70 7H0V0h82v82Z"/></svg>';
			break;

		case 'back-to-up':
			$html = '<svg xmlns="http://www.w3.org/2000/svg" ' . $class . ' width="12.728" height="12.728"><path d="m5.657 12.02 5.091-5.09-9.97-.071v-.99h10.04L5.658.707 6.364 0l6.364 6.364-6.364 6.364Z"/><path d="m5.657 12.02 5.091-5.09-9.97-.071v-.99h10.04L5.658.707 6.364 0l6.364 6.364-6.364 6.364Z"/></svg>';
			break;
	}

	return apply_filters( '_p_filter_svg_icon', $html, $name, $class_name );
}

/**
 * If Elementor is active, we can load Elementor-specific settings & features.
 */
if (defined('ELEMENTOR_VERSION')) {
	require get_template_directory() . '/inc/elementor.php';
}

/**
 * Favicon
 */
function _p_favicon() {
	?>
	<link rel="icon" type="image/png" href="/favicon.png">
	<link rel="icon" type="image/svg+xml" href="/favicon.svg">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
	<meta name="msapplication-TileColor" content="#000000">
	<meta name="theme-color" content="#ffffff">
	<?php
}
add_filter( 'wp_head' , '_p_favicon' );

/**
 * Completely disable comments
 * https://www.wpbeginner.com/wp-tutorials/how-to-completely-disable-comments-in-wordpress/
 */

/**
 * Remove comments metabox and disable comment support.
 */
function _p_disable_comments() {
	// Redirect any user trying to access comments page.
	global $pagenow;

	if ( 'edit-comments.php' === $pagenow ) {
		wp_safe_redirect( admin_url() );
		exit;
	}

	// Remove comments metabox from dashboard.
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );

	// Disable support for comments and trackbacks in post types.
	foreach ( get_post_types() as $post_type ) {
		if ( post_type_supports( $post_type, 'comments' ) ) {
			remove_post_type_support( $post_type, 'comments' );
			remove_post_type_support( $post_type, 'trackbacks' );
		}
	}
}
add_action( 'admin_init', '_p_disable_comments' );

// Close comments on the front-end.
add_filter( 'comments_open', '__return_false', 20, 2 );
add_filter( 'pings_open', '__return_false', 20, 2 );

// Hide existing comments.
add_filter( 'comments_array', '__return_empty_array', 10, 2 );

// Remove comments page in menu.
add_action(
	'admin_menu',
	function () {
		remove_menu_page( 'edit-comments.php' );
	}
);

// Remove comments links from admin bar.
add_action(
	'init',
	function () {
		if ( is_admin_bar_showing() ) {
			remove_action( 'admin_bar_menu', 'wp_admin_bar_comments_menu', 60 );
		}
	}
);
