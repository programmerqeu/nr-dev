/**
 * NRdev
 *
 * @category    Tests
 * @subcategory Integration
 * @package     NRdev
 * @author      André Lademann <andre.lademann@netresearch.de>
 * @license     https://netresearch.de/license
 * @version     0.2.0
 */

module.exports = {
    'Page title is correct': function (test) {
        test
            .open('http://google.com')
            .assert.title().is('Google', 'It has title')
            .screenshot('report/dalek/screenshots/google.png')
            .done();
    }
};
