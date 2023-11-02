<?php
/**
 * Functions and filters related to the menus.
 *
 * This file contains functions to make the default WordPress navigation
 * use an HTML structure similar to the Navigation block.
 *
 * @package post-theme
 */

/**
 * Add ARIA role to the menu items.
 *
 * @param  array  $atts Attributes for the menu item.
 * @param  object $item Menu item object.
 * @param  array  $args Array of arguments.
 *
 * @return array   Updated menu item attributes.
 */
function _p_add_menu_aria_roles( $atts, $item, $args ) {
	$atts['role'] = 'menuitem';
	return $atts;
}
add_filter( 'nav_menu_item_attributes', '_p_add_menu_aria_roles', 10, 3 );

/**
 * Add specific classes and ARIA attributes to menu links.
 *
 * @param  array  $atts Attributes for the menu link.
 * @param  object $item Menu item object.
 * @param  array  $args Array of arguments.
 *
 * @return array   Updated menu link attributes.
 */
function _p_add_link_attributes( $atts, $item, $args ) {
	$classes = array( 'nav-link' );

	if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
		$atts['aria-haspopup'] = 'true';

		$classes[] = 'dropdown';
		$classes[] = 'dropdown-item';
	}

	$atts['class'] = esc_attr( implode( ' ', array_unique( $classes ) ) );

	return $atts;
}
add_filter( 'nav_menu_link_attributes', '_p_add_link_attributes', 10, 3 );

/**
 * Add a custom icon inside the menu item text.
 *
 * @param  string $title Menu item title.
 * @param  object $item  Menu item object.
 * @param  array  $args  Array of arguments.
 * @param  int    $depth Depth of menu item.
 *
 * @return string  Updated menu item title with icon.
 */
function _p_add_nav_item_icon( $title, $item, $args, $depth ) {

	$title = '<span class="menu-item-text-inner" itemprop="name">' . $title;
		// Uncomment to include SVG icons. // phpcs:ignore Squiz.PHP.CommentedOutCode.Found
		// $title .= munich_get_svg_icon( 'custom-shape-4', 'qodef--main' );
		// $title .= munich_get_svg_icon( 'custom-shape-3', 'qodef--dropdown' );
	$title .= '</span>';

	return $title;
}
add_filter( 'nav_menu_item_title', '_p_add_nav_item_icon', 10, 4 );

/**
 * Add a toggle button to parent menu items that have child items.
 *
 * @param  string $item_output HTML output for a single menu item.
 * @param  object $item        Menu item object.
 * @param  int    $depth       Depth of menu item.
 * @param  array  $args        Array of arguments.
 * @return string  Updated menu item output with toggle button.
 */
function _p_add_toggle_to_menu_parents( $item_output, $item, $depth, $args ) {
	if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
		$target        = '#menu-item-' . $item->ID . ' > .sub-menu';
		$aria_label    = sprintf( __( 'Open child menu for %s', 'ptfw' ), esc_attr( $item->title ) ); // phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
		$toggle_button = '<button class="menu-toggle" aria-label="' . $aria_label . '" aria-expanded="false" aria-controls="' . $target . '">Toggle</button>';
		$item_output  .= $toggle_button;
	}
	return $item_output;
}
add_filter( 'walker_nav_menu_start_el', '_p_add_toggle_to_menu_parents', 10, 4 );

