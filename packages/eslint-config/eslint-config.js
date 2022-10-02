module.exports = {
    extends: [
        '@misterbridge/eslint-config-base',
        require.resolve('./modules/react'),
        '@misterbridge/eslint-config-base/prettier',
    ],
};
