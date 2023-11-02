<?php
/**
 * Elementor functions.
 *
 * @package post-theme
 */

/**
 * Additional animations
 *
 * @param  [type] $additional_animations [description]
 *
 * @return [type]                        [description]
 */
function _p_elementor_additional_animations($additional_animations) {
    $additional_animations = [
        'Fading Short' => [
            'fadeInDownShort'  => 'Fade In Down Short',
            'fadeInLeftShort'  => 'Fade In Left Short',
            'fadeInRightShort' => 'Fade In Right Short',
            'fadeInUpShort'    => 'Fade In Up Short',
        ],
    ];

    return $additional_animations;
}
add_filter( 'elementor/controls/animations/additional_animations', '_p_elementor_additional_animations' );
