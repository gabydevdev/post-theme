<?php
/**
 * Displays the site header.
 *
 * @package post-theme
 */
?>

<?php
if ( is_active_sidebar( 'header-top-1' ) || is_active_sidebar( 'header-top-2' ) ) {
	get_template_part( 'template-parts/header-top' );
}
?>

<nav class="header-navbar alignfull">
	<?php
	get_template_part( 'template-parts/site-branding' );

	// Hook to include additional content before header widget area.
	do_action( '_p_action_before_header_widget_area' );

	if ( is_active_sidebar( 'header-1' ) || is_active_sidebar( 'header-2' ) ) {
		get_template_part( 'template-parts/header-navbar' );
	}

	// Hook to include additional content after header widget area.
	do_action( '_p_action_after_header_widget_area' );
	?>
</nav>
