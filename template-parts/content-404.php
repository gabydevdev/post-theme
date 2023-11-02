<?php
/**
 * Not found 404 error page
 *
 * @package post-theme
 */

while ( have_posts() ) {
	the_post();

	?>

	<main id="content" class="page-content" role="main" itemscope itemprop="mainContentOfPage">
		<div class="is-layout-constrained wp-block-group-is-layout-constrained" style="margin-top:var(--wp--preset--spacing--50);margin-bottom:var(--wp--preset--spacing--70)">

			<?php

			echo do_blocks(
				'
				<!-- wp:spacer {"height":"var(--wp--preset--spacing--30)"} -->
				<div style="height:var(--wp--preset--spacing--30)" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->'
			);
			?>

			<h1 class="alignwide"><?php echo esc_html_x( '404', 'Error code for a webpage that is not found.', '_p' ); ?></h1>

			<?php
			echo do_blocks(
				'
				<!-- wp:group {"align":"wide","layout":{"type":"default"},"style":{"spacing":{"margin":{"top":"5px"}}}} -->
				<div class="wp-block-group alignwide" style="margin-top:5px">
					<!-- wp:paragraph -->
					<p>' . esc_html_x( 'This page could not be found.', 'Message to convey that a webpage could not be found', '_p' ) . '</p>
					<!-- /wp:paragraph -->

					<!-- wp:search {"label":"' . esc_html_x( 'Search', 'label', '_p' ) . '","placeholder":"' . esc_attr_x( 'Search...', 'placeholder for search field', '_p' ) . '","showLabel":false,"width":100,"widthUnit":"%","buttonText":"' . esc_attr__( 'Search', '_p' ) . '","buttonUseIcon":true,"align":"center"} /-->
				</div>
				<!-- /wp:group -->

				<!-- wp:spacer {"height":"var(--wp--preset--spacing--70)"} -->
				<div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				<!-- wp:post-content {"layout":{"type":"constrained"}} /-->'
			);

			?>

		</div>
	</main><!-- .page-content -->

	<?php
}
