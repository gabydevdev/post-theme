<?php
/**
 * The template for archive pages
 *
 * @package post-theme
 */

$archive_title = $archive_subtitle = '';

?>

<main id="content" class="page-content" role="main" itemscope itemprop="mainContentOfPage">
    <div class="is-layout-constrained wp-block-group-is-layout-constrained" style="margin-top:var(--wp--preset--spacing--50);margin-bottom:var(--wp--preset--spacing--70)">

        <?php

        if ( is_search() ) {
            global $wp_query;

            $archive_title = sprintf(
                '%1$s %2$s',
                '<span class="color-accent">' . __( 'Search:', '_p' ) . '</span>',
                '&ldquo;' . get_search_query() . '&rdquo;'
            );

            if ( $wp_query->found_posts ) {
                $archive_subtitle = sprintf(
                    /* translators: %s: Number of search results. */
                    _n(
                        'We found %s result for your search.',
                        'We found %s results for your search.',
                        $wp_query->found_posts,
                        '_p'
                    ),
                    number_format_i18n( $wp_query->found_posts )
                );
            } else {
                $archive_subtitle = __( 'We could not find any results for your search. You can give it another try through the search form below.', '_p' );
            }
        } elseif ( is_archive() && ! have_posts() ) {
            $archive_title = __( 'Nothing Found', '_p' );
        } elseif ( ! is_home() ) {
            $archive_title    = get_the_archive_title();
            $archive_subtitle = get_the_archive_description();
        }

        if ( $archive_title || $archive_subtitle ) {
            ?>

            <header class="archive-header has-text-align-center header-footer-group">
                <div class="archive-header-inner section-inner medium">
                    <?php if ( $archive_title ) { ?>
                        <h1 class="archive-title"><?php echo wp_kses_post( $archive_title ); ?></h1>
                    <?php } ?>

                    <?php if ( $archive_subtitle ) { ?>
                        <div class="archive-subtitle section-inner thin max-percentage intro-text"><?php echo wp_kses_post( wpautop( $archive_subtitle ) ); ?></div>
                    <?php } ?>
                </div>
            </header><!-- .archive-header -->

            <?php
        }

        if ( have_posts() ) {

            /**
             * Be using the new wp:query block instead of the original loop.
             *
             * Example:
             * while (have_posts()) {
             *   the_post();
             *
             *   get_template_part('template-parts/content', get_post_type());
             * }
             */

            echo do_blocks(
                '
                <!-- wp:query {"query":{"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"taxQuery":null,"parents":[]},"displayLayout":{"type":"flex","columns":3},"align":"wide","layout":{"type":"default"}} -->
                <div class="wp-block-query alignwide">
                    <!-- wp:post-template {"align":"wide"} -->
                        <!-- wp:post-featured-image {"isLink":true,"width":"100%","height":"clamp(15vw, 30vh, 400px)","align":"wide"} /-->
                        <!-- wp:post-title {"isLink":true,"align":"wide"} /-->
                        <!-- wp:post-excerpt /-->
                        <!-- wp:post-date {"isLink":true} /-->

                        <!-- wp:spacer {"height":"var(--wp--preset--spacing--70)"} -->
                        <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                        <!-- /wp:spacer -->
                    <!-- /wp:post-template -->

                    <!-- wp:query-pagination {"paginationArrow":"arrow","align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
                        <!-- wp:query-pagination-previous /-->
                        <!-- wp:query-pagination-next /-->
                    <!-- /wp:query-pagination -->
                </div>
                <!-- /wp:query -->'
            );

        }

        ?>

    </div>
</main><!-- .page-content -->
