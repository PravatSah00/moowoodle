import { __ } from '@wordpress/i18n';

export default {
    id: "synchronize-user",
    priority: 10,
    name: __("Users - Manual & Automatic mode", 'moowoodle'),
    desc: __("Synchronize user data as needed, with automatic, real-time updates when users update their profiles.", 'moowoodle'),
    icon: "font-supervised_user_circle",
    submitUrl: "save-moowoodle-setting",
    proDependent: true,
    modal: [
        {
            key: "user_sync_direction",
            type: "checkbox-custom-img",
            desc: __("Once enabled, the real-time profile update scheduler will initiate based on the synchronization direction you set between your WordPress and Moodle sites. <br>The user roles to be synchronized are defined by selecting the appropriate settings below.", 'moowoodle'),
            label: __("Synchronization flow between sites", 'moowoodle'),
            proSetting: true,
        },
        {
            key: "wordpress_user_role",
            type: "checkbox-default",
            desc: __("Users from the chosen roles will be added or updated in Moodle.", 'moowoodle'),
            label: __("WordPress user role to synchronize", 'moowoodle'),
            options: Object.entries(appLocalizer.wp_user_roles).map(( [key, name ] ) => {
                return {
                    key: key,
                    label: name,
                    value: key
                }
            }),
            select_deselect: true,
            proSetting: true,
        },
        {
            key: "moodle_user_role",
            type: "checkbox-default",
            desc: __("Users from the chosen roles will be added or updated in WordPress.", 'moowoodle'),
            label: __("Moodle user role to synchronize", 'moowoodle'),
            options: Object.entries(appLocalizer.md_user_roles).map(( [key, name ] ) => {
                return {
                    key: key,
                    label: name,
                    value: key
                }
            }),
            select_deselect: true,
            proSetting: true,
        },
        {
            key: "user_sync_options",
            type: "sync_map",
            desc: __("Define the user profile information mapping between WordPress and Moodle. Add multiple rows above to define all the profile data you wish to map. Any remaining profile field will be excluded from the synchronization process.<br>User will be created based on their e-mail id, hence email id can't be mapped.", 'moowoodle'),
            label: __("Profile information mapping", 'moowoodle'),
            select_deselect: true,
            proSetting: true,
        },
        {
            key: "start_end_date",
            type: "checkbox",
            desc: __('When enabled, the course duration, such as the start and end dates, will be visible on the shop page.', 'moowoodle'),
            label: __("Display course duration in Shop Page", 'moowoodle'),
            options: [
                {
                    key: "start_end_date",
                    label: __('', 'moowoodle'),
                    value: "start_end_date"
                }
            ]
        },
        {
            key: "sync_user_btn",
            type: "syncbutton",
            interval: 10000,
            apilink: 'realtime-sync-users',
            statusApiLink: 'sync-status-user',
            label: "Synchronize profile instantly",
            value: "Update all current user profiles now!! ",
            desc: __("<span class='highlighted-part'>During user information synchronization, we verify the username linked to the email address. If we discover the same username in another instance but with a different email address, synchronization of the user's information is not possible.</span>", 'moowoodle'),
            proSetting: true,
        },
    ]
};
