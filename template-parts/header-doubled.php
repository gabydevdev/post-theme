<?php
/**
 * Displays the site header.
 *
 * @package PTFW
 */

$logo_position = get_theme_mod( 'logo_position', 'left' );
$menu_position = get_theme_mod( 'menu_position' );

$wrapper_class = ( 'left' === $logo_position ) ? 'header-right-wrapper' : 'header-left-wrapper';

if ( 'center' !== $logo_position ) {
	if ( 'left' === $logo_position ) {
		// Include logo or site title.
		get_template_part( 'template-parts/branding' );
	}

	?>

	<div class="<?php echo esc_attr( $wrapper_class ); ?>">

		<div class="header-top-wrapper">
			<?php
			// Include widget area.
			if ( is_active_sidebar( 'header-top-1' ) ) {
				?>
				<div class="widget-holder widget-area">
					<?php dynamic_sidebar( 'header-top-1' ); ?>
				</div>
				<?php
			}

			// Include widget area.
			if ( is_active_sidebar( 'header-top-2' ) ) {
				?>
				<div class="widget-holder widget-area">
					<?php dynamic_sidebar( 'header-top-2' ); ?>
				</div>
				<?php
			}
			?>
		</div>
		<!-- .header-top -->

		<div class="header-top-wrapper">
			<?php

			if ( has_nav_menu( 'primary' ) ) {
				if ( 'right' === $menu_position ) {
					// Include widget area.
					if ( is_active_sidebar( 'header-1' ) ) {
						?>
						<div class="widget-holder widget-area">
							<?php dynamic_sidebar( 'header-1' ); ?>
						</div>
						<?php
					}

					// Include primary registered menu position.
					get_template_part( 'template-parts/navbar' );
				} else {
					// Include primary registered navigation.
					get_template_part( 'template-parts/navbar' );

					// Include widget area.
					if ( is_active_sidebar( 'header-1' ) ) {
						?>
						<div class="widget-holder widget-area">
							<?php dynamic_sidebar( 'header-1' ); ?>
						</div>
						<?php
					}
				}
			} else {
				// Include widget area.
				if ( is_active_sidebar( 'header-1' ) ) {
					?>
					<div class="widget-holder widget-area">
						<?php dynamic_sidebar( 'header-1' ); ?>
					</div>
					<?php
				}

				// Include widget area.
				if ( is_active_sidebar( 'header-2' ) ) {
					?>
					<div class="widget-holder widget-area">
						<?php dynamic_sidebar( 'header-2' ); ?>
					</div>
					<?php
				}
			}
			?>
		</div>
		<!-- .header-bottom -->

	</div>

	<?php

	if ( 'left' !== $logo_position ) {
		// Include logo or site title.
		get_template_part( 'template-parts/branding' );
	}
} else {
	?>
	<div class="header-top-wrapper">

		<?php
		// Include widget area.
		if ( is_active_sidebar( 'header-top-1' ) ) {
			?>
			<div class="widget-holder widget-area">
				<?php dynamic_sidebar( 'header-top-1' ); ?>
			</div>
			<?php
		}

		// Include widget area.
		if ( is_active_sidebar( 'header-top-2' ) ) {
			?>
			<div class="widget-holder widget-area">
				<?php dynamic_sidebar( 'header-top-2' ); ?>
			</div>
			<?php
		}
		?>
	</div>
	<!-- .header-top-wrapper -->

	<nav id="site-navigation" class="header-navbar" aria-label="<?php esc_attr_e( 'Main Navigation', 'ptfw' ); ?>">

		<?php

		// Include logo or site title.
		get_template_part( 'template-parts/branding' );

		?>

		<div class="header-left-wrapper">
			<?php
			// Include widget area.
			if ( is_active_sidebar( 'header-1' ) ) {
				?>
				<div class="widget-holder widget-area">
					<?php dynamic_sidebar( 'header-1' ); ?>
				</div>
				<?php
			}

			// Include left registered menu.
			?>
			<ul class="menu-left reset-list-style menu-wrapper" itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" role="menu">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-left',
						'container'      => '',
						'items_wrap'     => '%3$s',
						'fallback_cb'    => false,
					)
				);
				?>
			</ul>

		</div>
		<!-- .header-left-wrapper -->

		<div class="header-right-wrapper">
			<?php
			// Include right registered menu.
			?>
			<ul class="menu-right reset-list-style menu-wrapper" itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" role="menu">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-right',
						'container'      => '',
						'items_wrap'     => '%3$s',
						'fallback_cb'    => false,
					)
				);
				?>
			</ul>

			<?php
			// Include widget area.
			if ( is_active_sidebar( 'header-2' ) ) {
				?>
				<div class="widget-holder widget-area">
					<?php dynamic_sidebar( 'header-2' ); ?>
				</div>
				<?php
			}
			?>

		</div>
		<!-- .header-right-wrapper -->

	</nav>
	<!-- .header-navbar -->

	<?php

}
