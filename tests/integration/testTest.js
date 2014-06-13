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
    },
    'Amazon does its thing': function (test) {
        test
            .open('http://www.amazon.com/')
            .type('#twotabsearchtextbox', 'Blues Brothers VHS')
            .click('.nav-submit-input')
            .waitForElement('#result_0')
            .assert.text('#result_0 .newaps a span').is('The Blues Brothers')
            .screenshot('report/dalek/screenshots/amazon.png')
            .done();
    }
};
