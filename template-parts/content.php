<?php
/**
 * The template for displaying singular post-types
 *
 * @package post-theme
 */

while ( have_posts() ) {
	the_post();

	?>

	<main id="content" class="page-content" role="main" itemscope itemprop="mainContentOfPage">
		<div class="content-inner wp-block-group-is-layout-constrained" style="margin-top:var(--wp--preset--spacing--50);margin-bottom:var(--wp--preset--spacing--70)">

			<?php

			echo do_blocks(
				'
				<!-- wp:group {"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:post-featured-image {"overlayColor":"contrast","dimRatio":50,"align":"wide","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|50","top":"calc(-1 * var(--wp--preset--spacing--50))"}}}} /-->
					<!-- wp:post-title {"level":1,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|40"}}}} /-->
				</div>
				<!-- /wp:group -->'
			);

			echo do_blocks( '<!-- wp:post-content {"layout":{"type":"constrained"}} /-->' );

			echo do_blocks( '<!-- wp:template-part {"slug":"post-meta"} /-->' );

			?>

		</div>
	</main><!-- .page-content -->

	<?php
}
