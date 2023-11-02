<?php
/**
 * The template for displaying the header
 *
 * @package post-theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php _p_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php
if ( ! function_exists( 'wp_body_open' ) ) {

	function wp_body_open() { // phpcs:ignore Squiz.Commenting.FunctionComment.Missing
			do_action( 'wp_body_open' );
	}
}
?>

<div id="page" class="page-wrapper out animate">

	<header id="site-header" <?php _p_header_class( 'is-layout-constrained' ); ?> role="banner" itemscope itemtype="http://schema.org/WPHeader">
		<?php get_template_part( 'template-parts/header', 'standard' ); ?>
	</header><!-- #site-header -->
