/**
 * @summary
 * Disables BabyHint's banned properties.
 * 
 * @description 
 * This function is not intended for production use. The program will be
 * restarted for changes to take effect.
 * 
 * @category External
 * 
 * @example
 * document;
 * // expected error: 'document is a reserved word.'
 * 
 * // 1. Comment out the banned properties
 * // document;
 * allowBannedProperties();
 * 
 * // 2. Uncomment the banned properties
 * document;
 * // no expected error
 * 
 */
allowBannedProperties = () => {
    if (!_.isEmpty(BabyHint.bannedProperties)) {
        console.warn('Restarting program to allow banned properties...');
        BabyHint.bannedProperties = {};
        restart();
        throw 'Restarting program to allow banned properties...';
    }
};
