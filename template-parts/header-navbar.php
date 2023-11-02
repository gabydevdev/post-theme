<?php
/**
 * Widget areas for the header
 *
 * @package post-theme
 */
?>

<?php

if (is_active_sidebar( 'header-1' )) {
	?>
	<div class="header-wrapper widget-area">
		<?php dynamic_sidebar( 'header-1' ); ?>
	</div>
	<?php
}

if (is_active_sidebar( 'header-2' )) {
	?>
	<div class="header-wrapper widget-area">
		<?php dynamic_sidebar( 'header-2' ); ?>
	</div>
	<?php
}
