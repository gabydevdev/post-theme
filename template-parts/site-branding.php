<?php
/**
 * Displays header site branding
 *
 * @package post-theme
 */

$blog_info   = get_bloginfo( 'name' );
$description = get_bloginfo( 'description', 'display' );

?>

<div class="site-branding">

	<?php
	if (has_custom_logo()) {
		the_custom_logo();
	} else {
		if ($blog_info) {
			?>
			<h1 class="site-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<?php echo esc_html( $blog_info ); ?>
				</a>
			</h1>
			<?php
		}

		if ($description) {
			?>
			<p class="site-description">
				<?php echo esc_html( $description ); ?>
			</p>
			<?php
		}
	}
	?>

</div>
