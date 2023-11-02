<?php
/**
 * Top area inside main header.
 *
 * @package post-theme
 */
?>

<div class="header-top-area alignwide">
	<?php
	if (is_active_sidebar( 'header-top-1' )) {
		?>
		<div class="header-wrapper widget-area">
			<?php dynamic_sidebar( 'header-top-1' ); ?>
		</div>
		<?php
	}

	if (is_active_sidebar( 'header-top-2' )) {
		?>
		<div class="header-wrapper widget-area">
			<?php dynamic_sidebar( 'header-top-2' ); ?>
		</div>
		<?php
	}
	?>
</div>
