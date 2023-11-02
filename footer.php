<?php
/**
 * The template for displaying the footer
 *
 * @package post-theme
 */

?>

	<?php do_action( '_p_after_content' ); ?>

	<?php
	if (is_active_sidebar( 'footer-1' )) {
		dynamic_sidebar( 'footer-1' );
	}
	?>

	<footer class="site-footer is-layout-constrained" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
		<div class="footer-credits alignfull">
			<p class="footer-copyright">&copy;
				<?php
				echo date_i18n( // phpcs:ignore WordPress.Security.EscapeOutput
					/* translators: Copyright date format, see https://www.php.net/manual/datetime.format.php */
					_x( 'Y', 'copyright date format', 'postm' )
				);
				?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
			</p><!-- .footer-copyright -->
			<?php
			if ( function_exists( 'the_privacy_policy_link' ) ) {
				the_privacy_policy_link( '<p class="privacy-policy">', '</p>' );
			}
			?>
			<p class="powered-by-wordpress">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'postm' ) ); ?>">
					<?php esc_html_e( 'Powered by WordPress', 'postm' ); ?>
				</a>
			</p><!-- .powered-by-wordpress -->
		</div><!-- .footer-credits -->

		<a class="to-the-top" href="#site-header">
			<span class="to-the-top-long">
				<?php
				/* translators: %s: HTML character for up arrow. */
				printf( esc_html__( 'To the top %s', 'postm' ), '<span class="arrow" aria-hidden="true">&rarr;</span>' );
				?>
			</span><!-- .to-the-top-long -->
			<span class="to-the-top-short">
				<?php
				/* translators: %s: HTML character for up arrow. */
				printf( esc_html__( 'Up %s', 'postm' ), '<span class="arrow" aria-hidden="true">&rarr;</span>' );
				?>
			</span><!-- .to-the-top-short -->
		</a><!-- .to-the-top -->
	</footer><!-- #site-footer -->

	<?php do_action( '_p_after_footer' ); ?>

</div> <!-- #page from header.php -->

<?php do_action( '_p_after_site' ); ?>

<div class="page-background"></div>

<?php wp_footer(); ?>

</body>
</html>
