module.exports = {
    "extends": [
        "stylelint-config-airbnb",
        "stylelint-config-rational-order"
    ],
    "plugins": [
        "stylelint-order",
        "stylelint-config-rational-order/plugin"
    ],
    "ignoreFiles": [
        ".eslintrc.js",
        "webpack.mix.js"
    ],
    "rules": {
        "indentation": 4,
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ]
            }
        ],
        "order/properties-order": [],
        "plugin/rational-order": [
            true,
            {
                "border-in-box-model": true,
                "empty-line-between-groups": true
            }
        ]
    }
};