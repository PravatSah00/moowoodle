import { __ } from '@wordpress/i18n';

export default {
    id: 'log',
    priority: 50,
    name: __("Log", "moowoodle"),
    desc: __("Advance log", "moowoodle"),
    icon: 'font-support',
    submitUrl: "save-moowoodle-setting",
    modal: [
        {
            key: "moowoodle_adv_log",
            type: "checkbox",
            label: __("Advance Log", 'moowoodle'),
            desc: __('These setting will record all advanced error informations. Please don\'t Enable it if not required, because it will create a large log file.', 'moowoodle'),
            options: [
                {
                    key: "moowoodle_adv_log",
                    value: "moowoodle_adv_log"
                }
            ]
        },
        {
            key: "moowoodle_adv_log",
            type: "log",
            classes: "log-section",
            dependent: {
                key: "moowoodle_adv_log",
                set: true
            }
        },
    ]
};