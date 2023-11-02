<?php
/**
 * Displays site navigation
 *
 * @package PTFW
 */

if ( has_nav_menu( 'primary' ) ) : ?>
	<nav id="site-navigation" class="header-navbar" aria-label="<?php esc_attr_e( 'Main Navigation', 'ptfw' ); ?>">
		<ul class="primary-menu reset-list-style menu-wrapper" itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" role="menu">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => '',
					'items_wrap'     => '%3$s',
					'fallback_cb'    => false,
				)
			);
			?>
		</ul>
	</nav><!-- #site-navigation -->
	<?php
endif;

