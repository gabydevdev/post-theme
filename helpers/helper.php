<?php
/**
 * Helper tags and functions.
 *
 * @package post-theme
 */

/**
 * Prints the formatted debug styles.
 */
function _p_debug_styles() {
	static $first_time = true;

	if ( ! $first_time ) {
		return;
	}

	echo '<style type="text/css">
        div._p_print_r {
            margin: 10px auto;
            padding: 0;
            max-width: 100%;
            width: calc(100% - (30px * 2));
            max-height: 500px;
            border-radius: 3px;
            background: #23282d;
            border: 1px solid #F5F5F5;
            position: relative;
            z-index: 11111;
            overflow-y: scroll;
        }
        div._p_print_r pre {
            display: block;
            margin: 0;
            padding: 5px;
            color: #78FF5B;
            background: #23282d;
            text-shadow: 1px 1px 0 #000;
            font-family: Consolas, monospace;
            font-size: 12px;
            line-height: 16px;
            text-align: left;
        }
        div._p_print_r_group {
            margin: 10px auto;
            padding: 1px;
            border-radius: 5px;
            background: #f1f1f1;
            position: relative;
            z-index: 11110;
        }
        div._p_print_r_group div._p_print_r {
            margin: 9px;
            border-width: 0;
        }
    </style>';

	$first_time = false;
}

/**
 * Prints a value or a group of values in a formatted way.
 *
 * @param mixed ...$args The value or values to be printed.
 */
function _p_print( ...$args ) {
	_p_debug_styles();

	if ( count( $args ) === 1 ) {
		echo '<div class="_p_print_r"><pre>';
		echo htmlspecialchars( print_r( $args[0], true ), ENT_QUOTES, 'UTF-8' );
		echo '</pre></div>';
	} else {
		echo '<div class="_p_print_r_group">';
		foreach ( $args as $param ) {
			_p_print( $param );
		}
		echo '</div>';
	}
}

if ( ! function_exists( 'debug' ) ) {
	/**
	 * Alias for _p_print
	 *
	 * @see _p_print()
	 */
	function debug( ...$args ) {
		_p_print( ...$args );
	}
}
