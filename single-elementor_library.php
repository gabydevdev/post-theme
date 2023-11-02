<?php
/**
 * The main template file.
 *
 * @package post-theme
 */


get_header();


while ( have_posts() ) {
	the_post();

	?>

	<main id="content" class="page-content" role="main" itemscope itemprop="mainContentOfPage">
		<div class="content-inner alignfull" style="margin-top:var(--wp--preset--spacing--50);margin-bottom:var(--wp--preset--spacing--70)">

			<?php
			the_content();
			?>

		</div>
	</main><!-- .page-content -->

	<?php
}

get_footer();
