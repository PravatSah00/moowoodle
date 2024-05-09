<?php

namespace MooWoodle;

defined('ABSPATH') || exit;

/**
 * plugin Helper functions
 *
 * @version		3.1.7
 * @package		MooWoodle
 * @author 		DualCube
 */
class Util {
	/**
     * MooWoodle LOG function.
     * @param string $message
     * @return bool
     */
	public static function _log( $message ) {
		global $wp_filesystem;

		$message = var_export( $message, true );

		// Init filesystem
		if ( empty( $wp_filesystem ) ) {
			require_once ABSPATH . '/wp-admin/includes/file.php';
			WP_Filesystem();
		}

		// log folder create
		if ( ! file_exists( MW_LOGS . "/error.txt" ) ) {
			wp_mkdir_p( MW_LOGS );
			$message = "MooWoodle Log file Created\n";
		}

		// Clear log file
		if ( filter_input( INPUT_POST, 'clearlog', FILTER_DEFAULT ) !== null ) {
			$message = "MooWoodle Log file Cleared\n";
		}

		// Write Log
		if( $message != '' ) {
			$log_entry = gmdate( "d/m/Y H:i:s", time() ) . ': ' . $message;
			$existing_content = $wp_filesystem->get_contents( get_site_url( null, str_replace( ABSPATH, '', MW_LOGS ) . "/error.txt" ) );
			
			// Append existing content
			if ( ! empty( $existing_content ) ) {
				$log_entry = "\n" . $log_entry;
			}

			return $wp_filesystem->put_contents( MW_LOGS . "/error.txt", $existing_content . $log_entry );
		}

		return false;
	}

	/**
     * Function to console and debug errors.
     */
    public static function log( $str ) {
        $file = MooWoodle()->plugin_path . 'log/moowoodle.log';

        if ( file_exists( $file ) ) {
            // Open the file to get existing content
            $str = var_export( $str, true );

            // Wp_remote_gate replacement required
            $current = file_get_contents( $file );

            if ( $current ) {
                // Append a new content to the file
                $current .= "$str" . "\r\n";
                $current .= "-------------------------------------\r\n";
            } else {
                $current = "$str" . "\r\n";
                $current .= "-------------------------------------\r\n";
            }
            
            // Write the contents back to the file
            file_put_contents( $file, $current );
        }
    }

	/**
     * Get other templates ( e.g. product attributes ) passing attributes and including the file.
     *
     * @access public
     * @param mixed $template_name
     * @param array $args ( default: array() )
     * @return void
     */
    public static function get_template( $template_name, $args = [] ) {

        if ( $args && is_array( $args ) )
            extract( $args );

        $located = MooWoodle()->plugin_path.'templates/'.$template_name;
        
        load_template( $located, TRUE, $args );
    }
	
	/**
	 * Check is MooWoodle Pro is active or not.
	 * @return bool
	 */
	public static function is_pro_active() {
		return false;
	}

	/**
	 * Set moowoodle sync status
	 * @param mixed $status
	 * @return void
	 */
	public static function set_sync_status(  $status ) {
		$status_history   = get_transient( 'moowoodle_sync_status' );
		$status_history   = is_array( $status_history ) ? $status_history : [];
		$status_history[] = $status;

		set_transient( 'moowoodle_sync_status', $status_history, 3600 );
	}

	/**
	 * Get moowoodle sync status
	 * @return mixed
	 */
	public static function get_sync_status() {
		return get_transient( 'moowoodle_sync_status' );
	}

	/**
	 * Increment sync count
	 * @return void
	 */
	public static function increment_sync_count( ) {
		$sync_status 	= get_transient( 'moowoodle_sync_status' );
		$current_action = count( $sync_status ) - 1;

		// Update the current action count
		$sync_status[ $current_action ][ 'current' ]++;

		set_transient( 'moowoodle_sync_status',  $sync_status, 3600 );
		sleep(2);
	}

	/**
	 * Flush the sync status history
	 * @return void
	 */
	public static function flush_sync_status() {
		set_transient( 'moowoodle_sync_status', [] );
	}
}
